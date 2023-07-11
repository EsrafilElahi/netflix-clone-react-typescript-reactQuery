import React, { useState } from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home';
import Movies from './pages/Movies';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home title="Home" />,
  },  
  {
    path: "/movies",
    element: <Movies title="Movies" />,
  },
]);

interface AppProps {
  title: string;
}

const App: React.FC<AppProps> = () => {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
