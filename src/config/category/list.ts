import { SortDirection } from "@material-ui/data-grid";
import { TentityPageConfig, TlistSpecConfig, TlistFieldConfig } from "config/entities";
import { mergeDeepRight } from "ramda";
import { base } from "./base";


const spec: TentityPageConfig<TlistSpecConfig> = {

  sequence: [
    "name",
    "trackersCount",
    "entriesCount",
  ],

  fieldi: {
    name: {
      width: 300,
      sort: "asc" as SortDirection,
    },
    trackersCount: {
      width: 200,
      get: (o: any) => o.trackersList.length,
    },
    entriesCount: {
      width: 200,
      get: (o: any) =>
        o.trackersList.reduce(
          (acc: number, o: any) => acc + o.entriesList.length,
          0
        ),
    },
  },

};

export const list = mergeDeepRight(base, spec) as TentityPageConfig<TlistFieldConfig>;
