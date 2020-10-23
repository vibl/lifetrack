import React from 'react';
import { Outlet } from 'react-router-dom';
import { redirect } from "util/router";
import UnitList from "./UnitList";
import UnitEdit from "./UnitEdit";
import UnitCreate from "./UnitCreate";

const UnitRoot = () => <Outlet />;

export const routes = {
  path:"/unit",
  element: <UnitRoot />,
  children: [
    {
      path: "/",
      element: redirect("list"),
    },
    {
      path: "list",
      element: <UnitList />,
    },
    {
      path: "create",
      element: <UnitCreate />,
    },
    {
      path: "edit/:id",
      element: <UnitEdit />,
    },
  ],
};