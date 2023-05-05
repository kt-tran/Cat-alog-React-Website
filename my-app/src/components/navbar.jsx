import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavLink,
    NavItem,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';
import { NavLink as Routing } from 'react-router-dom';
import { FaPaw } from "react-icons/fa";

//TODO: implement stateful navbar
const activeStyle = {
    fontWeight: "bold",
    color: "red"
};


export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle2 = () => setDropdownOpen((prevState) => !prevState);


    return (
        <div>
            <Navbar className="nav-style" expand="md">
                <NavbarBrand tag={Routing} to="/"> Purrfect Paws <FaPaw className="navPaw" /></NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="me-auto" navbar>
                        <NavItem>
                            <NavLink tag={Routing} to="/cats" className="darkNav">Browse</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Routing} to="/" className="darkNav">Random</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Routing} to="/search" className="darkNav">Search</NavLink>
                        </NavItem>
                    </Nav>

                    <Nav navbar>
                        <Dropdown isOpen={dropdownOpen} toggle={toggle2} nav>
                            <DropdownToggle nav caret className="darkNav">
                                Account
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem className="lightNav" >
                                    <NavLink tag={Routing} to="/login" className="lightNav">
                                        Login
                                    </NavLink>
                                </DropdownItem>

                                <DropdownItem divider />

                                <DropdownItem>
                                    <NavLink tag={Routing} to="/dashboard" className="lightNav">
                                        Dashboard
                                    </NavLink>
                                </DropdownItem>
                                <DropdownItem>
                                    <NavLink tag={Routing} to="/profile" className="lightNav">
                                        Profile
                                    </NavLink>
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </Nav>

                </Collapse>
            </Navbar>
        </div>
    );
}