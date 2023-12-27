import React from 'react'
import Login from './Login'
import { RouterProvider, createBrowserRouter, useNavigate } from 'react-router-dom'
import Browse from './Browse'
import NewsPage from './NewsPage'


const Body = () => {

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/news",
      element: <NewsPage />
    }
  ])

  return (
    <RouterProvider router={appRouter} />
  )
}

export default Body