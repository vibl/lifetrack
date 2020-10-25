export default {

  queries: {
    list: `{
      entity: units {
        nodes {
          name
          abbreviation
          baseUnit
          multiplier
          trackers {
            totalCount
            nodes {
            entries {
              totalCount
    }}}}}}`
  },

  fields: [
    {
      id: "name",
      header: "Unit",
      default: "",
    },
    {
      id: "abbreviation",
      header: "Abbreviation",
      default: "",
    },
    {
      id: "baseUnit",
      header: "Base unit",
      default: "",
    },
    {
      id: "multiplier",
      header: "Multiplier",
      default: 0,
    },
    {
      id: "trackersCount",
      header: "Trackers count",
      get: (o: any) => o.trackers.totalCount,
      default: 0,
    },
    {
      id: "entriesCount",
      header: "Entries count",
      get: (o: any) => o.trackers.nodes.reduce( (acc: number, o: any) => acc + o.entries.totalCount, 0),
      default: 0,
    },
  ]
};