import { TEntityPageConfig, TFormSpecConfig, TFormFieldConfig } from "config/entities";
import { mergeDeepRight } from "ramda";
import { form } from "./form";

const spec: Partial<TEntityPageConfig<TFormSpecConfig>> = {

};

export const update = mergeDeepRight(form, spec) as TEntityPageConfig<TFormFieldConfig>;
