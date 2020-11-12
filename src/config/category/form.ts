import { TentityPageConfig, TformSpecConfig } from "config/entities";
import { base } from "./base";
import { mergeDeepRight } from "ramda";

export const spec: Partial<TentityPageConfig<TformSpecConfig>> = {

  sequence: [
    "name",
  ],

  fieldi: {
    name: {
      width: 300,
    },
  },
};

export const form = mergeDeepRight(base, spec);
