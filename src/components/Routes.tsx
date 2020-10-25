import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import { routes as categoryRoutes }  from './entities/category';
import { routes as unitRoutes }  from './entities/unit';
import { routes as trackerRoutes }  from './entities/tracker';
import Journal from './entities/Journal';

const Router = () => {

  const routes = [
    { 
      path: "/", 
      element: <Journal />, 
      children: [
        {
          path: "/",
          element: <Navigate to="/category/create" replace={true} />, 
        },
        categoryRoutes,
        unitRoutes,
        trackerRoutes,    
      ]
    },
  ];
   
  return useRoutes(routes);
}

export default Router;
