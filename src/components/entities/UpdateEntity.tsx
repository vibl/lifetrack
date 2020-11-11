import React, { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import {
  Box,
  Button,
  Card,
  TextField,
  TextFieldProps,
} from "@material-ui/core";
import { entitiesConfig, Tfield, TfieldType } from "config/entities";
import { indexBy, mapObjIndexed, prop } from "ramda";
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
  relation: Dropdown,
};

export type DropdownOptionT = {
  id: number;
  name: string;
};

function NumberField(props: TextFieldProps) {
  return <TextField {...props} type="number" />;
}

function Field(props: { field: Tfield; inputRef: any }) {
  const { field } = props;
  const FieldComponent = fieldComponent[field.type];
  return (
    <FieldComponent
      name={field.id}
      label={field.header}
      variant="outlined"
      {...props}
    />
  );
}

export function UpdateEntity() {
  const [entityType] = useEntityPageTuple();
  const goTo = useGoTo();

  const config = entitiesConfig[entityType];
  const onMutationCompleted = (data: FetchResult) => {
    console.log("Entity created:", data);
  };
  const formMethods = useForm();
  const { register, handleSubmit, reset } = formMethods;

  const updateEntity = useEntityMutation(
    "update",
    entityType,
    onMutationCompleted
  );
  if (!updateEntity) return <div>Config not found for this mutation</div>;

  const fields = config.fields;
  const inputFields = fields.filter((field) => field.input);
  const field = indexBy(prop("id"), fields);

  const convertValue = (val: string, key: string) =>
    field[key].type === "number" ? Number(val) : val;

  const onSubmit = (entryData: Record<string, string>) => {
    const data = mapObjIndexed(convertValue, entryData);
    console.log("Submitted data:", data);

    updateEntity({ [entityType]: data });
    goTo([, "list" ]);
    reset();
  };
  return (
    <Box p={1} clone>
      <Card>
        <FormProvider {...formMethods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            {inputFields.map((field) => (
              <Field key={field.id} field={field} inputRef={register} />
            ))}
            <Button type="submit">Create</Button>
          </form>
        </FormProvider>
      </Card>
    </Box>
  );
}