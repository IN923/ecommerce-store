import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router'
import {RouterProvider} from 'react-router/dom'
import Layout from './components/Layout.jsx'
import Home from './components/Home.jsx'
import SignUp from './components/SignUp.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    Component:Layout,
    children:[
      {
        element:<Home />,
        index:true
      },
      {
        element:<SignUp />,
        path:'/signup'
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
