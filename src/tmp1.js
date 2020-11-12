const { mergeDeepRight } = require("ramda");

const a = {

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

const b = {

  sequence: [
    "name",
    "unitId",
    "categoryId",
  ],

  fieldi: {
    name: {
      label: "Name",
      width: 200,
    },
    unitId: {
      width: 200,
    },
    categoryId: {
      width: 200,
    },
  },
};
const c = mergeDeepRight(a, b);
console.log('c:', c)
