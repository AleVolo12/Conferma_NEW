import React from 'react'
import ReactDOM from 'react-dom/client'

import Login from './routes/login'
import Attivazione from './routes/attivazione'
import Conferma from './routes/conferma'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
  {
    path: "login",
    element: <Login/>
  },
  {
    path: 'attivazione',
    element: <Attivazione/>
  },
  {
    path: 'conferma',
    element: <Conferma/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
