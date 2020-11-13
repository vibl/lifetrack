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
import { entitiesConfigC, TFormFieldConfig, TFieldType } from "config/entities";
import { mapObjIndexed } from "ramda";
import { useEntityMutation } from "data/graphql/hooks";
import { useEntityPageTuple, useGoTo } from "components/Router";
import { FetchResult } from "@apollo/client";
import { Dropdown } from "./widgets/Dropdown";
import { TimePicker } from "./widgets/TimePicker";

type FieldComponentIndex = Record<
  TFieldType,
  FC | typeof TextField | typeof Checkbox | typeof Dropdown | typeof TimePicker
>;

function NumberField({ fieldO, ...props }: { fieldO:TFormFieldConfig } & TextFieldProps) {
  return <TextField {...props} type="number" />;
}

function TextFieldSafe({ fieldO, ...props }: { fieldO:TFormFieldConfig } & TextFieldProps) {
  return <TextField {...props} />;
}

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

export enum EFormType {
  create = "create",
  update = "update",
}

export function EntityForm(
  { formType, getDefaultValue }
  :{ formType: EFormType, getDefaultValue: (fieldId: string, fieldO: TFormFieldConfig) => any },
) {
  const [entityType] = useEntityPageTuple();
  const goTo = useGoTo();

  const { sequenceA, fieldC } = entitiesConfigC[entityType].create;

  const formMethodsO = useForm();
  const {
    handleSubmit, register, reset, setValue, watch,
  } = formMethodsO;
  const inputValuesO = watch();

  function onMutationCompleted(data: FetchResult) {
    console.log("Entity created:", data);
  }

  const mutateEntity = useEntityMutation(
    formType,
    entityType,
    onMutationCompleted,
  );

  function convertValue(val: any, key: string) {
    const fieldO = fieldC[key];
    return fieldO.dropdown
      ? val.id
      : fieldO.type === "number"
        ? Number(val)
        : val;
  }

  const setDefaultValue = useCallback(
    (fieldId: string, fieldO: TFormFieldConfig) => {
      if (typeof fieldO.defaultValue === "function") {
        const defaultValue = fieldO.defaultValue(inputValuesO);
        if (inputValuesO[fieldId] !== defaultValue) {
          setValue(fieldId, defaultValue);
        }
        return defaultValue;
      }
      return getDefaultValue(fieldId, fieldO);
    },
    [inputValuesO, getDefaultValue, setValue],
  );

  function onSubmit(entryDataO: Record<string, any>) {
    const submittedDataO = mapObjIndexed(convertValue, entryDataO);
    console.log("entryDataC:", entryDataO);
    console.log("submittedDataO:", submittedDataO);
    mutateEntity({ [entityType]: submittedDataO });
    goTo([, "list"]);
    reset();
  }

  return (
    <Box p={1} clone>
      <Card>
        <FormProvider {...formMethodsO}>
          <form onSubmit={handleSubmit(onSubmit)}>
            {sequenceA.map(fieldId => {
              const fieldO = fieldC[fieldId];
              const FieldComponent = getFieldComponent(fieldO);
              return (
                <FieldComponent
                  key={fieldId}
                  name={fieldId}
                  label={fieldO.label}
                  variant="outlined"
                  fieldO={fieldO}
                  defaultValue={setDefaultValue(fieldId, fieldO)}
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
