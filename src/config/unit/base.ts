import { TBaseEntityConfig } from "config/entities";

export const base: TBaseEntityConfig = {

  fieldC: {
    name: {
      label: "Unit",
      type: "string",
    },
    abbreviation: {
      label: "Abbreviation",
      type: "string",
    },
    baseUnit: {
      label: "Base unit",
      type: "number",
    },
    multiplier: {
      label: "Multiplier",
      type: "number",
    },
    trackersCount: {
      label: "Trackers count",
      type: "number",
    },
    entriesCount: {
      label: "Entries count",
      type: "number",
    },
  },
};
