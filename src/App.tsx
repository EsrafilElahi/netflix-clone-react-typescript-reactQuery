import React from 'react';
// eslint-disable-next-line prettier/prettier
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Movies from './pages/Movies';
import Series from './pages/Series';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home title='Home' />,
  },
  {
    path: '/movies',
    element: <Movies title='Movies' />,
  },
  {
    path: '/series',
    element: <Series title='Series' />,
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
  );
};

export default App;
