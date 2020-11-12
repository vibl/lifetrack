import { TentityPageConfig, TformSpecConfig } from "config/entities";
import { gql } from "graphql.macro";
import { base } from "./base";
import { mergeDeepRight } from "ramda";

export const spec: Partial<TentityPageConfig<TformSpecConfig>> = {
  
  sequence: [
    "time",
    "trackerId",
    "value",
    "unit",
    "comment",
    "createdAt",
  ],

  fieldi: {
    time: {
      width: 300,
    },
    trackerId: {
      width: 200,
      dropdown: gql`
        {
          list: trackersList {
            id
            name
          }
        }
      `,
    },
    value: {
      width: 100,
    },
    unit: {
      width: 100,
    },
    comment: {
      width: 200,
    },
    createdAt: {
      width: 200,
    },
  },
};

export const form = mergeDeepRight(base, spec);
