import { TBaseEntityConfig } from "config/entities";

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
