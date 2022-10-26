import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root";
import Blog from "./components/Blog";
import ErrorPage from "./components/ErrorPage";
import About from "./components/About";
import Signup from "./components/Signup/Signup";

import SignIn from "./components/SignIn/SignIn";
import Home from "./components/Home/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/home",
          element: <Home></Home>,
        },

        {
          path: "/blog",
          element: <Blog></Blog>,
        },
        {
          path: "/about",
          element: <About></About>,
        },
        {
          path: "/signin",
          element: <SignIn></SignIn>,
        },
        {
          path: "/signup",
          element: <Signup></Signup>,
        },
        {
          path: "*",
          element: <ErrorPage></ErrorPage>,
        },
      ],
    },
  ]);
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
