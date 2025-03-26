import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './Template/Root'
import Error from './Pages/Error'
import Start from './Pages/Start'
import Pricing from './Pages/Pricing'
import Stories from './Pages/Stories'
import Features from './Pages/Features'

const router = createBrowserRouter([{
  path:"/",
  element: <Root />,
  errorElement: <Error />,
  children:[
    {
      path:"/",
      element:<Start />
    },
    {
      path:"/stories",
      element:<Stories />
    },
    {
      path:"/features",
      element:<Features />
    },
    {
      path:"/pricing",
      element:<Pricing />
    },
    
  ]
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
