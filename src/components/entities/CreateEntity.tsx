import React, { FC, useCallback } from "react";
import { FormProvider, useForm } from "react-hook-form";
import {
  Box,
  Button,
  Card,
  Checkbox,
  TextField,
  TextFieldProps,
} from "@material-ui/core";
import { entitiesConfigC, TFormFieldConfig, TFieldType, defaultDefaultValueO } from "config/entities";
import { mapObjIndexed } from "ramda";
import { TimePicker } from "./widgets/TimePicker";
import { Dropdown } from "./widgets/Dropdown";
import { useEntityMutation } from "data/graphql/hooks";
import { useEntityPageTuple, useGoTo } from "components/Router";
import { FetchResult } from "@apollo/client";

type FieldComponentIndex = Record<
  TFieldType,
  FC | typeof TextField | typeof Checkbox | typeof Dropdown | typeof TimePicker
>;

const fieldComponent: FieldComponentIndex = {
  string: TextFieldSafe,
  number: NumberField,
  boolean: Checkbox,
  date: TimePicker,
};

function getFieldComponent(fieldO: TFormFieldConfig) {
  return fieldO.dropdown
    ? Dropdown
    : fieldComponent[fieldO.type];
}
function NumberField({fieldO, ...props}: { fieldO:TFormFieldConfig } & TextFieldProps ) {
  return <TextField {...props} type="number" />;
}
function TextFieldSafe({fieldO, ...props}: { fieldO:TFormFieldConfig } & TextFieldProps ) {
  return <TextField {...props} />;
}

export function CreateEntity() {
  const [entityType] = useEntityPageTuple();
  const goTo = useGoTo();

  const { sequenceA, fieldC }  = entitiesConfigC[entityType].create;

  const formMethodsO = useForm();
  const { handleSubmit, register, reset, setValue, watch } = formMethodsO;
  const inputValueO = watch();
  
  const createEntity = useEntityMutation(
    "create",
    entityType,
    onMutationCompleted
  );

  const getDefaultValue = useCallback( 
      (fieldId: string, fieldO: TFormFieldConfig) => {
        if( typeof fieldO.defaultValue === "function" ) {
          const defaultValue = fieldO.defaultValue(inputValueO);
          if( inputValueO[fieldId] !== defaultValue) {
            setValue(fieldId, defaultValue);
          }
          return defaultValue;
        }
        return fieldO.defaultValue ?? defaultDefaultValueO[fieldO.type]; 
      }
  , [inputValueO, setValue] );


  function onMutationCompleted(data: FetchResult) {
    console.log("Entity created:", data);
  }

  function convertValue(val: any, key: string) {
    const fieldO = fieldC[key];
    return fieldO.dropdown
      ? val.id
      : fieldO.type === "number" 
        ? Number(val) 
        : val;
  }
  
  function onSubmit(entryDataO: Record<string, any>) {
    const submittedDataO = mapObjIndexed(convertValue, entryDataO);
    console.log('entryDataC:', entryDataO);
    console.log("submittedDataO:", submittedDataO);
    createEntity({ [entityType]: submittedDataO });
    goTo([, "list"]);
    reset();
  }

  return (
    <Box p={1} clone>
      <Card>
        <FormProvider {...formMethodsO}>
          <form onSubmit={handleSubmit(onSubmit)}>
            {sequenceA.map( fieldId => {
                const fieldO = fieldC[fieldId];
                const FieldComponent = getFieldComponent(fieldO);
                return (
                  <FieldComponent
                    key={fieldId}
                    name={fieldId}
                    label={fieldO.label}
                    variant="outlined"
                    fieldO={fieldO}
                    defaultValue={getDefaultValue(fieldId, fieldO)}
                    disabled={fieldO.noInput}
                    inputRef={register}
                    InputLabelProps={{ shrink: fieldO.noInput }}
                  />
                );
              })}
            <Button type="submit" color="inherit">Create</Button>
          </form>
        </FormProvider>
      </Card>
    </Box>
  );
}
