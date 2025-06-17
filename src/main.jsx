import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayouts from './layouts/MainLayouts.jsx';
import Home from './components/Home.jsx';
import Services from './pages/Services.jsx';
import MyServices from './pages/MyServices.jsx';
import AddService from './pages/AddService.jsx';
import MyReviews from './pages/MyReviews.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component:MainLayouts,
    children:[
      {
        index:true,
        Component:Home
      },
      {
        path:'/services',
        Component:Services
      },
      
      {
        path:'/addservices',
        Component:AddService
      },
      {
        path:'/myservices',
        Component:MyServices
      },
      {
        path:'/myreviews',
        Component:MyReviews
      },
      {
        path:'/login',
        Component:Login
      },
      {
        path:'/signup',
        Component:Register
      },
    ]
  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
