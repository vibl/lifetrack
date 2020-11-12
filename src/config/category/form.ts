import { TEntityPageConfig, TFormSpecConfig } from "config/entities";
import { base } from "./base";
import { mergeDeepRight } from "ramda";

export const spec: Partial<TEntityPageConfig<TFormSpecConfig>> = {

  sequenceA: [
    "name",
  ],

  fieldC: {
    name: {
      width: 300,
    },
  },
};

export const form = mergeDeepRight(base, spec);
