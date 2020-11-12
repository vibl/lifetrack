import React from "react";
import { Controller } from "react-hook-form";
import { TextFieldProps } from "@material-ui/core";
import { TFormFieldConfig } from "config/entities";
import { KeyboardDateTimePicker } from "@material-ui/pickers";

export function DateTimePicker(
  { field, name, defaultValue, variant }:
  { field: TFormFieldConfig } & Partial<TextFieldProps>
  ) {
  return (
    <Controller
      name={name as string}
      defaultValue={defaultValue}
      render={({ onChange, value }) => (
        <KeyboardDateTimePicker
          inputVariant={variant}
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
