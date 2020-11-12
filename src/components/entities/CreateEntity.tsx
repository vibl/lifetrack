import React, { FC, useCallback, useEffect, useMemo } from "react";
import { FormProvider, useForm } from "react-hook-form";
import {
  Box,
  Button,
  Card,
  TextField,
  TextFieldProps,
} from "@material-ui/core";
import { entitiesConfigC, TFormFieldConfig, TFieldType, defaultDefaultValueO } from "config/entities";
import { map, mapObjIndexed } from "ramda";
import { DateTimePicker } from "./widgets/DateTimePicker";
import { Dropdown } from "./widgets/Dropdown";
import { useEntityMutation } from "data/graphql/hooks";
import { useEntityPageTuple, useGoTo } from "components/Router";
import { FetchResult } from "@apollo/client";
import { TObject } from "util/types";
import { isEqual } from "lodash";

type FieldComponentIndex = Record<
  TFieldType,
  FC | typeof TextField | typeof Dropdown | typeof DateTimePicker
>;

const fieldComponent: FieldComponentIndex = {
  string: TextField,
  number: NumberField,
  boolean: TextField,
  date: DateTimePicker,
};

function getFieldComponent(field: TFormFieldConfig) {
  return field.dropdown
    ? Dropdown
    : fieldComponent[field.type];
}

export type DropdownOptionT = {
  id: number;
  name: string;
};

function NumberField(props: TextFieldProps) {
  return <TextField {...props} type="number" />;
}

export function CreateEntity() {
  const [entityType] = useEntityPageTuple();
  const goTo = useGoTo();

  const { sequenceA, fieldC }  = entitiesConfigC[entityType].create;
  console.log('fieldC:', fieldC)

  const formMethodsO = useForm();
  const { getValues, handleSubmit, register, reset, setValue, watch } = formMethodsO;
  const inputValueO = watch();
  console.log('inputValueO:', inputValueO)
  
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
  , [inputValueO] );


  function onMutationCompleted(data: FetchResult) {
    console.log("Entity created:", data);
  }

  function convertValue(val: any, key: string) {
    const fieldO = fieldC[key];
    console.log('fieldO:', fieldO)
    console.log('val:', val)
    return fieldO.dropdown
      ? val.id
      : fieldO.type === "number" 
        ? Number(val) 
        : val;
  }

  function onSubmit(entryDataC: Record<string, string>) {
    console.log('entryDataC:', entryDataC)
    const dataC = mapObjIndexed(convertValue, entryDataC);
    console.log("Submitted data:", dataC);
    createEntity({ [entityType]: dataC });
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
                console.log('fieldO:', fieldO)
                const FieldComponent = getFieldComponent(fieldO);
                return (
                  <FieldComponent
                    key={fieldId}
                    name={fieldId}
                    label={fieldO.label}
                    variant="outlined"
                    field={fieldO}
                    defaultValue={getDefaultValue(fieldId, fieldO)}
                    inputRef={register}
                    disabled={fieldO.noInput}
                    InputLabelProps={{ shrink: fieldO.noInput }}
                  />
                );
              })}
            <Button type="submit">Create</Button>
          </form>
        </FormProvider>
      </Card>
    </Box>
  );
}
