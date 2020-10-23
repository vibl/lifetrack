import React from "react";
import { Navigate } from "react-router-dom";

const context = require.context('./', true, /^\/[a-zA-Z]\w*\/index\.js$/);

const entities = {};

const getRoute = (entityName) => {

  const module = context(file);

  const route = {
    path:`/${entityName}`,
    element: <module.default />,
    children: [
      {
        path: "/",
        element: <Navigate to="list" replace={true} />,
      }
    ]
  };
  for(const componentName of Object.keys(module)) {
    const action = componentName.replace(new RegExp(`^${entityName}`, "i"), "");
    const path = action.toLowerCase();
    const EntityAction = module[componentName];
    const childRoute = {
      path: path === "edit" ? "edit/:entityId" : path,
      element: <EntityAction/>,
    }

    route.children.push(childRoute) = module[componentName];
  }
  entities[entityName] = entity;

  return route;
}

for(const file of context.keys()) {
  const entityName = file.match(/^\/(\w+)\//)[1];
  entities[entityName] = getRoute(entityName);
}

export default entities;
