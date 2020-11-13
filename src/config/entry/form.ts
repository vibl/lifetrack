import { TEntityPageConfig, TFormSpecConfig } from "config/entities";
import { gql } from "graphql.macro";
import { mergeDeepRight } from "ramda";
import { base } from "./base";

export const spec: Partial<TEntityPageConfig<TFormSpecConfig>> = {

  sequenceA: [
    "time",
    "trackerId",
    "value",
    "unit",
    "comment",
  ],

  fieldC: {
    time: {
      width: 300,
    },
    trackerId: {
      label: "Tracker",
      type: "number",
      defaultValue: 1,
      width: 200,
      dropdown: gql`
        {
          list: trackersList {
            id
            name
            unit {
              name
            }
          }
        }
      `,
    },
    value: {
      width: 100,
    },
    unit: {
      label: "Unit (from tracker)",
      width: 100,
      noInput: true,
      defaultValue: o => o?.trackerId?.unit?.name,
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
