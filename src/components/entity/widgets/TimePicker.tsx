import React from "react";
import { Controller } from "react-hook-form";
import { TextField, TextFieldProps } from "@material-ui/core";
import { TFormFieldConfig } from "config/entities";
import { DateTimePicker } from "@material-ui/pickers";

export function TimePicker(
  {
    fieldO,
    name,
    defaultValue,
    className,
  }:
  { fieldO: TFormFieldConfig } & Partial<TextFieldProps>,
) {
  return (
    <Controller
      name={name as string}
      defaultValue={defaultValue}
      render={({ onChange, value }) => (
        <DateTimePicker
          ampm={false}
          label={fieldO.label}
          onChange={data => { console.log("onChange:", data); onChange(data); }}
          renderInput={props => <TextField {...props} helperText="" className={className} />}
          onError={console.log}
          value={value}
          inputFormat="yyyy/MM/dd HH:mm"
        />
      )}
    />
  );
}
