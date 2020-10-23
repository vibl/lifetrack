import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import { routes as categoryRoutes }  from './entities/category';
import { routes as unitRoutes }  from './entities/unit';

const Router = () => {

  const routes = [
    { 
      path: "/", 
      element: <Navigate to="/category" replace={true} />, 
    },
    categoryRoutes,
    unitRoutes,
  ];
   
  return useRoutes(routes);
}

export default Router;
