import React from 'react';
import { Outlet } from 'react-router-dom';
import { redirect } from "util/router";
import Edit from "./Edit";
import Create from "./Create";
import EntityTable from "components/entities/EntityTable";
import config from "./config";

const Root = () => <Outlet />;


const List = () => <EntityTable config={config}/>;

export const routes = {
  path:"/category",
  element: <Root />,
  children: [
    {
      path: "/",
      element: redirect("list"),
    },
    {
      path: "list",
      element: <List />,
    },
    {
      path: "create",
      element: <Create />,
    },
    {
      path: "edit/:id",
      element: <Edit />,
    },
  ],
};