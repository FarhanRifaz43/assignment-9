import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root';
import Home from './Components/Home';
import ServiceDetail from './Components/ServiceDetail';
import Login from './Components/Login';
import AuthProvider from './firebase/AuthProvider';
import PrivateRoute from './Components/PrivateRoute';
import Register from './Components/Register';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/services/:id',
        element: <PrivateRoute><ServiceDetail></ServiceDetail></PrivateRoute>,
        loader: () => fetch("/data.json")
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)