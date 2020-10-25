export default {

  queries: {
    list: `{
      entity: trackers {
        nodes {
          name
          entries {
            totalCount
          }
          unit {
            abbreviation
          }
          category {
            name
    }}}}`
  },

  fields: [
    {
      id: "name",
      header: "Tracker",
      default: "",
    },
    {
      id: "unit",
      header: "Unit",
      default: "",
      get: (o: any) => o.unit.abbreviation,
    },
    {
      id: "category",
      header: "Category",
      default: "",
      get: (o: any) => o.category.name,
    },
    {
      id: "entriesCount",
      header: "Entries count",
      default: 0,
      get: (o: any) => o.entries.totalCount,
    },
  ],
};