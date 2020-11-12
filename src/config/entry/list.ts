import { SortDirection } from "@material-ui/data-grid";
import { TentityPageConfig, TlistFieldConfig, TlistSpecConfig } from "config/entities";
import { mergeDeepRight } from "ramda";
import { base } from "./base";

const spec: TentityPageConfig<TlistSpecConfig> = {
  sequence: [
    "time",
    "tracker",
    "value",
    "unit",
    "comment",
    "category",
    "createdAt",
  ],
  fieldi: {
    time: {
      width: 300,
      sort: "desc" as SortDirection,
      get: (o: any) => new Date(o.time),
    },
    tracker: {
      width: 200,
      get: (o: any) => o.tracker.name,
    },
    value: {
      width: 100,
    },
    unit: {
      width: 100,
      get: (o: any) => o.tracker.unit.abbreviation,
    },
    comment: {
      width: 200,
    },
    category: {
      width: 200,
      get: (o: any) => o.tracker.category.name,
    },
    createdAt: {
      width: 200,
      get: (o: any) => new Date(o.createdAt),
    },
  },
};

export const list = mergeDeepRight(base, spec) as TentityPageConfig<TlistFieldConfig>;
