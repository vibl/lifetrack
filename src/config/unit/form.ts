import { gql } from "graphql.macro";
import * as z from "zod";
import { TEntityPageConfig, TFormSpecConfig } from "config/entities";
import { mergeDeepRight } from "ramda";
import { base } from "./base";

export const spec: Partial<TEntityPageConfig<TFormSpecConfig>> = {
  sequenceA: [
    "name",
    "abbreviation",
    "baseUnit",
    "multiplier",
  ],
  fieldC: {
    name: {
      width: 200,
      validation: z.string(),
    },
    abbreviation: {
      width: 200,
      validation: z.string(),
    },
    baseUnit: {
      width: 200,
      validation: z.string().transform(z.number(), Number),
      dropdown: gql`
        {
          list: unitsList {
            id
            name
          }
        }
      `,
    },
    multiplier: {
      width: 200,
    },
  },
};

export const form = mergeDeepRight(base, spec);
