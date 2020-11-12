import React from "react";
import { Controller } from "react-hook-form";
import { DocumentNode, useQuery } from "@apollo/client";
import { TextField } from "@material-ui/core";
import Autocomplete, { AutocompleteProps } from "@material-ui/lab/Autocomplete";
import { sortBy } from "lodash";
import { TFormFieldConfig } from "config/entities";

export type DropdownOptionT = {
  id: number;
  name: string;
};

export function Dropdown(
  { fieldO, ...props }: 
  { fieldO: TFormFieldConfig, name: string } 
    & Partial<AutocompleteProps<DropdownOptionT, false, false, false>>
  ) {
  const { name } = props;
  const { loading, error, data } = useQuery(fieldO.dropdown as DocumentNode);

  const options = React.useMemo(
    () => {
      const list = data?.list;
      return sortBy(list, ["name"]);
    }
  , [data]);

  if (loading || !options) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error :(</p>;
  }
  const defaultValue = options.find(o => o.id === props.defaultValue );
  return (
    <Controller
      name={name}
      defaultValue={defaultValue}
      render={({ onChange }) => (
        <Autocomplete
          autoComplete={true}
          options={options}
          getOptionLabel={option => option.name}
          getOptionSelected={(option, value) => option.id === value.id}
          style={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label={fieldO.label} variant="outlined" />
          )}
          defaultValue={defaultValue}
          onChange={(e, option) => option && onChange(option) } />
      )} />
  );
}
