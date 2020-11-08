import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { gql } from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A location in a connection that can be used for resuming pagination. */
  Cursor: any;
  /**
   * A point in time as described by the [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) standard. May or may not include a timezone.
   */
  Datetime: any;
};

/** A connection to a list of `Category` values. */
export type CategoriesConnection = {
  __typename?: 'CategoriesConnection';
  /** A list of `Category` objects. */
  nodes: Array<Category>;
  /** A list of edges which contains the `Category` and cursor to aid in pagination. */
  edges: Array<CategoriesEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Category` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Category` edge in the connection. */
export type CategoriesEdge = {
  __typename?: 'CategoriesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Category` at the end of the edge. */
  node: Category;
};

/** Methods to use when ordering `Category`. */
export enum CategoriesOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type Category = Node & {
  __typename?: 'Category';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  name: Scalars['String'];
  id: Scalars['Int'];
  /** Reads and enables pagination through a set of `Tracker`. */
  trackers: TrackersConnection;
};


export type CategoryTrackersArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<TrackersOrderBy>>;
  condition?: Maybe<TrackerCondition>;
  filter?: Maybe<TrackerFilter>;
};

/**
 * A condition to be used against `Category` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type CategoryCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['Int']>;
};

/** A filter to be used against `Category` object types. All fields are combined with a logical ‘and.’ */
export type CategoryFilter = {
  /** Filter by the object’s `id` field. */
  id?: Maybe<IntFilter>;
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<CategoryFilter>>;
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<CategoryFilter>>;
  /** Negates the expression. */
  not?: Maybe<CategoryFilter>;
};

/** An input for mutations affecting `Category` */
export type CategoryInput = {
  name: Scalars['String'];
  id?: Maybe<Scalars['Int']>;
};

/** Represents an update to a `Category`. Fields that are set will be updated. */
export type CategoryPatch = {
  name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
};

/** All input for the create `Category` mutation. */
export type CreateCategoryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Category` to be created by this mutation. */
  category: CategoryInput;
};

/** The output of our create `Category` mutation. */
export type CreateCategoryPayload = {
  __typename?: 'CreateCategoryPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Category` that was created by this mutation. */
  category?: Maybe<Category>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `Category`. May be used by Relay 1. */
  categoryEdge?: Maybe<CategoriesEdge>;
};


/** The output of our create `Category` mutation. */
export type CreateCategoryPayloadCategoryEdgeArgs = {
  orderBy?: Maybe<Array<CategoriesOrderBy>>;
};

/** All input for the create `Entry` mutation. */
export type CreateEntryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Entry` to be created by this mutation. */
  entry: EntryInput;
};

/** The output of our create `Entry` mutation. */
export type CreateEntryPayload = {
  __typename?: 'CreateEntryPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Entry` that was created by this mutation. */
  entry?: Maybe<Entry>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Tracker` that is related to this `Entry`. */
  tracker?: Maybe<Tracker>;
  /** An edge for our `Entry`. May be used by Relay 1. */
  entryEdge?: Maybe<EntriesEdge>;
};


/** The output of our create `Entry` mutation. */
export type CreateEntryPayloadEntryEdgeArgs = {
  orderBy?: Maybe<Array<EntriesOrderBy>>;
};

/** All input for the create `Tracker` mutation. */
export type CreateTrackerInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Tracker` to be created by this mutation. */
  tracker: TrackerInput;
};

/** The output of our create `Tracker` mutation. */
export type CreateTrackerPayload = {
  __typename?: 'CreateTrackerPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Tracker` that was created by this mutation. */
  tracker?: Maybe<Tracker>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Category` that is related to this `Tracker`. */
  category?: Maybe<Category>;
  /** Reads a single `Unit` that is related to this `Tracker`. */
  unit?: Maybe<Unit>;
  /** An edge for our `Tracker`. May be used by Relay 1. */
  trackerEdge?: Maybe<TrackersEdge>;
};


/** The output of our create `Tracker` mutation. */
export type CreateTrackerPayloadTrackerEdgeArgs = {
  orderBy?: Maybe<Array<TrackersOrderBy>>;
};

/** All input for the create `Unit` mutation. */
export type CreateUnitInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Unit` to be created by this mutation. */
  unit: UnitInput;
};

/** The output of our create `Unit` mutation. */
export type CreateUnitPayload = {
  __typename?: 'CreateUnitPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Unit` that was created by this mutation. */
  unit?: Maybe<Unit>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Unit` that is related to this `Unit`. */
  unitByBaseUnit?: Maybe<Unit>;
  /** An edge for our `Unit`. May be used by Relay 1. */
  unitEdge?: Maybe<UnitsEdge>;
};


/** The output of our create `Unit` mutation. */
export type CreateUnitPayloadUnitEdgeArgs = {
  orderBy?: Maybe<Array<UnitsOrderBy>>;
};



/** All input for the `deleteCategoryByNodeId` mutation. */
export type DeleteCategoryByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Category` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteCategory` mutation. */
export type DeleteCategoryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
};

/** The output of our delete `Category` mutation. */
export type DeleteCategoryPayload = {
  __typename?: 'DeleteCategoryPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Category` that was deleted by this mutation. */
  category?: Maybe<Category>;
  deletedCategoryNodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `Category`. May be used by Relay 1. */
  categoryEdge?: Maybe<CategoriesEdge>;
};


/** The output of our delete `Category` mutation. */
export type DeleteCategoryPayloadCategoryEdgeArgs = {
  orderBy?: Maybe<Array<CategoriesOrderBy>>;
};

/** All input for the `deleteEntryByNodeId` mutation. */
export type DeleteEntryByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Entry` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteEntry` mutation. */
export type DeleteEntryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
};

