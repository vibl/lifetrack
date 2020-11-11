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
      id: "name",
      header: "Tracker",
      type: "string",
      width: 200,
      input: true,
    },
    {
      id: "unit",
      header: "Unit",
      type: "string",
      width: 200,
      get: (o: any) => o.unit.abbreviation,
    },
    {
      id: "unitId",
      header: "Unit",
      type: "relation",
      width: 200,
      input: true,
      dropdown: gql`{
          list: unitsList {
              id
              name
        }}`,
    },
    {
      id: "category",
      header: "Category",
      type: "string",
      width: 200,
      get: (o: any) => o.category.name,
    },
    {
      id: "categoryId",
      header: "Category",
      type: "relation",
      width: 200,
      input: true,
      dropdown: gql`{
          list: categoriesList {
              id
              name
        }}`,
    },

    {
      id: "entriesCount",
      header: "Entries count",
      type: "number",
      width: 200,
      get: (o: any) => o.entriesList.length,
    },
  ],

  gql: {
    list: loader("./list.graphql"),
    create: loader("./create.graphql"),
    update: loader("./update.graphql"),
    delete: loader("./delete.graphql"),
  },
};
