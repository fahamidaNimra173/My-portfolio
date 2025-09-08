import { Children, Component, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from './Page/Root/Root.jsx';
import Home from './Page/Home/Home.jsx';
import ProjectsDetails from './Page/Home/Projects/ProjectsDetails.jsx';

let router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children:[
      {
        index:true,
        Component:Home
      },
      {
        path:'/projects/:id',
        Component:ProjectsDetails
      }
    ]

    
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
<RouterProvider router={router}/>
  </StrictMode>,
)
