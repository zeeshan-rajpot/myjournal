import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Pages/Login/Login";
import DashBoard from "./Pages/Dashboard/DashBoard";
import Users from "./Pages/Users/Users";
import CheckIn from "./Pages/CheckIn/CheckIn";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/DashBoard",
      element: <DashBoard />,
    },
    {
      path: "/users",
      element: <Users />,
    },
    {
      path: "/checkin",
      element: <CheckIn />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
