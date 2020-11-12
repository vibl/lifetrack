import { SortDirection } from "@material-ui/data-grid";
import { gql } from "graphql.macro";
import * as z from "zod";
import { TentityPageConfig, TformSpecConfig } from "config/entities";
import { base } from "./base";
import { mergeDeepRight } from "ramda";

export const spec: Partial<TentityPageConfig<TformSpecConfig>> = {
  sequence: [
    "name",
    "abbreviation",
    "baseUnit",
    "multiplier",
  ],
  fieldi: {
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
