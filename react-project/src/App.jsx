import { useState } from 'react'
import './App.css'
import Home from './components/home';
import Counter from './components/store/counter';
import Contact from './components/contact';
import Men from './components/mens';
import Women from './components/women';
import Kids from './components/kids';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  
  },
  {
    path: "/counter",
    element: <Counter/>
  
  },
 
  {
    path: "/contact",
    element: <Contact/>
  
  },
  {
    path: "/men",
    element: <Men/>
  
  },
  {
    path: "/women",
    element: <Women/>
  
  },
  {
    path: "/kids",
    element: <Kids/>
  
  },

  
]);
function App() {

  return (
    <>
    <div>
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
