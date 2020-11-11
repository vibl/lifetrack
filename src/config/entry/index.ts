import { SortDirection } from "@material-ui/data-grid";
import { TentityConfig } from "config/entities";
import { gql, loader } from "graphql.macro";

export const entityConfig: TentityConfig = {
  fields: [
    {
      id: "id",
      type: "number",
    },
    {
      id: "time",
      header: "Time",
      type: "date",
      width: 300,
      sort: "desc" as SortDirection,
      get: (o: any) => new Date(o.time),
      input: true,
    },
    {
      id: "tracker",
      header: "Tracker",
      type: "string",
      width: 200,
      get: (o: any) => o.tracker.name,
    },
    {
      id: "trackerId",
      header: "Tracker",
      type: "relation",
      width: 200,
      get: (o: any) => o.tracker.name,
      input: true,
      dropdown: gql`{
        list: trackersList {
            id
            name
      }}`,
    },
    {
      id: "value",
      header: "Value",
      type: "number",
      width: 100,
      input: true,
    },
    {
      id: "unit",
      header: "Unit",
      type: "string",
      width: 100,
      get: (o: any) => o.tracker.unit.abbreviation,
    },
    {
      id: "comment",
      header: "Comment",
      type: "string",
      width: 200,
      input: true,
    },
    {
      id: "category",
      header: "Category",
      type: "string",
      width: 200,
      get: (o: any) => o.tracker.category.name,
    },
    {
      id: "createdAt",
      header: "Created at",
      type: "date",
      width: 200,
      get: (o: any) => new Date(o.createdAt),
    },
  ],

  gql: {
    list: loader("./list.graphql"),
    create: loader("./create.graphql"),
    update: loader("./update.graphql"),
    delete: loader("./delete.graphql"),
  },
};
