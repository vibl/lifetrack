import { SortDirection } from "@material-ui/data-grid";
import { TBaseEntityConfig } from "config/entities";
import { gql } from "graphql.macro";

export const base: TBaseEntityConfig = {

  fieldC: {
    time: {
      label: "Time",
      type: "date",
    },
    value: {
      label: "Value",
      type: "number",
    },
    unit: {
      label: "Unit",
      type: "string",
    },
    comment: {
      label: "Comment",
      type: "string",
    },
  },
};
