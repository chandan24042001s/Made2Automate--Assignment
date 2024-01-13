import React, { Suspense, useState } from "react";
import { createRoot } from "react-dom/client";


import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useRouteError,
} from "react-router-dom";
import Body from "../components/Body/Body";

const Applayout = () => {
  const error = useRouteError();

  
  console.log(error);
  return <Outlet />;
};

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children:[
      {
        path:"/",
        element:<Body/>
      }
    ]
  },
]);

const root = createRoot(document.getElementById("root"));

root.render(<RouterProvider router={AppRouter} />);
