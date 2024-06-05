import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Pages/Login/Login";
import DashBoard from "./Pages/Dshboard/DashBoard";



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
    
    
  ]);

  return <RouterProvider router={router} />;
}

export default App;