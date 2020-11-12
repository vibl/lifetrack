import { TentityPageConfig, TbaseFieldConfig, TformSpecConfig, TformFieldConfig } from "config/entities";
import { mergeDeepRight } from "ramda";
import { form } from "./form";

const spec: Partial<TentityPageConfig<TformSpecConfig>> = {

};

export const update = mergeDeepRight(form, spec) as TentityPageConfig<TformFieldConfig>;
