import { createBrowserRouter } from "react-router-dom";
import About from "../About";
import Blog from "../Blog";
import CourseAll from "../CourseAll/CourseAll";
import Courses from "../Courses/Courses";
import ErrorPage from "../ErrorPage";
import Home from "../Home/Home";
import Root from "../Root";
import SignIn from "../SignIn/SignIn";
import Signup from "../Signup/Signup";

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
        children: [
          {
            path: "/home/courses/:id",
            loader: async ({ params }) => {
              return fetch(`http://localhost:5000/courses/${params.id}`);
            },
            element: <CourseAll></CourseAll>,
          },
        ],
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
        children: [
          {
            path: "/courses/:id",
            loader: async ({ params }) => {
              return fetch(`http://localhost:5000/courses/${params.id}`);
            },
            element: <CourseAll></CourseAll>,
          },
        ],
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

export default router;
