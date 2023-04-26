import './App.css';
import React, { useState } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  NavLink,
  Outlet
} from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import Home from './pages/home';
import Login from './pages/login';
import Header from './pages/navbar';

const activeStyle = {
  fontWeight: "bold",
  color: "red"
};

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
      }
    ]
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}

function Root() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="nav-style" expand="md">
        <NavbarBrand href="/">Amazing Animals</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink
                to="/"
                // If the link is active, apply the activeStyle
                style={({ isActive }) => (isActive ? activeStyle : null)}>
                Countries
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">
                I don't know
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>

          <Nav navbar>
            <NavItem>
              <NavLink
                to="/login"
                // If the link is active, apply the activeStyle
                style={({ isActive }) => (isActive ? activeStyle : null)}>
                Login
              </NavLink>
            </NavItem>
          </Nav>

        </Collapse>
      </Navbar>
      {/* Outlet is where the active route will be rendered */}
      <Outlet />
    </div >
  );
}
