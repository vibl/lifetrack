import { TentityTypeK, entityTypeKs } from "config/entities";

export type SelectionAtom = Record<TentityTypeK, number[]>;

function init() {

  const acc:Record<string, any> = {};

  for(const key of entityTypeKs) {
    acc[key] = [];
  }
  return acc as SelectionAtom;
}

const selection: SelectionAtom = init();

export default selection;