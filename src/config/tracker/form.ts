import { gql } from "graphql.macro";
import { TEntityPageConfig, TFormSpecConfig } from "config/entities";
import { mergeDeepRight } from "ramda";
import { base } from "./base";

export const spec: Partial<TEntityPageConfig<TFormSpecConfig>> = {

  sequenceA: [
    "name",
    "unitId",
    "categoryId",
  ],

  fieldC: {
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

