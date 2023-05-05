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
import Header from './components/navbar';
import Details from './pages/details';
import CatTable from './pages/table';
import Search from './pages/search';
import Footer from './components/footer';
import ContactUs from './pages/contact';
import AboutUs from './pages/about';
import Dashboard from './pages/dashboard';
import Profile from './pages/profile';

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
        path: "/search",
        element: <Search/>
      },
      {
        path: "/contactUs",
        element: <ContactUs />
      },
      {
        path: "/aboutUs",
        element: <AboutUs />
      },
      {
        path: '*',
        element: <NotFound />
      },
      {
        path: '/dashboard',
        element: <Dashboard />
      },
      {
        path: '/profile',
        element: <Profile />
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
      <Footer />
    </div>
  );
}
