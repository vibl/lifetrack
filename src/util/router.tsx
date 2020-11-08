import { ActionId, EntityTypeId } from "config/entity";
import useRecoil from "data/state/recoil";
import { useNavigate } from "react-router-dom";


export type PathProps = { 
  entityType?: EntityTypeId, 
  action?: ActionId, 
};

export function useRoute() {
  const [route] = useRecoil.route();
  return route;
}
export function usePathTo() {
  const { entityType: oldEntityType, action: oldAction } = useRoute();
  return ({ entityType, action }: PathProps) => {
    const newEntityType = entityType ?? oldEntityType;
    const newAction = action ?? oldAction ?? "";
    return `/${newEntityType}/${newAction}`
  }
}

export function useGoTo() {
  const pathTo = usePathTo();
  const navigate = useNavigate();
  return (pathProps: PathProps) => {
    navigate(pathTo(pathProps), { replace: true });
  }
}