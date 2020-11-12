import { gql } from "graphql.macro";
import { TentityPageConfig, TformSpecConfig } from "config/entities";
import { mergeDeepRight } from "ramda";
import { base } from "./base";

export const spec: Partial<TentityPageConfig<TformSpecConfig>> = {

  sequence: [
    "name",
    "unitId",
    "categoryId",
  ],

  fieldi: {
    name: {
      label: "Name",
      width: 200,
    },
    unitId: {
      width: 200,
      dropdown: gql`
        {
          list: unitsList {
            id
            name
          }
        }
      `,
    },
    categoryId: {
      width: 200,
      dropdown: gql`
        {
          list: categoriesList {
            id
            name
          }
        }
      `,
    },
  },
};

export const form = mergeDeepRight(base, spec);
console.log('tracker form:', form)

