import React from 'react'
import ReactDOM from 'react-dom/client'
 
import './index.css'
import './App'
import { Provider } from 'react-redux'
import store from './store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './pages/Layout/Layout.jsx'
import Home from './pages/Home/Home.jsx'
import AddJob from './pages/Addjob/AddJob.jsx'
import EditJob from './pages/EditJob/EditJob.jsx'


const route = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/addJob",
        element:<AddJob/>
      },
      {
        path:"/editjob",
        element:<EditJob/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={route}/>
    </Provider>
  </React.StrictMode>,
)
