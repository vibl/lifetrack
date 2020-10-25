import React from "react";
import TextField from "@material-ui/core/TextField";
import { useForm } from "react-hook-form";
import { gql, useMutation } from '@apollo/client';
import Card from '@material-ui/core/Card';
import { Box } from "@material-ui/core";

const createCategoryMutation = gql`
  mutation CreateCategory($name: String!) {
    createCategory(input: {category: {name: $name}}) {
    clientMutationId
    category {
      id
    }
  }
}
`;

const FormCreate = () => {
  const onMutationCompleted = () => {
    alert('Category created');
  };
  const { register, handleSubmit, reset } = useForm();
  const [createCategory, { data }] = useMutation(createCategoryMutation, { onCompleted: onMutationCompleted});
  const onSubmit = (data: any) => {
    console.log("data.name", data.name)
    createCategory({ variables: data });
    reset();
  };
  return (
    <Box p={1} clone>
      <Card>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField name="name" label="name" inputRef={register} variant="outlined"/>
        </form>
      </Card>
    </Box>
  );
}

const Create = () => <FormCreate/>

export default Create;