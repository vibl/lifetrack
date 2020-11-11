import React from "react";
import { Controller } from "react-hook-form";
import { TextFieldProps } from "@material-ui/core";
import { Tfield } from "config/entities";
import { KeyboardDateTimePicker } from "@material-ui/pickers";

export function DateTimePicker(props:
  { field: Tfield; } &
  Partial<TextFieldProps>) {
  const { field } = props;
  const defaultValue = new Date();
  return (
    <Controller
      name={field.id}
      defaultValue={defaultValue}
      render={({ onChange, value }) => (
        <KeyboardDateTimePicker
          inputVariant={props.variant}
          ampm={false}
          label={field.id}
          onChange={(data) => { console.log("onChange:", data); onChange(data); }}
          onError={console.log}
          format="yyyy/MM/dd HH:mm"
          value={value}
          variant="inline" />
      )} />
  );
}
