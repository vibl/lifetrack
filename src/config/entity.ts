import { SortDirection } from "@material-ui/data-grid";
import * as z from "zod";

export const entityTypeKs = [ "entry", "tracker", "category", "unit" ] as const;

export const zEntityTypeK = z.enum([...entityTypeKs]);

export type TentityTypeK = typeof entityTypeKs[number];

export type TgqlRequestK = "list" | "create" |"edit" | "delete"

export const defaults = {
  string: "",
  number: 0,
  boolean: false,
  date: () => new Date(),
  relation: null,
}

export type TfieldType = keyof typeof defaults;

export type Tfield= {
  id: string,
  type: TfieldType,
  header?: string,
  width?: number,
  sort?: SortDirection,
  get?: (o: any) => any,
  input?: boolean,
  validation?: z.ZodString | z.ZodNumber | z.ZodTransformer<any, any>,
  dropdown?: string,
};

export type TentityConfig = {
  gql: Record<TgqlRequestK, string>,
  fields: Tfield[],
};

export type TentitiesConfig = Record<TentityTypeK, TentityConfig>;

const entitiesConfig: TentitiesConfig = {
  entry: {
    gql: {
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

      create: `
        mutation CreateEntry($input: CreateEntryInput!) {
          createEntry(input: $input) {
          clientMutationId
          entry {
            id
            time
            comment
            value
            trackerId
        }}}`,

      edit: ``,

      delete: `
        mutation DeleteEntry($input: DeleteEntryInput!) {
          deleteEntry(input: $input) {
          clientMutationId
          entity: entry {
            id
          }
        }}`,
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
        input: true,
      },
      {
        id: "tracker",
        header: "Tracker",
        type: "string",
        width: 200,
        get: (o: any) => o.tracker.name,
      },
      {
        id: "trackerId",
        header: "Tracker",
        type: "relation",
        width: 200,
        get: (o: any) => o.tracker.name,
        input: true,
        dropdown: `{
          list: trackersList {
              id
              name
        }}`

      },
      {
        id: "value",
        header: "Value",
        type: "number",
        width: 100,
        input: true,
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
        type: "string",
        width: 200,
        input: true,
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
    gql: {
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
      create: `
        mutation CreateTracker($input: CreateTrackerInput!) {
          createTracker(input: $input) {
          clientMutationId
          tracker {
            id
            name
            unitId
            categoryId
        }}}`,
  
      edit: ``,

      delete: `
        mutation DeleteTracker($input: DeleteTrackerInput!) {
          deleteTracker(input: $input) {
          clientMutationId
          entity: tracker {
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
        }}}}`,
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
        input: true,
      },
      {
        id: "unit",
        header: "Unit",
        type: "string",
        width: 200,
        get: (o: any) => o.unit.abbreviation,
      },
      {
        id: "unitId",
        header: "Unit",
        type: "relation",
        width: 200,
        input: true,
        dropdown: `{
          list: unitsList {
              id
              name
        }}`
      },
      {
        id: "category",
        header: "Category",
        type: "string",
        width: 200,
        get: (o: any) => o.category.name,
      },
      {
        id: "categoryId",
        header: "Category",
        type: "relation",
        width: 200,
        input: true,
        dropdown: `{
          list: categoriesList {
              id
              name
        }}`
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
  category: {
    gql: {
      list: `{
        list: categoriesList {
          id
          name
          trackersList {
            id
            entriesList {
              id
        }}}}`,

      create: `
        mutation CreateCategory($input: CreateCategoryInput!) {
          createCategory(input: $input) {
          clientMutationId
          category {
            id
            name
        }}}`,
      
        edit: ``,

        delete: `
        mutation DeleteCategory($input: DeleteCategoryInput!) {
          deleteCategory(input: $input) {
          clientMutationId
          entity: category {
            id
          }
        }}`,
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
  unit: {
    gql: {
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

      create: `
        mutation CreateUnit($input: CreateUnitInput!) {
          createUnit(input: $input) {
          clientMutationId
          entity: unit {
            id
            name
            abbreviation
            baseUnit
            multiplier
            trackersList {
              id
              entriesList {
                id
        }}}}}`,
      
      edit: ``,

      delete: `
        mutation DeleteUnit($input: DeleteUnitInput!) {
          deleteUnit(input: $input) {
          clientMutationId
          entity: unit {
            id
          }
        }}`,

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
        validation: z.string().transform(z.number(), Number),
      },
      {
        id: "baseUnit",
        header: "Base unit",
        type: "relation",
        width: 200,
        validation: z.string().transform(z.number(), Number),
        input: true,
        dropdown: `{
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

export default entitiesConfig;
