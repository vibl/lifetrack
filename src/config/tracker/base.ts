import { TBaseEntityConfig } from "config/entities";

export const base: TBaseEntityConfig = {

  fieldC: {
    name: {
      label: "Tracker",
      type: "string",
    },
    unit: {
      label: "Unit",
      type: "string",
    },
    unitId: {
      label: "Unit",
      type: "number",
    },
    category: {
      label: "Category",
      type: "string",
    },
    categoryId: {
      label: "Category",
      type: "number",
    },
    entriesCount: {
      label: "Entries count",
      type: "number",
    },
  },
};
