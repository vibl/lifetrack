
import React, { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import { useRoutes } from "react-router-dom";
import { Navigate, NavigateProps, Outlet, useParams } from "react-router";
import Journal from "components/entities/Journal";
import CreateEntity from "components/entities/CreateEntity";
import EditEntity from "components/entities/EditEntity";
import EntityTable from "components/entities/EntityTable";
import { ActionId, EntityTypeId, entityTypeIds } from "config/entity";
import useRecoil from "data/state/recoil";

const actionComponent: Record<ActionId, FC<{}>> = {
  list: EntityTable,
  create: CreateEntity,
  edit: EditEntity,
}

function useUpdateRoute (entityType: EntityTypeId, action: ActionId) {
  const [route, setRoute] = useRecoil.route();
  if( 
    ( entityType && route.entityType !== entityType ) 
    || ( action && route.action !== action ) 
  ) {
    setRoute({ entityType, action });
  }
}

function Action() {
  const params = useParams();
  const entityType = params.entityType as EntityTypeId;
  const action = params.action as ActionId;
  useUpdateRoute(entityType, action);
  const ActionComponent = actionComponent[action];
  return <ActionComponent />
}

function Redirect(props: NavigateProps) {
  return <Navigate replace={true} {...props} />;
} 

function Routes() {
  return useRoutes([
    {
      path: "/",
      element: <Journal />,
      children: [
        {
          path: "/",
          element: <Redirect to="/category/create" />,
        },
        {
          path: `:entityType`,
          element: <Outlet />,
          children: [
            {
              path: "/",
              element: <Redirect to="list" />,
            },
            {
              path: ":action",
              element: <Action/>,
            },
          ],
        },
      ],
    },
  ]);
};

function AppRouter () {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default AppRouter;

            
