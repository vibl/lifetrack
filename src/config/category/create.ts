import { TentityPageConfig, TformSpecConfig, TformFieldConfig } from "config/entities";
import { mergeDeepRight } from "ramda";
import { form } from "./form";

const spec: Partial<TentityPageConfig<TformSpecConfig>> = {

};

export const create = mergeDeepRight(form, spec) as TentityPageConfig<TformFieldConfig>;
