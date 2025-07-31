import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import Home from './component/page/Home'
import About from './component/page/About'
import Blog from './component/page/Blog'
import Newsletter from './component/page/Newsletter'

import CustomErr from './component/Route/CustomErr'
import Root from './component/Route/MainRoot'

function App() {

  const  route = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <CustomErr />,
      children: [
        {path: '', element: <Home />},
        {path: '/about', element: <About />},
        {path: 'blog', element: <Blog />},
        {path: 'newsletter', element: <Newsletter />},
      ]
    }
  ])

  return (
    <>
    <RouterProvider router={route} />
    </>
  )
}

export default App
