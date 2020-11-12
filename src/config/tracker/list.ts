import { TEntityPageConfig, TListFieldConfig, TListSpecConfig } from "config/entities";
import { mergeDeepRight } from "ramda";
import { base } from "./base";


const spec: TEntityPageConfig<TListSpecConfig> = {
  sequenceA: [
    "name",
    "unit",
    "category",
    "entriesCount",
  ],
  fieldC: {
    name: {
      width: 200,
    },
    unit: {
      width: 200,
      get: o => o.unit.abbreviation,
    },
    category: {
      width: 200,
      get: o => o.category.name,
    },
    entriesCount: {
      width: 200,
      get: o => o.entriesList.length,
    },
  },

};

export const list = mergeDeepRight(base, spec) as TEntityPageConfig<TListFieldConfig>;