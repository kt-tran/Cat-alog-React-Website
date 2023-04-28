import './App.css';
import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from 'react-router-dom';

import Home from './pages/home';
import Login from './pages/login';
import Header from './pages/navbar';
import Details from './pages/details';

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
        path:"/itemtest",
        element: <Details />
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
