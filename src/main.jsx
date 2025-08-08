import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayouts from "./layouts/MainLayouts.jsx";
import Home from "./components/Home.jsx";
import Services from "./pages/Services.jsx";
import MyServices from "./pages/MyServices.jsx";
import AddService from "./pages/AddService.jsx";
import MyReviews from "./pages/MyReviews.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import AuthProvider from "./provider/AuthProvider.jsx";
import Error from "./pages/Error.jsx";
import Loading from "./components/Loading.jsx";
import ServiceDetails from "./components/ServiceDetails.jsx";
import PrivateRoute from "./provider/PrivateRoute.jsx";
import AboutUs from "./pages/AboutUs.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/services",
        hydrateFallbackElement: <Loading></Loading>,
        loader: () => fetch("https://assignment-11-server-fawn-seven.vercel.app/services"),
        Component: Services,
      },
      {
path:'/about-us',
Component:AboutUs,
      },
      {
        path: "/services/:id",
        loader:({params})=>fetch(`https://assignment-11-server-fawn-seven.vercel.app/services/${params.id}`),
       Component:ServiceDetails
      },

      {
        path: "/addservices",
        element:<PrivateRoute>
          <AddService></AddService>
        </PrivateRoute>,
      },
      {
        path: "/myservices",
        element:<PrivateRoute><MyServices></MyServices></PrivateRoute>
       
      },
      {
        path: "/myreviews",
        element:<PrivateRoute><MyReviews></MyReviews></PrivateRoute>
       
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/signup",
        Component: Register,
      },
      {
        path: "*",
        Component: Error,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
