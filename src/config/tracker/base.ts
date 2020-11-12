import { TbaseEntityConfig } from "config/entities";

export const base: TbaseEntityConfig = {

  fieldi: {
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
