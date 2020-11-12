import { SortDirection } from "@material-ui/data-grid";
import { DocumentNode } from "graphql";
import * as z from "zod";
import * as entry from "./entry";
import * as tracker from "./tracker";
import * as category from "./category";
import * as unit from "./unit";
import { Index } from "util/types";

export const entityTypeKs = ["entry", "tracker", "category", "unit"] as const;

export const zEntityTypeK = z.enum([...entityTypeKs]);

export type TentityTypeK = typeof entityTypeKs[number];

export type TgqlRequestK = "list" | "create" | "update" | "delete";

export const defaults = {
  string: "",
  number: 0,
  boolean: false,
  date: () => new Date(),
};

export type TfieldType = keyof typeof defaults;

export type TbaseFieldConfig = {
  type: TfieldType;
  label: string;
};
export type TlistSpecConfig = {
  label?: string,
  width: number;
  sort?: SortDirection;
  get?: (o: any) => any;
};
export type TlistFieldConfig = TbaseFieldConfig & TlistSpecConfig;

export type TformSpecConfig = {
  label?: string,
  width: number;
  validation?: z.ZodString | z.ZodNumber | z.ZodTransformer<any, any>;
  dropdown?: DocumentNode;
};
export type TformFieldConfig = TbaseFieldConfig & TformSpecConfig;

export type TbaseEntityConfig = {
  fieldi: Index<TbaseFieldConfig>,
};

export type TentityPageConfig<T> = {
  sequence: string[],
  fieldi: Index<T>,
};

export type TentityConfig = {
  list: TentityPageConfig<TlistFieldConfig>,
  create: TentityPageConfig<TformFieldConfig>,
  update: TentityPageConfig<TformFieldConfig>,
};

export const entitiesConfig: Record<TentityTypeK, TentityConfig> = {
  entry,
  tracker,
  category,
  unit,
};