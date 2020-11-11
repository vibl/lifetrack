import { SortDirection } from "@material-ui/data-grid";
import { TentityConfig } from "config/entities";
import { gql, loader } from "graphql.macro";
import * as z from "zod";

export const entityConfig: TentityConfig = {
  fields: [
    {
      id: "id",
      type: "number",
    },
    {
      id: "name",
      header: "Unit",
      type: "string",
      width: 200,
      sort: "asc" as SortDirection,
      input: true,
      validation: z.string(),
    },
    {
      id: "abbreviation",
      header: "Abbreviation",
      type: "string",
      width: 200,
      input: true,
      validation: z.string(),
    },
    {
      id: "baseUnit",
      header: "Base unit",
      type: "number",
      width: 200,
      validation: z.string().transform(z.number(), Number),
    },
    {
      id: "baseUnit",
      header: "Base unit",
      type: "relation",
      width: 200,
      validation: z.string().transform(z.number(), Number),
      input: true,
      dropdown: gql`{
          list: unitsList {
            id
            name
          }}`,
    },
    {
      id: "multiplier",
      header: "Multiplier",
      type: "number",
      width: 200,
      input: true,
    },
    {
      id: "trackersCount",
      header: "Trackers count",
      get: (o: any) => o.trackersList.length,
      type: "number",
      width: 200,
    },
    {
      id: "entriesCount",
      header: "Entries count",
      get: (o: any) =>
        o.trackersList.reduce(
          (acc: number, o: any) => acc + o.entriesList.length,
          0
        ),
      type: "number",
      width: 200,
    },
  ],
  gql: {
    list: loader("./list.graphql"),
    create: loader("./create.graphql"),
    update: loader("./update.graphql"),
    delete: loader("./delete.graphql"),
  },
};