/** The output of our delete `Entry` mutation. */
export type DeleteEntryPayload = {
  __typename?: 'DeleteEntryPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Entry` that was deleted by this mutation. */
  entry?: Maybe<Entry>;
  deletedEntryNodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Tracker` that is related to this `Entry`. */
  tracker?: Maybe<Tracker>;
  /** An edge for our `Entry`. May be used by Relay 1. */
  entryEdge?: Maybe<EntriesEdge>;
};


/** The output of our delete `Entry` mutation. */
export type DeleteEntryPayloadEntryEdgeArgs = {
  orderBy?: Maybe<Array<EntriesOrderBy>>;
};

/** All input for the `deleteTrackerByNodeId` mutation. */
export type DeleteTrackerByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Tracker` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteTracker` mutation. */
export type DeleteTrackerInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
};

/** The output of our delete `Tracker` mutation. */
export type DeleteTrackerPayload = {
  __typename?: 'DeleteTrackerPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Tracker` that was deleted by this mutation. */
  tracker?: Maybe<Tracker>;
  deletedTrackerNodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Category` that is related to this `Tracker`. */
  category?: Maybe<Category>;
  /** Reads a single `Unit` that is related to this `Tracker`. */
  unit?: Maybe<Unit>;
  /** An edge for our `Tracker`. May be used by Relay 1. */
  trackerEdge?: Maybe<TrackersEdge>;
};


/** The output of our delete `Tracker` mutation. */
export type DeleteTrackerPayloadTrackerEdgeArgs = {
  orderBy?: Maybe<Array<TrackersOrderBy>>;
};

/** All input for the `deleteUnitByNodeId` mutation. */
export type DeleteUnitByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Unit` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteUnit` mutation. */
export type DeleteUnitInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
};

/** The output of our delete `Unit` mutation. */
export type DeleteUnitPayload = {
  __typename?: 'DeleteUnitPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Unit` that was deleted by this mutation. */
  unit?: Maybe<Unit>;
  deletedUnitNodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Unit` that is related to this `Unit`. */
  unitByBaseUnit?: Maybe<Unit>;
  /** An edge for our `Unit`. May be used by Relay 1. */
  unitEdge?: Maybe<UnitsEdge>;
};


/** The output of our delete `Unit` mutation. */
export type DeleteUnitPayloadUnitEdgeArgs = {
  orderBy?: Maybe<Array<UnitsOrderBy>>;
};

/** A connection to a list of `Entry` values. */
export type EntriesConnection = {
  __typename?: 'EntriesConnection';
  /** A list of `Entry` objects. */
  nodes: Array<Entry>;
  /** A list of edges which contains the `Entry` and cursor to aid in pagination. */
  edges: Array<EntriesEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Entry` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Entry` edge in the connection. */
export type EntriesEdge = {
  __typename?: 'EntriesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Entry` at the end of the edge. */
  node: Entry;
};

/** Methods to use when ordering `Entry`. */
export enum EntriesOrderBy {
  Natural = 'NATURAL',
  TrackerIdAsc = 'TRACKER_ID_ASC',
  TrackerIdDesc = 'TRACKER_ID_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type Entry = Node & {
  __typename?: 'Entry';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  time: Scalars['Datetime'];
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Int']>;
  createdAt: Scalars['Datetime'];
  trackerId: Scalars['Int'];
  id: Scalars['Int'];
  /** Reads a single `Tracker` that is related to this `Entry`. */
  tracker?: Maybe<Tracker>;
};

/** A condition to be used against `Entry` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type EntryCondition = {
  /** Checks for equality with the object’s `trackerId` field. */
  trackerId?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['Int']>;
};

/** A filter to be used against `Entry` object types. All fields are combined with a logical ‘and.’ */
export type EntryFilter = {
  /** Filter by the object’s `trackerId` field. */
  trackerId?: Maybe<IntFilter>;
  /** Filter by the object’s `id` field. */
  id?: Maybe<IntFilter>;
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<EntryFilter>>;
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<EntryFilter>>;
  /** Negates the expression. */
  not?: Maybe<EntryFilter>;
};

/** An input for mutations affecting `Entry` */
export type EntryInput = {
  time?: Maybe<Scalars['Datetime']>;
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  trackerId: Scalars['Int'];
  id?: Maybe<Scalars['Int']>;
};

