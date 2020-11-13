import { DocumentNode } from "graphql";
import { gql } from "graphql.macro";
import { TEntityTypeK } from "config/entities";

export type TGqlRequestK =
  | "list"
  | "create"
  | "loadBeforeUpdate"
  | "update"
  | "delete";

export enum EGqlRequestK {
  list = "list",
  create = "create",
  loadBeforeUpdate = "loadBeforeUpdate",
  update = "update",
  delete = "delete",
}

export type TentititiesGql = Record<
  TEntityTypeK,
  Record<EGqlRequestK, DocumentNode>
>;

export const entityGql: TentititiesGql = {
  entry: {
    list: gql`
      {
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
            }
          }
        }
      }
    `,

    create: gql`
      mutation CreateEntry($input: CreateEntryInput!) {
        createEntry(input: $input) {
          clientMutationId
          entry {
            id
            time
            comment
            value
            trackerId
          }
        }
      }
    `,

    loadBeforeUpdate: gql`
      query($input: Int!) {
        entity: entry(id: $input) {
          id
          time
          trackerId
          value
          comment
          createdAt
        }
      }
    `,

    update: gql`
      mutation UpdateEntry($input: UpdateEntryInput!) {
        updateEntry(input: $input) {
          clientMutationId
          entry {
            id
            time
            comment
            value
            trackerId
          }
        }
      }
    `,

    delete: gql`
      mutation DeleteEntry($input: DeleteEntryInput!) {
        deleteEntry(input: $input) {
          clientMutationId
          entity: entry {
            id
          }
        }
      }
    `,
  },
  tracker: {
    list: gql`
      {
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
          }
        }
      }
    `,
    create: gql`
      mutation CreateTracker($input: CreateTrackerInput!) {
        createTracker(input: $input) {
          clientMutationId
          tracker {
            id
            name
            unitId
            categoryId
          }
        }
      }
    `,

    loadBeforeUpdate: gql`
      query($input: Int!) {
        entity: tracker(id: $input) {
          id
          name
          unitId
          categoryId
        }
      }
    `,

    update: gql`
      mutation UpdateTracker($input: UpdateTrackerInput!) {
        updateTracker(input: $input) {
          clientMutationId
          tracker {
            id
            name
            unitId
            categoryId
          }
        }
      }
    `,

    delete: gql`
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
            }
          }
        }
      }
    `,
  },
  category: {
    list: gql`
      {
        list: categoriesList {
          id
          name
          trackersList {
            id
            entriesList {
              id
            }
          }
        }
      }
    `,

    create: gql`
      mutation CreateCategory($input: CreateCategoryInput!) {
        createCategory(input: $input) {
          clientMutationId
          category {
            id
            name
          }
        }
      }
    `,

    loadBeforeUpdate: gql`
      query($input: Int!) {
        entity: category(id: $input) {
          id
          name
        }
      }
    `,

    update: gql`
      mutation UpdateCategory($input: UpdateCategoryInput!) {
        updateCategory(input: $input) {
          clientMutationId
          category {
            id
            name
          }
        }
      }
    `,

    delete: gql`
      mutation DeleteCategory($input: DeleteCategoryInput!) {
        deleteCategory(input: $input) {
          clientMutationId
          entity: category {
            id
          }
        }
      }
    `,
  },
  unit: {
    list: gql`
      {
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
            }
          }
        }
      }
    `,

    create: gql`
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
              }
            }
          }
        }
      }
    `,

    loadBeforeUpdate: gql`
      query($input: Int!) {
        entity: unit(id: $input) {
          id
          name
          abbreviation
          baseUnit
          multiplier
        }
      }
      `,
    update: gql`
      mutation UpdateUnit($input: UpdateUnitInput!) {
        updateUnit(input: $input) {
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
              }
            }
          }
        }
      }
    `,

    delete: gql`
      mutation DeleteUnit($input: DeleteUnitInput!) {
        deleteUnit(input: $input) {
          clientMutationId
          entity: unit {
            id
          }
        }
      }
    `,
  },
};
