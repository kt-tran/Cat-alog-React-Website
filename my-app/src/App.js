import './App.css';
import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from 'react-router-dom';

import Home from './pages/home';
import NotFound from './pages/error';
import Login from './pages/login';
import Header from './pages/navbar';
import Details from './pages/details';
import CatTable from './pages/table';
import SearchCat from './pages/searchCat';
import SearchCountry from './pages/searchCountry';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/navbartest",
        element: <Header />
      },
      {
        path: "/itemtest",
        element: <Details />
      },
      {
        path: "/cats",
        element: <CatTable />
      },
      {
        path: "/searchCat",
        element: <SearchCat />
      },
      {
        path: "/searchCountry",
        element: <SearchCountry />
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}

function Root() {
  return (
    <div>
      {/* In a real application you should probably put your
    naviation in its own file. For this simple example we will
    leave it here */}
      <Header />
      {/* Outlet is where the active route will be rendered */}
      <Outlet />

    </div>
  );
}
