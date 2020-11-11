import { SortDirection } from "@material-ui/data-grid";
import { TentityConfig } from "config/entities";
import { loader } from "graphql.macro";

export const entityConfig: TentityConfig = {
  fields: [
    {
      id: "id",
      type: "number",
    },
    {
      id: "name",
      header: "Category",
      type: "string",
      width: 300,
      sort: "asc" as SortDirection,
      input: true,
    },
    {
      id: "trackersCount",
      header: "Trackers count",
      type: "number",
      width: 200,
      get: (o: any) => o.trackersList.length,
    },
    {
      id: "entriesCount",
      header: "Entries count",
      type: "number",
      width: 200,
      get: (o: any) =>
        o.trackersList.reduce(
          (acc: number, o: any) => acc + o.entriesList.length,
          0
        ),
    },
  ],

  gql: {
    list: loader("./list.graphql"),
    create: loader("./create.graphql"),
    update: loader("./update.graphql"),
    delete: loader("./delete.graphql"),
  },
};
