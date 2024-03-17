import React from 'react'
import ReactDOM from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Beginner from './beginner/Beginner.jsx'
import App from './App.jsx'
import Edit from './Edit.jsx'

const router = createBrowserRouter([
  { path: '/todos', element: <App /> },
  { path: '/', element: <Beginner /> },
  { path: '/todo/:id', element: <Edit /> }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Beginner/>
    <hr/>
    <App/> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
