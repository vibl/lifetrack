export default {

  queries: {
    list: `{
      entity: categories {
        nodes {
          id
          name
          trackers {
            totalCount
            nodes {
              entries {
                totalCount
    }}}}}}`
  },

  fields: [
    {
      id: "id",
      default: 0,
    },
    {
      id: "name",
      header: "Category",
      default: "",
      width: 300,
    },
    {
      id: "trackersCount",
      header: "Trackers count",
      default: 0,
      width: 200,
      get: (o: any) => o.trackers.totalCount,
    },
    {
      id: "entriesCount",
      header: "Entries count",
      default: 0,
      width: 200,
      get: (o: any) => o.trackers.nodes.reduce( (acc: number, o: any) => acc + o.entries.totalCount, 0),
    },
  ],
};
