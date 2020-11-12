import React from "react";
import { Controller } from "react-hook-form";
import { TextFieldProps } from "@material-ui/core";
import { TformFieldConfig } from "config/entities";
import { KeyboardDateTimePicker } from "@material-ui/pickers";

export function DateTimePicker(props:
  { field: TformFieldConfig, name: string } &
  Partial<TextFieldProps>) {
  const { field, name } = props;
  const defaultValue = new Date();
  return (
    <Controller
      name={name}
      defaultValue={defaultValue}
      render={({ onChange, value }) => (
        <KeyboardDateTimePicker
          inputVariant={props.variant}
          ampm={false}
          label={field.label}
          onChange={(data) => { console.log("onChange:", data); onChange(data); }}
          onError={console.log}
          format="yyyy/MM/dd HH:mm"
          value={value}
          variant="inline" />
      )} />
  );
}
