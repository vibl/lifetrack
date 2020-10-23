import React from 'react';
import { Outlet } from 'react-router-dom';
import { redirect } from "../../../util/router";
import CategoryList from "./CategoryList";
import CategoryEdit from "./CategoryEdit";
import CategoryCreate from "./CategoryCreate";
 
const CategoryRoot = () => <Outlet />;

export const routes = {
  path:"/category",
  element: <CategoryRoot />,
  children: [
    {
      path: "/",
      element: redirect("list"),
    },
    {
      path: "list",
      element: <CategoryList />,
    },
    {
      path: "create",
      element: <CategoryCreate />,
    },
    {
      path: "edit/:id",
      element: <CategoryEdit />,
    },
  ],
};