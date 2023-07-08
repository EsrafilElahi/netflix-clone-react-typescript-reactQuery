import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home';
import Movies from './pages/Movies';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home title="Home" />,
  },  
  {
    path: "/movie",
    element: <Movies title="Movie" />,
  },
]);

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
