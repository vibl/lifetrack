import { EntityTypeId, ActionId } from 'config/entity';
  
export type RouteAtom = {
  entityType: EntityTypeId,
  action: ActionId,
};

const routeAtom: RouteAtom = {
  entityType: "category",
  action: "list",
};

export default routeAtom;