import { TEntityPageConfig, TFormSpecConfig } from "config/entities";
import { mergeDeepRight } from "ramda";
import { base } from "./base";

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
