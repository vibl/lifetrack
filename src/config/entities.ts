import { SortDirection } from "@material-ui/data-grid";
import { DocumentNode } from "graphql";
import * as z from "zod";
import { entityConfig as entry } from "./entry";
import { entityConfig as tracker } from "./tracker";
import { entityConfig as category } from "./category";
import { entityConfig as unit } from "./unit";

export const entityTypeKs = ["entry", "tracker", "category", "unit"] as const;

export const zEntityTypeK = z.enum([...entityTypeKs]);

export type TentityTypeK = typeof entityTypeKs[number];

export type TgqlRequestK = "list" | "create" | "update" | "delete";

export const defaults = {
  string: "",
  number: 0,
  boolean: false,
  date: () => new Date(),
  relation: null,
};

export type TfieldType = keyof typeof defaults;

export type Tfield = {
  id: string;
  type: TfieldType;
  header?: string;
  width?: number;
  sort?: SortDirection;
  get?: (o: any) => any;
  input?: boolean;
  validation?: z.ZodString | z.ZodNumber | z.ZodTransformer<any, any>;
  dropdown?: DocumentNode;
};

export type TentityConfig = {
  gql: Record<TgqlRequestK, DocumentNode>;
  fields: Tfield[];
};

export const entitiesConfig: Record<TentityTypeK, TentityConfig> = {
  entry,
  tracker,
  category,
  unit,
};