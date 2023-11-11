import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import ErrorPage from './pages/404'

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage/>
  },

  {
    path: "/home",
    element: <Home/>
  },
  
  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/signup",
    element: <SignUp />,
  },

 
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
