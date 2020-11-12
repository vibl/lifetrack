
import React, { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import { useRoutes } from "react-router-dom";
import { Navigate, NavigateProps, Outlet, useMatch, useParams } from "react-router";
import { EntityTemplate } from "components/entities/EntityTemplate";
import { CreateEntity } from "components/entities/CreateEntity";
import { UpdateEntity } from "components/entities/UpdateEntity";
import { EntityTable } from "components/entities/EntityTable";
import { entityTypeKs, TEntityTypeK } from "config/entities";
import { useNavigate } from "react-router-dom";

export type TpathTuple = [ string?, string? ];

export const entityPageKs = [ "list", "create", "update" ] as const;

export type TentityPageK = typeof entityPageKs[number];

export type TentityPageTuple = [ TEntityTypeK, TentityPageK ];

export function usePathTo() {
  const [ oldEntityType, oldEntityPage ] = useEntityPageTuple();
  return ([ entityType, entityPage ]: Partial<TentityPageTuple>) => {
    return `/${entityType ?? oldEntityType}/${entityPage ?? oldEntityPage ?? ""}`
  }
}

export function useGoTo() {
  const pathTo = usePathTo();
  const navigate = useNavigate();
  return (entityPageTuple: Partial<TentityPageTuple>) => {
    navigate(pathTo(entityPageTuple), { replace: true });
  }
}

export function usePathTuple(): TpathTuple {
  const match = useMatch(":param1/:param2");
  return [ match?.params?.param1, match?.params?.param2 ];
}

export function isEntityPageTuple(path: TpathTuple): path is TentityPageTuple {
  return entityTypeKs.includes(path[0] as TEntityTypeK) 
    && entityPageKs.includes(path[1] as TentityPageK)
}

export function useEntityPageTuple(): TentityPageTuple {
  const pathTuple = usePathTuple();
  if( !isEntityPageTuple(pathTuple) ) {
    throw new Error("pathTuple is not a TentityPageTuple")
  }
  return pathTuple
}

export function useIsCurrentLocationAnEntityPage() {
  const pathTuple = usePathTuple();
  return isEntityPageTuple(pathTuple)
}

const entityPageComponent: Record<TentityPageK, FC<{}>> = {
  list: EntityTable,
  create: CreateEntity,
  update: UpdateEntity,
}

function EntityPageComponent() {
  const pathTuple = useEntityPageTuple();
  const entityPageK = pathTuple[1];
  const Component = entityPageComponent[entityPageK];
  return <Component />
}

function Redirect(props: NavigateProps) {
  return <Navigate replace={true} {...props} />;
} 

function Routes() {
  return useRoutes([
    {
      path: "/",
      element: <EntityTemplate />,
      children: [
        {
          path: "/",
          element: <Redirect to="/unit/list" />,
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
              path: ":entityPage",
              element: <EntityPageComponent/>,
            },
          ],
        },
      ],
    },
  ]);
};

export function Router () {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

            
