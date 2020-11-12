import React, { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import {
  Box,
  Button,
  Card,
  TextField,
  TextFieldProps,
} from "@material-ui/core";
import { entitiesConfig, TformFieldConfig, TfieldType } from "config/entities";
import { mapObjIndexed } from "ramda";
import { DateTimePicker } from "./widgets/DateTimePicker";
import { Dropdown } from "./widgets/Dropdown";
import { useEntityMutation } from "data/graphql/hooks";
import { useEntityPageTuple, useGoTo } from "components/Router";
import { FetchResult } from "@apollo/client";

type FieldComponentIndex = Record<
  TfieldType,
  FC | typeof TextField | typeof Dropdown | typeof DateTimePicker
>;

const fieldComponent: FieldComponentIndex = {
  string: TextField,
  number: NumberField,
  boolean: TextField,
  date: DateTimePicker,
};

export type DropdownOptionT = {
  id: number;
  name: string;
};

function NumberField(props: TextFieldProps) {
  return <TextField {...props} type="number" />;
}

function Field(props: { name: string, field: TformFieldConfig; inputRef: any }) {
  const { field } = props;
  console.log('field:', props.name, field)

  const FieldComponent = field.dropdown ? Dropdown : fieldComponent[field.type];
  return (
    <FieldComponent
      label={field.label}
      variant="outlined"
      {...props}
    />
  );
}

export function CreateEntity() {
  const [entityType] = useEntityPageTuple();
  const goTo = useGoTo();

  const { sequence, fieldi }  = entitiesConfig[entityType].create;

  const onMutationCompleted = (data: FetchResult) => {
    console.log("Entity created:", data);
  };
  const formMethods = useForm();
  const { register, handleSubmit, reset } = formMethods;

  const createEntity = useEntityMutation(
    "create",
    entityType,
    onMutationCompleted
  );
  
  const convertValue = (val: string, key: string) =>
    fieldi[key].type === "number" ? Number(val) : val;

  const onSubmit = (entryData: Record<string, string>) => {
    const data = mapObjIndexed(convertValue, entryData);
    console.log("Submitted data:", data);

    createEntity({ [entityType]: data });
    goTo([, "list" ]);
    reset();
  };
  return (
    <Box p={1} clone>
      <Card>
        <FormProvider {...formMethods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            {sequence.map((fieldId) => (
              <Field key={fieldId} name={fieldId} field={fieldi[fieldId]} inputRef={register} />
            ))}
            <Button type="submit">Create</Button>
          </form>
        </FormProvider>
      </Card>
    </Box>
  );
}
