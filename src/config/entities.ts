import { SortDirection } from "@material-ui/data-grid";
import { DocumentNode } from "graphql";
import * as z from "zod";
import * as entry from "./entry";
import * as tracker from "./tracker";
import * as category from "./category";
import * as unit from "./unit";
import { Index, TObject, TValue } from "util/types";

export const entityTypeKs = ["entry", "tracker", "category", "unit"] as const;

export const zEntityTypeK = z.enum([...entityTypeKs]);

export type TEntityTypeK = typeof entityTypeKs[number];

export type TGqlRequestK = "list" | "create" | "update" | "delete";

export const defaultDefaultValueO = {
  string: "",
  number: 0,
  boolean: false,
  date: () => new Date(),
};

export type TFieldType = keyof typeof defaultDefaultValueO;

export type TBaseFieldConfig = {
  type: TFieldType,
  label: string,
  width?: number,
};
export type TListSpecConfig = Partial<TBaseFieldConfig> & {
  sort?: SortDirection,
  get?: (o: TObject) => any,
};
export type TListFieldConfig = TBaseFieldConfig & TListSpecConfig;

export type TFormSpecConfig = Partial<TBaseFieldConfig> & {
  defaultValue?: TValue | ( (o: TObject) => any ),
  validation?: z.ZodString | z.ZodNumber | z.ZodTransformer<any, any>,
  dropdown?: DocumentNode,
  noInput?: boolean,
};
export type TFormFieldConfig = TBaseFieldConfig & TFormSpecConfig;

export type TBaseEntityConfig = {
  fieldC: Index<TBaseFieldConfig>,
};

export type TEntityPageConfig<T> = {
  sequenceA: string[],
  fieldC: Index<T>,
};

export type TEntityConfig = {
  list: TEntityPageConfig<TListFieldConfig>,
  create: TEntityPageConfig<TFormFieldConfig>,
  update: TEntityPageConfig<TFormFieldConfig>,
};

export const entitiesConfigC: Record<TEntityTypeK, TEntityConfig> = {
  entry,
  tracker,
  category,
  unit,
};