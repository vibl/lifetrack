import { SortDirection } from "@material-ui/data-grid";
import { TbaseEntityConfig } from "config/entities";
import { gql } from "graphql.macro";

export const base: TbaseEntityConfig = {

  fieldi: {
    time: {
      label: "Time",
      type: "date",
    },
    tracker: {
      label: "Tracker",
      type: "string",
    },
    trackerId: {
      label: "Tracker",
      type: "number",
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
    category: {
      label: "Category",
      type: "string",
    },
    createdAt: {
      label: "Created at",
      type: "date",
    },
  },
};
