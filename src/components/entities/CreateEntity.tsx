import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { gql, useMutation } from "@apollo/client";
import { Box, Button, Card, TextField, TextFieldProps } from "@material-ui/core";
import entityConfig, { EntityTypeId, FieldType } from "config/entity";
import { indexBy, mapObjIndexed, prop } from "ramda";
import { useGoTo, useRoute } from "util/router";

type Action = "create";

const useEntityMutation = (action:Action, entityType: EntityTypeId, onMutationCompleted: any) => {
  const mutation = entityConfig[entityType].mutation[action];
  const [apolloMutationFn] = useMutation(gql(mutation), {
    onCompleted: onMutationCompleted,
  });
  const createEntity = (data: any) =>
    apolloMutationFn({ variables: { input: { [entityType]: data } } });
  return createEntity;
};

type FieldComponentIndex = Record<FieldType, typeof TextField>

const fieldComponent: FieldComponentIndex = {
  string: TextField,
  number: (props: TextFieldProps) => <TextField {...props}  type="number" />,
  boolean: TextField,  
  date: TextField,
};

type Props = {
  entityType: EntityTypeId;
};

function CreateEntityForm() {

  const { entityType } = useRoute();
  const goTo = useGoTo();
  
  const config = entityConfig[entityType];
  const onMutationCompleted = (data: any) => {
    alert("Entity created: \n" + JSON.stringify(data));
  };
  const { register, handleSubmit, reset } = useForm();

  const entityMutation = useEntityMutation("create", entityType, onMutationCompleted);
  if( !entityMutation ) return <div>Config not found for this mutation</div>;

  const fields = config.fields;
  const inputFields = fields.filter(field => field.input);
  const field = indexBy(prop("id"), fields);

  const convertValue = (val: string, key: string) => field[key].type === "number" ? Number(val) : val;

  const onSubmit = (entryData: Record<string, string>) => {
    console.log("Submitted data:", entryData);
    const data = mapObjIndexed( convertValue, entryData);
    entityMutation(data);
    goTo({ action: "list" });
    reset();
  };
  return (
    <Box p={1} clone>
      <Card>
        <form onSubmit={handleSubmit(onSubmit)}>
          {inputFields.map((field) => {
            const FieldComponent = fieldComponent[field.type];
            return (
              <FieldComponent
                key={field.id}
                name={field.id}
                label={field.header}
                inputRef={register}
                variant="outlined"
              />
            );
          })}
          <Button type="submit">Create</Button>
        </form>
      </Card>
    </Box>
  );
};

export default CreateEntityForm;
