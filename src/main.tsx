import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "./routes/root/root";
import { ListServiceOrders } from "./routes/list";
import { CreateServiceOrders } from "./routes/add";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/listServiceOrders",
    element: <ListServiceOrders />,
  },
  {
    path: "/CreateServiceOrders",
    element: <CreateServiceOrders />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
