import React, { FC } from "react";
import { BrowserRouter, useRoutes, useNavigate } from "react-router-dom";

import {
  matchPath,
  Navigate, NavigateProps, Outlet, useLocation,
} from "react-router"; // eslint-disable-line
import { EntityTemplate } from "components/entity/EntityTemplate";
import { EntityCreate } from "components/entity/EntityCreate";
import { EntityUpdate } from "components/entity/EntityUpdate";
import { EntityTable } from "components/entity/EntityTable";
import { entityTypeKs, TEntityTypeK } from "config/entities";

export type TpathTuple = [ string?, string?, number? ];

export const entityPageKs = ["list", "create", "update"] as const;

export type TentityPageK = typeof entityPageKs[number];

export type TentityPageTuple = [ TEntityTypeK, TentityPageK, number? ];

export function usePartialMatch(pattern: string) {
  const location = useLocation();
  let match;
  while (!match && pattern.length > 0) {
    match = matchPath(pattern, location.pathname);
    pattern = pattern.replace(/\/?[^/]+$/, "");
  }
  return match;
}

export function usePathTuple(): TpathTuple {
  const match = usePartialMatch(":p0/:p1/:p2");
  const p = match?.params;
  return !p ? [] : [p.p0, p.p1, p.p2 === undefined ? undefined : Number(p.p2)];
}

export function isEntityPageTuple(path: TpathTuple): path is TentityPageTuple {
  return entityTypeKs.includes(path[0] as TEntityTypeK)
    && entityPageKs.includes(path[1] as TentityPageK)
    && (path[2] === undefined || Number.isInteger(path[2]));
}

export function useEntityPageTuple(): TentityPageTuple {
  const pathTuple = usePathTuple();
  if (!isEntityPageTuple(pathTuple)) {
    throw new Error("pathTuple is not a TentityPageTuple");
  }
  return pathTuple;
}

export function usePathTo() {
  const [oldEntityType, oldEntityPage, oldEntityId] = useEntityPageTuple();
  return ([entityType, entityPage, entityId]: Partial<TentityPageTuple>) => {
    const seg2 = entityPage ?? oldEntityPage ?? "";
    const seg3 = entityId ?? oldEntityId ?? "";
    return `/${entityType ?? oldEntityType}${seg2 && "/"}${seg2}${seg3 && "/"}${seg3}`;
  };
}

export function useGoTo() {
  const pathTo = usePathTo();
  const navigate = useNavigate();
  return (entityPageTuple: Partial<TentityPageTuple>) => {
    navigate(pathTo(entityPageTuple), { replace: true });
  };
}

export function useIsCurrentLocationAnEntityPage() {
  const pathTuple = usePathTuple();
  return isEntityPageTuple(pathTuple);
}

const entityPageComponent: Record<TentityPageK, FC<{}>> = {
  list: EntityTable,
  create: EntityCreate,
  update: EntityUpdate,
};

function EntityPageComponent() {
  const pathTuple = useEntityPageTuple();
  const entityPageK = pathTuple[1];
  const Component = entityPageComponent[entityPageK];
  return <Component />;
}

function Redirect(props: NavigateProps) {
  return <Navigate replace {...props} />;
}

function Routes() {
  return useRoutes([
    {
      path: "/",
      element: <EntityTemplate />,
      children: [
        {
          path: "/",
          element: <Redirect to="/entry/create" />,
        },
        {
          path: ":entityType",
          element: <Outlet />,
          children: [
            {
              path: "/",
              element: <Redirect to="list" />,
            },
            {
              path: ":entityPage",
              element: <EntityPageComponent />,
              children: [
                {
                  path: ":entityId",
                  element: <EntityPageComponent />,
                },
              ],
            },
          ],
        },
      ],
    },
  ]);
}

export function Router() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}
