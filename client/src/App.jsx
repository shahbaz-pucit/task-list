import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Tasks from './assets/components/Tasks'
import Update from './assets/components/Update'
import Newtask from './assets/components/Newtask'
function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Tasks/>
    },
    {
      path: '/task/:id',
      element: <Update/>
    },
    {
      path: '/create-task',
      element: <Newtask/>
    }
  ])

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
