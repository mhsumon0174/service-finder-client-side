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
import AuthProvider from './provider/AuthProvider.jsx';
import Error from './pages/Error.jsx';
import Loading from './components/Loading.jsx';

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
        hydrateFallbackElement:<Loading></Loading>,
        loader:()=>fetch('http://localhost:3000/services'),
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
      {
        path:'*',
        Component:Error
      }
    ]
  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider>
    <RouterProvider router={router} />
   </AuthProvider>
  </StrictMode>,
)
