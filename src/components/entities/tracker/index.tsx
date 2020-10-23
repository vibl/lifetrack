import React from 'react';
import { Outlet } from 'react-router-dom';
import { redirect } from "util/router";
import TrackerList from "./TrackerList";
import TrackerEdit from "./TrackerEdit";
import TrackerCreate from "./TrackerCreate";

const TrackerRoot = () => <Outlet />;

export const routes = {
  path:"/tracker",
  element: <TrackerRoot />,
  children: [
    {
      path: "/",
      element: redirect("list"),
    },
    {
      path: "list",
      element: <TrackerList />,
    },
    {
      path: "create",
      element: <TrackerCreate />,
    },
    {
      path: "edit/:id",
      element: <TrackerEdit />,
    },
  ],
};