import { SortDirection } from "@material-ui/data-grid";
import * as z from "zod";

export const entityTypeIds = [ "entry", "tracker", "category", "unit" ] as const;

export const zEntityTypeId = z.enum([...entityTypeIds]);

export type EntityTypeId = typeof entityTypeIds[number];

export const actionIds = [ "list", "create", "edit" ] as const;

export type ActionId = typeof actionIds[number];

export const defaults = {
  string: "",
  number: 0,
  boolean: false,
  date: () => new Date(),
}

export type FieldType = keyof typeof defaults;

export type Field= {
  id: string,
  type: FieldType,
  header?: string,
  width?: number,
  sort?: SortDirection,
  get?: (o: any) => any,
  input?: boolean,
  autocomplete?: string,
  validation?: z.ZodString | z.ZodNumber | z.ZodTransformer<any, any>,
};

export type Entity = {
  queries: {
    list: string,
    create?: string,
    edit?: string,
  },
  mutation: {
      create: string,
  }
  fields: Field[],
};

export type EntityConfig = Record<EntityTypeId, Entity>;

const entityConfig: EntityConfig = {
  category: {
    queries: {
      list: `{
        list: categoriesList {
          id
          name
          trackersList {
            id
            entriesList {
              id
        }}}}`,
    },

    mutation: {
      create: `
        mutation CreateCategory($input: CreateCategoryInput!) {
          createCategory(input: $input) {
          clientMutationId
          category {
            id
            name
        }}}`,
    },

    fields: [
      {
        id: "id",
        type: "number",
      },
      {
        id: "name",
        header: "Category",
        type: "string",
        width: 300,
        sort: "asc" as SortDirection,
        input: true,
      },
      {
        id: "trackersCount",
        header: "Trackers count",
        type: "number",
        width: 200,
        get: (o: any) => o.trackersList.length,
      },
      {
        id: "entriesCount",
        header: "Entries count",
        type: "number",
        width: 200,
        get: (o: any) =>
          o.trackersList.reduce(
            (acc: number, o: any) => acc + o.entriesList.length,
            0
          ),
      },
    ],
  },
  entry: {
    queries: {
      list: `{
        list: entriesList {
          createdAt
          id
          comment
          time
          value
          tracker {
            category {
              name
            }
            name
            unit {
              abbreviation
      }}}}`,
    },

    mutation: {
      create: ``,
    },

    fields: [
      {
        id: "id",
        type: "number",
      },
      {
        id: "time",
        header: "Time",
        type: "date",
        width: 300,
        sort: "desc" as SortDirection,
        get: (o: any) => new Date(o.time),
      },
      {
        id: "tracker",
        header: "Tracker",
        type: "string",
        width: 200,
        get: (o: any) => o.tracker.name,
      },
      {
        id: "value",
        header: "Value",
        type: "number",
        width: 100,
      },
      {
        id: "unit",
        header: "Unit",
        type: "string",
        width: 100,
        get: (o: any) => o.tracker.unit.abbreviation,
      },
      {
        id: "comment",
        header: "Comment",
        type: "number",
        width: 200,
      },
      {
        id: "category",
        header: "Category",
        type: "string",
        width: 200,
        get: (o: any) => o.tracker.category.name,
      },
      {
        id: "createdAt",
        header: "Created at",
        type: "date",
        width: 200,
        get: (o: any) => new Date(o.createdAt),
      },
    ],
  },
  tracker: {
    queries: {
      list: `{
        list: trackersList {
          id
          name
          entriesList {
            id
          }
          unit {
            abbreviation
          }
          category {
            name
      }}}`,
    },

    mutation: {
      create: ``,
    },
    

    fields: [
      {
        id: "id",
        type: "number",
      },
      {
        id: "name",
        header: "Tracker",
        type: "string",
        width: 200,
      },
      {
        id: "unit",
        header: "Unit",
        type: "string",
        width: 200,
        get: (o: any) => o.unit.abbreviation,
      },
      {
        id: "category",
        header: "Category",
        type: "string",
        width: 200,
        get: (o: any) => o.category.name,
      },
      {
        id: "entriesCount",
        header: "Entries count",
        type: "number",
        width: 200,
        get: (o: any) => o.entriesList.length,
      },
    ],
  },
  unit: {
    queries: {
      list: `{
        list: unitsList {
            id
            name
            abbreviation
            baseUnit
            multiplier
            trackersList {
              id
              entriesList {
                id
      }}}}`,
    },

    mutation: {
      create: `
        mutation CreateUnit($input: CreateUnitInput!) {
          createUnit(input: $input) {
          clientMutationId
          unit {
            id
            name
            abbreviation
            baseUnit
            multiplier
        }}}`,
    },
    
    fields: [
      {
        id: "id",
        type: "number",
      },
      {
        id: "name",
        header: "Unit",
        type: "string",
        width: 200,
        sort: "asc" as SortDirection,
        input: true,
        validation: z.string(),
      },
      {
        id: "abbreviation",
        header: "Abbreviation",
        type: "string",
        width: 200,
        input: true,
        validation: z.string(),
      },
      {
        id: "baseUnit",
        header: "Base unit",
        type: "number",
        width: 200,
        input: true,
        validation: z.string().transform(z.number(), Number),
        autocomplete: `{
          list: unitsList {
            id
            name
          }}`,
      },
      {
        id: "multiplier",
        header: "Multiplier",
        type: "number",
        width: 200,
        input: true,
      },
      {
        id: "trackersCount",
        header: "Trackers count",
        get: (o: any) => o.trackersList.length,
        type: "number",
        width: 200,
      },
      {
        id: "entriesCount",
        header: "Entries count",
        get: (o: any) =>
          o.trackersList.reduce(
            (acc: number, o: any) => acc + o.entriesList.length,
            0
          ),
        type: "number",
        width: 200,
      },
    ],
  },
};

export default entityConfig;
