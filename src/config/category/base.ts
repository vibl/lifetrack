import { TbaseEntityConfig } from "config/entities";

export const base: TbaseEntityConfig  = {

  fieldi: {
    name: {
      label: "Category",
      type: "string",
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
