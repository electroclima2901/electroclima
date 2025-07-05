import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "../About";
import Contact from "../Contact";
import ErrorPage from "../ErrorPage";
import Home from "../Home";
import Layout from "../Layout";
import Services from "../Services";

export default function App() {
  const routes = [
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "services", element: <Services /> },
        { path: "contact", element: <Contact /> },
        { path: "*", element: <ErrorPage /> },
      ],
    },
  ];

  const router = createBrowserRouter(routes, {
    basename: "/electroclima",
    future: {
      v7_relativeSplatPath: true,
    },
  });
  return <RouterProvider router={router} />;
}
