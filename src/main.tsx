import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { Root } from "./routes/root/root";
import { ListServiceOrders } from "./routes/list";
import { CreateServiceOrders } from "./routes/add";
import { Login } from "./routes/login/inde"; // Import your Login component
import { getToken } from "./services/authService"; // Import your authentication service
import { EditServiceOrder } from "./routes/edit";
import { DeleteServiceOrder } from "./routes/delete";

const isAuthenticated = () => {
  // Check if a valid token exists
  const token = getToken();
  return !!token;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/listServiceOrders",
    element: isAuthenticated() ? (
      <ListServiceOrders />
    ) : (
      <Navigate to="/login" />
    ),
  },
  {
    path: "/createServiceOrders",
    element: isAuthenticated() ? (
      <CreateServiceOrders />
    ) : (
      <Navigate to="/login" />
    ),
  },
  {
    path: "/editServiceOrder",
    element: isAuthenticated() ? (
      <EditServiceOrder />
    ) : (
      <Navigate to="/login" />
    ),
  },
  {
    path: "/deleteServiceOrder",
    element: isAuthenticated() ? (
      <DeleteServiceOrder />
    ) : (
      <Navigate to="/login" />
    ),
  },
  {
    path: "/login",
    element: !isAuthenticated() ? <Login /> : <Navigate to="/" />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
