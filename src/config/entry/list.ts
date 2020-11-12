import { SortDirection } from "@material-ui/data-grid";
import { TEntityPageConfig, TListFieldConfig, TListSpecConfig } from "config/entities";
import { mergeDeepRight } from "ramda";
import { base } from "./base";

const spec: TEntityPageConfig<TListSpecConfig> = {
  sequenceA: [
    "time",
    "tracker",
    "value",
    "unit",
    "comment",
    "category",
    "createdAt",
  ],
  fieldC: {
    time: {
      width: 300,
      sort: "desc" as SortDirection,
      get: o => new Date(o.time),
    },
    tracker: {
      label: "Tracker",
      type: "string",  
      width: 200,
      get: o => o.tracker.name,
    },
    value: {
      width: 100,
    },
    unit: {
      width: 100,
      get: o => o.tracker.unit.abbreviation,
    },
    comment: {
      width: 200,
    },
    category: {
      label: "Category",
      type: "string",
      width: 200,
      get: o => o.tracker.category.name,
    },
    createdAt: {
      label: "Created at",
      type: "date",
      width: 200,
      get: o => new Date(o.createdAt),
    },
  },
};

export const list = mergeDeepRight(base, spec) as TEntityPageConfig<TListFieldConfig>;
