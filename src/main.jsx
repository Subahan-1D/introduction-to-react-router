import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import Usears from './components/Usears/Usears.jsx';


const router = createBrowserRouter([
 {

  path:'/',
  element:<Home></Home>,
  children:[
    {
      path:"/about",
      element:<About></About>
    },
    {
      path:"/contact",
      element:<Contact></Contact>
    },
    {
      path:"/usears",
      loader:()=> fetch('https://jsonplaceholder.typicode.com/users'),
      element:<Usears></Usears>
    }
  ]
 }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
