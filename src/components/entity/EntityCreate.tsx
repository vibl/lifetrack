import React from "react";
import { defaultDefaultValueO, TFormFieldConfig } from "config/entities";
import { EFormType, EntityForm } from "./EntityForm";

export function EntityCreate() {

  function getDefaultValue(fieldId: string, fieldO: TFormFieldConfig) {
    return fieldO.defaultValue ?? defaultDefaultValueO[fieldO.type];
  }

  return (
    <EntityForm
      formType={EFormType.create}
      getDefaultValue={getDefaultValue}
    />
  );
}
