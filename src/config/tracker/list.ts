import { TentityPageConfig, TlistFieldConfig, TlistSpecConfig } from "config/entities";
import { mergeDeepRight } from "ramda";
import { base } from "./base";


const spec: TentityPageConfig<TlistSpecConfig> = {
  sequence: [
    "name",
    "unit",
    "category",
    "entriesCount",
  ],
  fieldi: {
    name: {
      width: 200,
    },
    unit: {
      width: 200,
      get: (o: any) => o.unit.abbreviation,
    },
    category: {
      width: 200,
      get: (o: any) => o.category.name,
    },
    entriesCount: {
      width: 200,
      get: (o: any) => o.entriesList.length,
    },
  },

};

export const list = mergeDeepRight(base, spec) as TentityPageConfig<TlistFieldConfig>;