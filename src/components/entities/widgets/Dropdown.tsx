import React from "react";
import { Controller } from "react-hook-form";
import { DocumentNode, gql, useQuery } from "@apollo/client";
import { TextField } from "@material-ui/core";
import { TformFieldConfig } from "config/entities";
import Autocomplete, { AutocompleteProps } from "@material-ui/lab/Autocomplete";
import { sortBy } from "lodash";
import { DropdownOptionT } from "../CreateEntity";

export function Dropdown(
  props: { field: TformFieldConfig; name: string } &
    Partial<AutocompleteProps<DropdownOptionT, false, false, false>>) {
  const { field, name } = props;
  const { loading, error, data } = useQuery(field.dropdown as DocumentNode);
  const options = React.useMemo(() => {
    const list = data?.list;
    return sortBy(list, ["name"]);
  }, [data]);
  const defaultValue = options && options[0];
  if (loading || !options)
    return <p>Loading...</p>;
  if (error)
    return <p>Error :(</p>;
  return (
    <Controller
      name={name}
      defaultValue={defaultValue.id}
      render={({ onChange }) => (
        <Autocomplete
          autoComplete={true}
          options={options}
          getOptionLabel={(option) => option.name}
          style={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Combo box" variant="outlined" />
          )}
          defaultValue={defaultValue}
          {...props}
          onChange={(e, option) => option && onChange(option.id)} />
      )} />
  );
}
