import { SortDirection } from "@material-ui/data-grid";
import { TEntityPageConfig, TListSpecConfig, TListFieldConfig } from "config/entities";
import { mergeDeepRight } from "ramda";
import { base } from "./base";


const spec: TEntityPageConfig<TListSpecConfig> = {

  sequenceA: [
    "name",
    "trackersCount",
    "entriesCount",
  ],

  fieldC: {
    name: {
      width: 300,
      sort: "asc" as SortDirection,
    },
    trackersCount: {
      label: "Trackers count",
      type: "number",
      width: 200,
      get: o => o.trackersList.length,
    },
    entriesCount: {
      label: "Entries count",
      type: "number",
      width: 200,
      get: o =>
        o.trackersList.reduce(
          (acc: number, o: any) => acc + o.entriesList.length,
          0
        ),
    },
  },

};

export const list = mergeDeepRight(base, spec) as TEntityPageConfig<TListFieldConfig>;
