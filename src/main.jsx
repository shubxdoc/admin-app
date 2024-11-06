import { StrictMode, useContext } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Layout from "../Layout";
import { Home, List, Login, New, Single } from "./pages";
import { userInputs, productInputs } from "./formSource";
import "./index.css";

import { AuthContext, AuthProvider } from "./context/AuthContext";

const RequireAuth = ({ children }) => {
  const { user } = useContext(AuthContext);
  return user ? children : <Navigate to="/login" />;
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "*",
        element: (
          <div className="flex items-center justify-center w-full h-full text-4xl font-bold text-slate-600">
            * User doesn't exist *
          </div>
        ),
      },
      {
        path: "/",
        element: (
          <RequireAuth>
            <Home />
          </RequireAuth>
        ),
      },
      {
        path: "/users",
        children: [
          {
            index: true,
            element: (
              <RequireAuth>
                <List />
              </RequireAuth>
            ),
          },
          {
            path: ":userId",
            element: (
              <RequireAuth>
                <Single />
              </RequireAuth>
            ),
          },
          {
            path: "new",
            element: (
              <RequireAuth>
                <New inputs={userInputs} title="Add New User" />
              </RequireAuth>
            ),
          },
        ],
      },
      {
        path: "/products",
        children: [
          {
            index: true,
            element: (
              <RequireAuth>
                <List />
              </RequireAuth>
            ),
          },
          {
            path: ":productId",
            element: (
              <RequireAuth>
                <Single />
              </RequireAuth>
            ),
          },
          {
            path: "new",
            element: (
              <RequireAuth>
                <New inputs={productInputs} title="Add New Product" />
              </RequireAuth>
            ),
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