/** Represents an update to a `Entry`. Fields that are set will be updated. */
export type EntryPatch = {
  time?: Maybe<Scalars['Datetime']>;
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  trackerId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** A filter to be used against Int fields. All fields are combined with a logical ‘and.’ */
export type IntFilter = {
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: Maybe<Scalars['Boolean']>;
  /** Equal to the specified value. */
  equalTo?: Maybe<Scalars['Int']>;
  /** Not equal to the specified value. */
  notEqualTo?: Maybe<Scalars['Int']>;
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: Maybe<Scalars['Int']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: Maybe<Scalars['Int']>;
  /** Included in the specified list. */
  in?: Maybe<Array<Scalars['Int']>>;
  /** Not included in the specified list. */
  notIn?: Maybe<Array<Scalars['Int']>>;
  /** Less than the specified value. */
  lessThan?: Maybe<Scalars['Int']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: Maybe<Scalars['Int']>;
  /** Greater than the specified value. */
  greaterThan?: Maybe<Scalars['Int']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: Maybe<Scalars['Int']>;
};

/** The root mutation type which contains root level fields which mutate data. */
export type Mutation = {
  __typename?: 'Mutation';
  /** Creates a single `Category`. */
  createCategory?: Maybe<CreateCategoryPayload>;
  /** Creates a single `Entry`. */
  createEntry?: Maybe<CreateEntryPayload>;
  /** Creates a single `Tracker`. */
  createTracker?: Maybe<CreateTrackerPayload>;
  /** Creates a single `Unit`. */
  createUnit?: Maybe<CreateUnitPayload>;
  /** Updates a single `Category` using its globally unique id and a patch. */
  updateCategoryByNodeId?: Maybe<UpdateCategoryPayload>;
  /** Updates a single `Category` using a unique key and a patch. */
  updateCategory?: Maybe<UpdateCategoryPayload>;
  /** Updates a single `Entry` using its globally unique id and a patch. */
  updateEntryByNodeId?: Maybe<UpdateEntryPayload>;
  /** Updates a single `Entry` using a unique key and a patch. */
  updateEntry?: Maybe<UpdateEntryPayload>;
  /** Updates a single `Tracker` using its globally unique id and a patch. */
  updateTrackerByNodeId?: Maybe<UpdateTrackerPayload>;
  /** Updates a single `Tracker` using a unique key and a patch. */
  updateTracker?: Maybe<UpdateTrackerPayload>;
  /** Updates a single `Unit` using its globally unique id and a patch. */
  updateUnitByNodeId?: Maybe<UpdateUnitPayload>;
  /** Updates a single `Unit` using a unique key and a patch. */
  updateUnit?: Maybe<UpdateUnitPayload>;
  /** Deletes a single `Category` using its globally unique id. */
  deleteCategoryByNodeId?: Maybe<DeleteCategoryPayload>;
  /** Deletes a single `Category` using a unique key. */
  deleteCategory?: Maybe<DeleteCategoryPayload>;
  /** Deletes a single `Entry` using its globally unique id. */
  deleteEntryByNodeId?: Maybe<DeleteEntryPayload>;
  /** Deletes a single `Entry` using a unique key. */
  deleteEntry?: Maybe<DeleteEntryPayload>;
  /** Deletes a single `Tracker` using its globally unique id. */
  deleteTrackerByNodeId?: Maybe<DeleteTrackerPayload>;
  /** Deletes a single `Tracker` using a unique key. */
  deleteTracker?: Maybe<DeleteTrackerPayload>;
  /** Deletes a single `Unit` using its globally unique id. */
  deleteUnitByNodeId?: Maybe<DeleteUnitPayload>;
  /** Deletes a single `Unit` using a unique key. */
  deleteUnit?: Maybe<DeleteUnitPayload>;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateCategoryArgs = {
  input: CreateCategoryInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateEntryArgs = {
  input: CreateEntryInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateTrackerArgs = {
  input: CreateTrackerInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateUnitArgs = {
  input: CreateUnitInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCategoryByNodeIdArgs = {
  input: UpdateCategoryByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCategoryArgs = {
  input: UpdateCategoryInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateEntryByNodeIdArgs = {
  input: UpdateEntryByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateEntryArgs = {
  input: UpdateEntryInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateTrackerByNodeIdArgs = {
  input: UpdateTrackerByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateTrackerArgs = {
  input: UpdateTrackerInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUnitByNodeIdArgs = {
  input: UpdateUnitByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUnitArgs = {
  input: UpdateUnitInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCategoryByNodeIdArgs = {
  input: DeleteCategoryByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCategoryArgs = {
  input: DeleteCategoryInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteEntryByNodeIdArgs = {
  input: DeleteEntryByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteEntryArgs = {
  input: DeleteEntryInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteTrackerByNodeIdArgs = {
  input: DeleteTrackerByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteTrackerArgs = {
  input: DeleteTrackerInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUnitByNodeIdArgs = {
  input: DeleteUnitByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUnitArgs = {
  input: DeleteUnitInput;
};

/** An object with a globally unique `ID`. */
export type Node = {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['Cursor']>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['Cursor']>;
};

/** The root query type which gives access points into the data universe. */
export type Query = Node & {
  __typename?: 'Query';
  /**
   * Exposes the root query type nested one level down. This is helpful for Relay 1
   * which can only query top level fields if they are in a particular form.
   */
  query: Query;
  /** The root query type must be a `Node` to work well with Relay 1 mutations. This just resolves to `query`. */
  nodeId: Scalars['ID'];
  /** Fetches an object given its globally unique `ID`. */
  node?: Maybe<Node>;
  /** Reads and enables pagination through a set of `Category`. */
  categories?: Maybe<CategoriesConnection>;
  /** Reads and enables pagination through a set of `Entry`. */
  entries?: Maybe<EntriesConnection>;
  /** Reads and enables pagination through a set of `Tracker`. */
  trackers?: Maybe<TrackersConnection>;
  /** Reads and enables pagination through a set of `Unit`. */
  units?: Maybe<UnitsConnection>;
  category?: Maybe<Category>;
  entry?: Maybe<Entry>;
  tracker?: Maybe<Tracker>;
  unit?: Maybe<Unit>;
  /** Reads a single `Category` using its globally unique `ID`. */
  categoryByNodeId?: Maybe<Category>;
  /** Reads a single `Entry` using its globally unique `ID`. */
  entryByNodeId?: Maybe<Entry>;
  /** Reads a single `Tracker` using its globally unique `ID`. */
  trackerByNodeId?: Maybe<Tracker>;
  /** Reads a single `Unit` using its globally unique `ID`. */
  unitByNodeId?: Maybe<Unit>;
};


/** The root query type which gives access points into the data universe. */
export type QueryNodeArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryCategoriesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<CategoriesOrderBy>>;
  condition?: Maybe<CategoryCondition>;
  filter?: Maybe<CategoryFilter>;
};


/** The root query type which gives access points into the data universe. */
export type QueryEntriesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<EntriesOrderBy>>;
  condition?: Maybe<EntryCondition>;
  filter?: Maybe<EntryFilter>;
};


/** The root query type which gives access points into the data universe. */
export type QueryTrackersArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<TrackersOrderBy>>;
  condition?: Maybe<TrackerCondition>;
  filter?: Maybe<TrackerFilter>;
};


/** The root query type which gives access points into the data universe. */
export type QueryUnitsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<UnitsOrderBy>>;
  condition?: Maybe<UnitCondition>;
  filter?: Maybe<UnitFilter>;
};


/** The root query type which gives access points into the data universe. */
export type QueryCategoryArgs = {
  id: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryEntryArgs = {
  id: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryTrackerArgs = {
  id: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryUnitArgs = {
  id: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryCategoryByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryEntryByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryTrackerByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryUnitByNodeIdArgs = {
  nodeId: Scalars['ID'];
};

export type Tracker = Node & {
  __typename?: 'Tracker';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  name: Scalars['String'];
  id: Scalars['Int'];
  categoryId: Scalars['Int'];
  unitId: Scalars['Int'];
  /** Reads a single `Category` that is related to this `Tracker`. */
  category?: Maybe<Category>;
  /** Reads a single `Unit` that is related to this `Tracker`. */
  unit?: Maybe<Unit>;
  /** Reads and enables pagination through a set of `Entry`. */
  entries: EntriesConnection;
};


export type TrackerEntriesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<EntriesOrderBy>>;
  condition?: Maybe<EntryCondition>;
  filter?: Maybe<EntryFilter>;
};

/** A condition to be used against `Tracker` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type TrackerCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `categoryId` field. */
  categoryId?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `unitId` field. */
  unitId?: Maybe<Scalars['Int']>;
};

/** A filter to be used against `Tracker` object types. All fields are combined with a logical ‘and.’ */
export type TrackerFilter = {
  /** Filter by the object’s `id` field. */
  id?: Maybe<IntFilter>;
  /** Filter by the object’s `categoryId` field. */
  categoryId?: Maybe<IntFilter>;
  /** Filter by the object’s `unitId` field. */
  unitId?: Maybe<IntFilter>;
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<TrackerFilter>>;
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<TrackerFilter>>;
  /** Negates the expression. */
  not?: Maybe<TrackerFilter>;
};

/** An input for mutations affecting `Tracker` */
export type TrackerInput = {
  name: Scalars['String'];
  id?: Maybe<Scalars['Int']>;
  categoryId: Scalars['Int'];
  unitId: Scalars['Int'];
};

/** Represents an update to a `Tracker`. Fields that are set will be updated. */
export type TrackerPatch = {
  name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  categoryId?: Maybe<Scalars['Int']>;
  unitId?: Maybe<Scalars['Int']>;
};

/** A connection to a list of `Tracker` values. */
export type TrackersConnection = {
  __typename?: 'TrackersConnection';
  /** A list of `Tracker` objects. */
  nodes: Array<Tracker>;
  /** A list of edges which contains the `Tracker` and cursor to aid in pagination. */
  edges: Array<TrackersEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Tracker` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Tracker` edge in the connection. */
export type TrackersEdge = {
  __typename?: 'TrackersEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Tracker` at the end of the edge. */
  node: Tracker;
};

/** Methods to use when ordering `Tracker`. */
export enum TrackersOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  CategoryIdAsc = 'CATEGORY_ID_ASC',
  CategoryIdDesc = 'CATEGORY_ID_DESC',
  UnitIdAsc = 'UNIT_ID_ASC',
  UnitIdDesc = 'UNIT_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type Unit = Node & {
  __typename?: 'Unit';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  name: Scalars['String'];
  abbreviation: Scalars['String'];
  id: Scalars['Int'];
  baseUnit: Scalars['Int'];
  multiplier: Scalars['Int'];
  /** Reads a single `Unit` that is related to this `Unit`. */
  unitByBaseUnit?: Maybe<Unit>;
  /** Reads and enables pagination through a set of `Unit`. */
  unitsByBaseUnit: UnitsConnection;
  /** Reads and enables pagination through a set of `Tracker`. */
  trackers: TrackersConnection;
};


export type UnitUnitsByBaseUnitArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<UnitsOrderBy>>;
  condition?: Maybe<UnitCondition>;
  filter?: Maybe<UnitFilter>;
};


export type UnitTrackersArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<TrackersOrderBy>>;
  condition?: Maybe<TrackerCondition>;
  filter?: Maybe<TrackerFilter>;
};

/** A condition to be used against `Unit` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type UnitCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `baseUnit` field. */
  baseUnit?: Maybe<Scalars['Int']>;
};

/** A filter to be used against `Unit` object types. All fields are combined with a logical ‘and.’ */
export type UnitFilter = {
  /** Filter by the object’s `id` field. */
  id?: Maybe<IntFilter>;
  /** Filter by the object’s `baseUnit` field. */
  baseUnit?: Maybe<IntFilter>;
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<UnitFilter>>;
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<UnitFilter>>;
  /** Negates the expression. */
  not?: Maybe<UnitFilter>;
};

/** An input for mutations affecting `Unit` */
export type UnitInput = {
  name: Scalars['String'];
  abbreviation: Scalars['String'];
  id?: Maybe<Scalars['Int']>;
  baseUnit: Scalars['Int'];
  multiplier?: Maybe<Scalars['Int']>;
};

/** Represents an update to a `Unit`. Fields that are set will be updated. */
export type UnitPatch = {
  name?: Maybe<Scalars['String']>;
  abbreviation?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  baseUnit?: Maybe<Scalars['Int']>;
  multiplier?: Maybe<Scalars['Int']>;
};

/** A connection to a list of `Unit` values. */
export type UnitsConnection = {
  __typename?: 'UnitsConnection';
  /** A list of `Unit` objects. */
  nodes: Array<Unit>;
  /** A list of edges which contains the `Unit` and cursor to aid in pagination. */
  edges: Array<UnitsEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Unit` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Unit` edge in the connection. */
export type UnitsEdge = {
  __typename?: 'UnitsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Unit` at the end of the edge. */
  node: Unit;
};

/** Methods to use when ordering `Unit`. */
export enum UnitsOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  BaseUnitAsc = 'BASE_UNIT_ASC',
  BaseUnitDesc = 'BASE_UNIT_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** All input for the `updateCategoryByNodeId` mutation. */
export type UpdateCategoryByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Category` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Category` being updated. */
  patch: CategoryPatch;
};

/** All input for the `updateCategory` mutation. */
export type UpdateCategoryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Category` being updated. */
  patch: CategoryPatch;
  id: Scalars['Int'];
};

/** The output of our update `Category` mutation. */
export type UpdateCategoryPayload = {
  __typename?: 'UpdateCategoryPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Category` that was updated by this mutation. */
  category?: Maybe<Category>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `Category`. May be used by Relay 1. */
  categoryEdge?: Maybe<CategoriesEdge>;
};


/** The output of our update `Category` mutation. */
export type UpdateCategoryPayloadCategoryEdgeArgs = {
  orderBy?: Maybe<Array<CategoriesOrderBy>>;
};

/** All input for the `updateEntryByNodeId` mutation. */
export type UpdateEntryByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Entry` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Entry` being updated. */
  patch: EntryPatch;
};

/** All input for the `updateEntry` mutation. */
export type UpdateEntryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Entry` being updated. */
  patch: EntryPatch;
  id: Scalars['Int'];
};

/** The output of our update `Entry` mutation. */
export type UpdateEntryPayload = {
  __typename?: 'UpdateEntryPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Entry` that was updated by this mutation. */
  entry?: Maybe<Entry>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Tracker` that is related to this `Entry`. */
  tracker?: Maybe<Tracker>;
  /** An edge for our `Entry`. May be used by Relay 1. */
  entryEdge?: Maybe<EntriesEdge>;
};


/** The output of our update `Entry` mutation. */
export type UpdateEntryPayloadEntryEdgeArgs = {
  orderBy?: Maybe<Array<EntriesOrderBy>>;
};

/** All input for the `updateTrackerByNodeId` mutation. */
export type UpdateTrackerByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Tracker` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Tracker` being updated. */
  patch: TrackerPatch;
};

/** All input for the `updateTracker` mutation. */
export type UpdateTrackerInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Tracker` being updated. */
  patch: TrackerPatch;
  id: Scalars['Int'];
};

/** The output of our update `Tracker` mutation. */
export type UpdateTrackerPayload = {
  __typename?: 'UpdateTrackerPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Tracker` that was updated by this mutation. */
  tracker?: Maybe<Tracker>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Category` that is related to this `Tracker`. */
  category?: Maybe<Category>;
  /** Reads a single `Unit` that is related to this `Tracker`. */
  unit?: Maybe<Unit>;
  /** An edge for our `Tracker`. May be used by Relay 1. */
  trackerEdge?: Maybe<TrackersEdge>;
};


/** The output of our update `Tracker` mutation. */
export type UpdateTrackerPayloadTrackerEdgeArgs = {
  orderBy?: Maybe<Array<TrackersOrderBy>>;
};

/** All input for the `updateUnitByNodeId` mutation. */
export type UpdateUnitByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Unit` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Unit` being updated. */
  patch: UnitPatch;
};

/** All input for the `updateUnit` mutation. */
export type UpdateUnitInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Unit` being updated. */
  patch: UnitPatch;
  id: Scalars['Int'];
};

/** The output of our update `Unit` mutation. */
export type UpdateUnitPayload = {
  __typename?: 'UpdateUnitPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Unit` that was updated by this mutation. */
  unit?: Maybe<Unit>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Unit` that is related to this `Unit`. */
  unitByBaseUnit?: Maybe<Unit>;
  /** An edge for our `Unit`. May be used by Relay 1. */
  unitEdge?: Maybe<UnitsEdge>;
};


/** The output of our update `Unit` mutation. */
export type UpdateUnitPayloadUnitEdgeArgs = {
  orderBy?: Maybe<Array<UnitsOrderBy>>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>;
  Node: ResolversTypes['Query'] | ResolversTypes['Category'] | ResolversTypes['Tracker'] | ResolversTypes['Unit'] | ResolversTypes['Entry'];
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Cursor: ResolverTypeWrapper<Scalars['Cursor']>;
  CategoriesOrderBy: CategoriesOrderBy;
  CategoryCondition: CategoryCondition;
  CategoryFilter: CategoryFilter;
  IntFilter: IntFilter;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  CategoriesConnection: ResolverTypeWrapper<CategoriesConnection>;
  Category: ResolverTypeWrapper<Category>;
  String: ResolverTypeWrapper<Scalars['String']>;
  TrackersOrderBy: TrackersOrderBy;
  TrackerCondition: TrackerCondition;
  TrackerFilter: TrackerFilter;
  TrackersConnection: ResolverTypeWrapper<TrackersConnection>;
  Tracker: ResolverTypeWrapper<Tracker>;
  Unit: ResolverTypeWrapper<Unit>;
  UnitsOrderBy: UnitsOrderBy;
  UnitCondition: UnitCondition;
  UnitFilter: UnitFilter;
  UnitsConnection: ResolverTypeWrapper<UnitsConnection>;
  UnitsEdge: ResolverTypeWrapper<UnitsEdge>;
  PageInfo: ResolverTypeWrapper<PageInfo>;
  EntriesOrderBy: EntriesOrderBy;
  EntryCondition: EntryCondition;
  EntryFilter: EntryFilter;
  EntriesConnection: ResolverTypeWrapper<EntriesConnection>;
  Entry: ResolverTypeWrapper<Entry>;
  Datetime: ResolverTypeWrapper<Scalars['Datetime']>;
  EntriesEdge: ResolverTypeWrapper<EntriesEdge>;
  TrackersEdge: ResolverTypeWrapper<TrackersEdge>;
  CategoriesEdge: ResolverTypeWrapper<CategoriesEdge>;
  Mutation: ResolverTypeWrapper<{}>;
  CreateCategoryInput: CreateCategoryInput;
  CategoryInput: CategoryInput;
  CreateCategoryPayload: ResolverTypeWrapper<CreateCategoryPayload>;
  CreateEntryInput: CreateEntryInput;
  EntryInput: EntryInput;
  CreateEntryPayload: ResolverTypeWrapper<CreateEntryPayload>;
  CreateTrackerInput: CreateTrackerInput;
  TrackerInput: TrackerInput;
  CreateTrackerPayload: ResolverTypeWrapper<CreateTrackerPayload>;
  CreateUnitInput: CreateUnitInput;
  UnitInput: UnitInput;
  CreateUnitPayload: ResolverTypeWrapper<CreateUnitPayload>;
  UpdateCategoryByNodeIdInput: UpdateCategoryByNodeIdInput;
  CategoryPatch: CategoryPatch;
  UpdateCategoryPayload: ResolverTypeWrapper<UpdateCategoryPayload>;
  UpdateCategoryInput: UpdateCategoryInput;
  UpdateEntryByNodeIdInput: UpdateEntryByNodeIdInput;
  EntryPatch: EntryPatch;
  UpdateEntryPayload: ResolverTypeWrapper<UpdateEntryPayload>;
  UpdateEntryInput: UpdateEntryInput;
  UpdateTrackerByNodeIdInput: UpdateTrackerByNodeIdInput;
  TrackerPatch: TrackerPatch;
  UpdateTrackerPayload: ResolverTypeWrapper<UpdateTrackerPayload>;
  UpdateTrackerInput: UpdateTrackerInput;
  UpdateUnitByNodeIdInput: UpdateUnitByNodeIdInput;
  UnitPatch: UnitPatch;
  UpdateUnitPayload: ResolverTypeWrapper<UpdateUnitPayload>;
  UpdateUnitInput: UpdateUnitInput;
  DeleteCategoryByNodeIdInput: DeleteCategoryByNodeIdInput;
  DeleteCategoryPayload: ResolverTypeWrapper<DeleteCategoryPayload>;
  DeleteCategoryInput: DeleteCategoryInput;
  DeleteEntryByNodeIdInput: DeleteEntryByNodeIdInput;
  DeleteEntryPayload: ResolverTypeWrapper<DeleteEntryPayload>;
  DeleteEntryInput: DeleteEntryInput;
  DeleteTrackerByNodeIdInput: DeleteTrackerByNodeIdInput;
  DeleteTrackerPayload: ResolverTypeWrapper<DeleteTrackerPayload>;
  DeleteTrackerInput: DeleteTrackerInput;
  DeleteUnitByNodeIdInput: DeleteUnitByNodeIdInput;
  DeleteUnitPayload: ResolverTypeWrapper<DeleteUnitPayload>;
  DeleteUnitInput: DeleteUnitInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {};
  Node: ResolversParentTypes['Query'] | ResolversParentTypes['Category'] | ResolversParentTypes['Tracker'] | ResolversParentTypes['Unit'] | ResolversParentTypes['Entry'];
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  Cursor: Scalars['Cursor'];
  CategoryCondition: CategoryCondition;
  CategoryFilter: CategoryFilter;
  IntFilter: IntFilter;
  Boolean: Scalars['Boolean'];
  CategoriesConnection: CategoriesConnection;
  Category: Category;
  String: Scalars['String'];
  TrackerCondition: TrackerCondition;
  TrackerFilter: TrackerFilter;
  TrackersConnection: TrackersConnection;
  Tracker: Tracker;
  Unit: Unit;
  UnitCondition: UnitCondition;
  UnitFilter: UnitFilter;
  UnitsConnection: UnitsConnection;
  UnitsEdge: UnitsEdge;
  PageInfo: PageInfo;
  EntryCondition: EntryCondition;
  EntryFilter: EntryFilter;
  EntriesConnection: EntriesConnection;
  Entry: Entry;
  Datetime: Scalars['Datetime'];
  EntriesEdge: EntriesEdge;
  TrackersEdge: TrackersEdge;
  CategoriesEdge: CategoriesEdge;
  Mutation: {};
  CreateCategoryInput: CreateCategoryInput;
  CategoryInput: CategoryInput;
  CreateCategoryPayload: CreateCategoryPayload;
  CreateEntryInput: CreateEntryInput;
  EntryInput: EntryInput;
  CreateEntryPayload: CreateEntryPayload;
  CreateTrackerInput: CreateTrackerInput;
  TrackerInput: TrackerInput;
  CreateTrackerPayload: CreateTrackerPayload;
  CreateUnitInput: CreateUnitInput;
  UnitInput: UnitInput;
  CreateUnitPayload: CreateUnitPayload;
  UpdateCategoryByNodeIdInput: UpdateCategoryByNodeIdInput;
  CategoryPatch: CategoryPatch;
  UpdateCategoryPayload: UpdateCategoryPayload;
  UpdateCategoryInput: UpdateCategoryInput;
  UpdateEntryByNodeIdInput: UpdateEntryByNodeIdInput;
  EntryPatch: EntryPatch;
  UpdateEntryPayload: UpdateEntryPayload;
  UpdateEntryInput: UpdateEntryInput;
  UpdateTrackerByNodeIdInput: UpdateTrackerByNodeIdInput;
  TrackerPatch: TrackerPatch;
  UpdateTrackerPayload: UpdateTrackerPayload;
  UpdateTrackerInput: UpdateTrackerInput;
  UpdateUnitByNodeIdInput: UpdateUnitByNodeIdInput;
  UnitPatch: UnitPatch;
  UpdateUnitPayload: UpdateUnitPayload;
  UpdateUnitInput: UpdateUnitInput;
  DeleteCategoryByNodeIdInput: DeleteCategoryByNodeIdInput;
  DeleteCategoryPayload: DeleteCategoryPayload;
  DeleteCategoryInput: DeleteCategoryInput;
  DeleteEntryByNodeIdInput: DeleteEntryByNodeIdInput;
  DeleteEntryPayload: DeleteEntryPayload;
  DeleteEntryInput: DeleteEntryInput;
  DeleteTrackerByNodeIdInput: DeleteTrackerByNodeIdInput;
  DeleteTrackerPayload: DeleteTrackerPayload;
  DeleteTrackerInput: DeleteTrackerInput;
  DeleteUnitByNodeIdInput: DeleteUnitByNodeIdInput;
  DeleteUnitPayload: DeleteUnitPayload;
  DeleteUnitInput: DeleteUnitInput;
};

export type CategoriesConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CategoriesConnection'] = ResolversParentTypes['CategoriesConnection']> = {
  nodes?: Resolver<Array<ResolversTypes['Category']>, ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['CategoriesEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoriesEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['CategoriesEdge'] = ResolversParentTypes['CategoriesEdge']> = {
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Category'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Category'] = ResolversParentTypes['Category']> = {
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  trackers?: Resolver<ResolversTypes['TrackersConnection'], ParentType, ContextType, RequireFields<CategoryTrackersArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateCategoryPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateCategoryPayload'] = ResolversParentTypes['CreateCategoryPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  categoryEdge?: Resolver<Maybe<ResolversTypes['CategoriesEdge']>, ParentType, ContextType, RequireFields<CreateCategoryPayloadCategoryEdgeArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateEntryPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateEntryPayload'] = ResolversParentTypes['CreateEntryPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  entry?: Resolver<Maybe<ResolversTypes['Entry']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  tracker?: Resolver<Maybe<ResolversTypes['Tracker']>, ParentType, ContextType>;
  entryEdge?: Resolver<Maybe<ResolversTypes['EntriesEdge']>, ParentType, ContextType, RequireFields<CreateEntryPayloadEntryEdgeArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateTrackerPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateTrackerPayload'] = ResolversParentTypes['CreateTrackerPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tracker?: Resolver<Maybe<ResolversTypes['Tracker']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType>;
  unit?: Resolver<Maybe<ResolversTypes['Unit']>, ParentType, ContextType>;
  trackerEdge?: Resolver<Maybe<ResolversTypes['TrackersEdge']>, ParentType, ContextType, RequireFields<CreateTrackerPayloadTrackerEdgeArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateUnitPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateUnitPayload'] = ResolversParentTypes['CreateUnitPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  unit?: Resolver<Maybe<ResolversTypes['Unit']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  unitByBaseUnit?: Resolver<Maybe<ResolversTypes['Unit']>, ParentType, ContextType>;
  unitEdge?: Resolver<Maybe<ResolversTypes['UnitsEdge']>, ParentType, ContextType, RequireFields<CreateUnitPayloadUnitEdgeArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface CursorScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Cursor'], any> {
  name: 'Cursor';
}

export interface DatetimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Datetime'], any> {
  name: 'Datetime';
}

export type DeleteCategoryPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteCategoryPayload'] = ResolversParentTypes['DeleteCategoryPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType>;
  deletedCategoryNodeId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  categoryEdge?: Resolver<Maybe<ResolversTypes['CategoriesEdge']>, ParentType, ContextType, RequireFields<DeleteCategoryPayloadCategoryEdgeArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteEntryPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteEntryPayload'] = ResolversParentTypes['DeleteEntryPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  entry?: Resolver<Maybe<ResolversTypes['Entry']>, ParentType, ContextType>;
  deletedEntryNodeId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  tracker?: Resolver<Maybe<ResolversTypes['Tracker']>, ParentType, ContextType>;
  entryEdge?: Resolver<Maybe<ResolversTypes['EntriesEdge']>, ParentType, ContextType, RequireFields<DeleteEntryPayloadEntryEdgeArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteTrackerPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteTrackerPayload'] = ResolversParentTypes['DeleteTrackerPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tracker?: Resolver<Maybe<ResolversTypes['Tracker']>, ParentType, ContextType>;
  deletedTrackerNodeId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType>;
  unit?: Resolver<Maybe<ResolversTypes['Unit']>, ParentType, ContextType>;
  trackerEdge?: Resolver<Maybe<ResolversTypes['TrackersEdge']>, ParentType, ContextType, RequireFields<DeleteTrackerPayloadTrackerEdgeArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteUnitPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteUnitPayload'] = ResolversParentTypes['DeleteUnitPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  unit?: Resolver<Maybe<ResolversTypes['Unit']>, ParentType, ContextType>;
  deletedUnitNodeId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  unitByBaseUnit?: Resolver<Maybe<ResolversTypes['Unit']>, ParentType, ContextType>;
  unitEdge?: Resolver<Maybe<ResolversTypes['UnitsEdge']>, ParentType, ContextType, RequireFields<DeleteUnitPayloadUnitEdgeArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntriesConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntriesConnection'] = ResolversParentTypes['EntriesConnection']> = {
  nodes?: Resolver<Array<ResolversTypes['Entry']>, ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['EntriesEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntriesEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntriesEdge'] = ResolversParentTypes['EntriesEdge']> = {
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Entry'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Entry'] = ResolversParentTypes['Entry']> = {
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  time?: Resolver<ResolversTypes['Datetime'], ParentType, ContextType>;
  comment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Datetime'], ParentType, ContextType>;
  trackerId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  tracker?: Resolver<Maybe<ResolversTypes['Tracker']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createCategory?: Resolver<Maybe<ResolversTypes['CreateCategoryPayload']>, ParentType, ContextType, RequireFields<MutationCreateCategoryArgs, 'input'>>;
  createEntry?: Resolver<Maybe<ResolversTypes['CreateEntryPayload']>, ParentType, ContextType, RequireFields<MutationCreateEntryArgs, 'input'>>;
  createTracker?: Resolver<Maybe<ResolversTypes['CreateTrackerPayload']>, ParentType, ContextType, RequireFields<MutationCreateTrackerArgs, 'input'>>;
  createUnit?: Resolver<Maybe<ResolversTypes['CreateUnitPayload']>, ParentType, ContextType, RequireFields<MutationCreateUnitArgs, 'input'>>;
  updateCategoryByNodeId?: Resolver<Maybe<ResolversTypes['UpdateCategoryPayload']>, ParentType, ContextType, RequireFields<MutationUpdateCategoryByNodeIdArgs, 'input'>>;
  updateCategory?: Resolver<Maybe<ResolversTypes['UpdateCategoryPayload']>, ParentType, ContextType, RequireFields<MutationUpdateCategoryArgs, 'input'>>;
  updateEntryByNodeId?: Resolver<Maybe<ResolversTypes['UpdateEntryPayload']>, ParentType, ContextType, RequireFields<MutationUpdateEntryByNodeIdArgs, 'input'>>;
  updateEntry?: Resolver<Maybe<ResolversTypes['UpdateEntryPayload']>, ParentType, ContextType, RequireFields<MutationUpdateEntryArgs, 'input'>>;
  updateTrackerByNodeId?: Resolver<Maybe<ResolversTypes['UpdateTrackerPayload']>, ParentType, ContextType, RequireFields<MutationUpdateTrackerByNodeIdArgs, 'input'>>;
  updateTracker?: Resolver<Maybe<ResolversTypes['UpdateTrackerPayload']>, ParentType, ContextType, RequireFields<MutationUpdateTrackerArgs, 'input'>>;
  updateUnitByNodeId?: Resolver<Maybe<ResolversTypes['UpdateUnitPayload']>, ParentType, ContextType, RequireFields<MutationUpdateUnitByNodeIdArgs, 'input'>>;
  updateUnit?: Resolver<Maybe<ResolversTypes['UpdateUnitPayload']>, ParentType, ContextType, RequireFields<MutationUpdateUnitArgs, 'input'>>;
  deleteCategoryByNodeId?: Resolver<Maybe<ResolversTypes['DeleteCategoryPayload']>, ParentType, ContextType, RequireFields<MutationDeleteCategoryByNodeIdArgs, 'input'>>;
  deleteCategory?: Resolver<Maybe<ResolversTypes['DeleteCategoryPayload']>, ParentType, ContextType, RequireFields<MutationDeleteCategoryArgs, 'input'>>;
  deleteEntryByNodeId?: Resolver<Maybe<ResolversTypes['DeleteEntryPayload']>, ParentType, ContextType, RequireFields<MutationDeleteEntryByNodeIdArgs, 'input'>>;
  deleteEntry?: Resolver<Maybe<ResolversTypes['DeleteEntryPayload']>, ParentType, ContextType, RequireFields<MutationDeleteEntryArgs, 'input'>>;
  deleteTrackerByNodeId?: Resolver<Maybe<ResolversTypes['DeleteTrackerPayload']>, ParentType, ContextType, RequireFields<MutationDeleteTrackerByNodeIdArgs, 'input'>>;
  deleteTracker?: Resolver<Maybe<ResolversTypes['DeleteTrackerPayload']>, ParentType, ContextType, RequireFields<MutationDeleteTrackerArgs, 'input'>>;
  deleteUnitByNodeId?: Resolver<Maybe<ResolversTypes['DeleteUnitPayload']>, ParentType, ContextType, RequireFields<MutationDeleteUnitByNodeIdArgs, 'input'>>;
  deleteUnit?: Resolver<Maybe<ResolversTypes['DeleteUnitPayload']>, ParentType, ContextType, RequireFields<MutationDeleteUnitArgs, 'input'>>;
};

export type NodeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Node'] = ResolversParentTypes['Node']> = {
  __resolveType: TypeResolveFn<'Query' | 'Category' | 'Tracker' | 'Unit' | 'Entry', ParentType, ContextType>;
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export type PageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']> = {
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  startCursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  endCursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  query?: Resolver<ResolversTypes['Query'], ParentType, ContextType>;
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType, RequireFields<QueryNodeArgs, 'nodeId'>>;
  categories?: Resolver<Maybe<ResolversTypes['CategoriesConnection']>, ParentType, ContextType, RequireFields<QueryCategoriesArgs, 'orderBy'>>;
  entries?: Resolver<Maybe<ResolversTypes['EntriesConnection']>, ParentType, ContextType, RequireFields<QueryEntriesArgs, 'orderBy'>>;
  trackers?: Resolver<Maybe<ResolversTypes['TrackersConnection']>, ParentType, ContextType, RequireFields<QueryTrackersArgs, 'orderBy'>>;
  units?: Resolver<Maybe<ResolversTypes['UnitsConnection']>, ParentType, ContextType, RequireFields<QueryUnitsArgs, 'orderBy'>>;
  category?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType, RequireFields<QueryCategoryArgs, 'id'>>;
  entry?: Resolver<Maybe<ResolversTypes['Entry']>, ParentType, ContextType, RequireFields<QueryEntryArgs, 'id'>>;
  tracker?: Resolver<Maybe<ResolversTypes['Tracker']>, ParentType, ContextType, RequireFields<QueryTrackerArgs, 'id'>>;
  unit?: Resolver<Maybe<ResolversTypes['Unit']>, ParentType, ContextType, RequireFields<QueryUnitArgs, 'id'>>;
  categoryByNodeId?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType, RequireFields<QueryCategoryByNodeIdArgs, 'nodeId'>>;
  entryByNodeId?: Resolver<Maybe<ResolversTypes['Entry']>, ParentType, ContextType, RequireFields<QueryEntryByNodeIdArgs, 'nodeId'>>;
  trackerByNodeId?: Resolver<Maybe<ResolversTypes['Tracker']>, ParentType, ContextType, RequireFields<QueryTrackerByNodeIdArgs, 'nodeId'>>;
  unitByNodeId?: Resolver<Maybe<ResolversTypes['Unit']>, ParentType, ContextType, RequireFields<QueryUnitByNodeIdArgs, 'nodeId'>>;
};

export type TrackerResolvers<ContextType = any, ParentType extends ResolversParentTypes['Tracker'] = ResolversParentTypes['Tracker']> = {
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  categoryId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  unitId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType>;
  unit?: Resolver<Maybe<ResolversTypes['Unit']>, ParentType, ContextType>;
  entries?: Resolver<ResolversTypes['EntriesConnection'], ParentType, ContextType, RequireFields<TrackerEntriesArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TrackersConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TrackersConnection'] = ResolversParentTypes['TrackersConnection']> = {
  nodes?: Resolver<Array<ResolversTypes['Tracker']>, ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['TrackersEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TrackersEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TrackersEdge'] = ResolversParentTypes['TrackersEdge']> = {
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Tracker'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UnitResolvers<ContextType = any, ParentType extends ResolversParentTypes['Unit'] = ResolversParentTypes['Unit']> = {
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  abbreviation?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  baseUnit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  multiplier?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  unitByBaseUnit?: Resolver<Maybe<ResolversTypes['Unit']>, ParentType, ContextType>;
  unitsByBaseUnit?: Resolver<ResolversTypes['UnitsConnection'], ParentType, ContextType, RequireFields<UnitUnitsByBaseUnitArgs, 'orderBy'>>;
  trackers?: Resolver<ResolversTypes['TrackersConnection'], ParentType, ContextType, RequireFields<UnitTrackersArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UnitsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UnitsConnection'] = ResolversParentTypes['UnitsConnection']> = {
  nodes?: Resolver<Array<ResolversTypes['Unit']>, ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['UnitsEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UnitsEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['UnitsEdge'] = ResolversParentTypes['UnitsEdge']> = {
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Unit'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateCategoryPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateCategoryPayload'] = ResolversParentTypes['UpdateCategoryPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  categoryEdge?: Resolver<Maybe<ResolversTypes['CategoriesEdge']>, ParentType, ContextType, RequireFields<UpdateCategoryPayloadCategoryEdgeArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateEntryPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateEntryPayload'] = ResolversParentTypes['UpdateEntryPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  entry?: Resolver<Maybe<ResolversTypes['Entry']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  tracker?: Resolver<Maybe<ResolversTypes['Tracker']>, ParentType, ContextType>;
  entryEdge?: Resolver<Maybe<ResolversTypes['EntriesEdge']>, ParentType, ContextType, RequireFields<UpdateEntryPayloadEntryEdgeArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateTrackerPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateTrackerPayload'] = ResolversParentTypes['UpdateTrackerPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tracker?: Resolver<Maybe<ResolversTypes['Tracker']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType>;
  unit?: Resolver<Maybe<ResolversTypes['Unit']>, ParentType, ContextType>;
  trackerEdge?: Resolver<Maybe<ResolversTypes['TrackersEdge']>, ParentType, ContextType, RequireFields<UpdateTrackerPayloadTrackerEdgeArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateUnitPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateUnitPayload'] = ResolversParentTypes['UpdateUnitPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  unit?: Resolver<Maybe<ResolversTypes['Unit']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  unitByBaseUnit?: Resolver<Maybe<ResolversTypes['Unit']>, ParentType, ContextType>;
  unitEdge?: Resolver<Maybe<ResolversTypes['UnitsEdge']>, ParentType, ContextType, RequireFields<UpdateUnitPayloadUnitEdgeArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  CategoriesConnection?: CategoriesConnectionResolvers<ContextType>;
  CategoriesEdge?: CategoriesEdgeResolvers<ContextType>;
  Category?: CategoryResolvers<ContextType>;
  CreateCategoryPayload?: CreateCategoryPayloadResolvers<ContextType>;
  CreateEntryPayload?: CreateEntryPayloadResolvers<ContextType>;
  CreateTrackerPayload?: CreateTrackerPayloadResolvers<ContextType>;
  CreateUnitPayload?: CreateUnitPayloadResolvers<ContextType>;
  Cursor?: GraphQLScalarType;
  Datetime?: GraphQLScalarType;
  DeleteCategoryPayload?: DeleteCategoryPayloadResolvers<ContextType>;
  DeleteEntryPayload?: DeleteEntryPayloadResolvers<ContextType>;
  DeleteTrackerPayload?: DeleteTrackerPayloadResolvers<ContextType>;
  DeleteUnitPayload?: DeleteUnitPayloadResolvers<ContextType>;
  EntriesConnection?: EntriesConnectionResolvers<ContextType>;
  EntriesEdge?: EntriesEdgeResolvers<ContextType>;
  Entry?: EntryResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Node?: NodeResolvers<ContextType>;
  PageInfo?: PageInfoResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Tracker?: TrackerResolvers<ContextType>;
  TrackersConnection?: TrackersConnectionResolvers<ContextType>;
  TrackersEdge?: TrackersEdgeResolvers<ContextType>;
  Unit?: UnitResolvers<ContextType>;
  UnitsConnection?: UnitsConnectionResolvers<ContextType>;
  UnitsEdge?: UnitsEdgeResolvers<ContextType>;
  UpdateCategoryPayload?: UpdateCategoryPayloadResolvers<ContextType>;
  UpdateEntryPayload?: UpdateEntryPayloadResolvers<ContextType>;
  UpdateTrackerPayload?: UpdateTrackerPayloadResolvers<ContextType>;
  UpdateUnitPayload?: UpdateUnitPayloadResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
