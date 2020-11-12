import { SortDirection } from "@material-ui/data-grid";
import { TentityPageConfig, TlistFieldConfig, TlistSpecConfig } from "config/entities";
import { mergeDeepRight } from "ramda";
import { base } from "./base";


const spec: TentityPageConfig<TlistSpecConfig> = {
  sequence: [
    "name",
    "abbreviation",
    "baseUnit",
    "multiplier",
    "trackersCount",
    "entriesCount",
  ],
  fieldi: {
    name: {
      width: 200,
      sort: "asc" as SortDirection,
    },
    abbreviation: {
      width: 200,
    },
    baseUnit: {
      width: 200,
    },
    multiplier: {
      width: 200,
    },
    trackersCount: {
      get: (o: any) => o.trackersList.length,
      width: 200,
    },
    entriesCount: {
      get: (o: any) =>
        o.trackersList.reduce(
          (acc: number, o: any) => acc + o.entriesList.length,
          0
        ),
      width: 200,
    },
  },

};

export const list = mergeDeepRight(base, spec) as TentityPageConfig<TlistFieldConfig>;