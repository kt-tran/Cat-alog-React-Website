import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavLink,
    NavItem,
    UncontrolledDropdown,
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
                            <NavLink tag={Routing} to="/itemtest" className="darkNav">Random</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret className="darkNav">
                                Search
                            </DropdownToggle>
                            <DropdownMenu end>
                                <DropdownItem className="lightNav" >
                                    <NavLink tag={Routing} to="/searchCat" className="lightNav">
                                        For a cat
                                    </NavLink>
                                </DropdownItem>

                                <DropdownItem divider />

                                <DropdownItem>
                                    <NavLink tag={Routing} to="/searchCountry" className="lightNav">
                                        For a country
                                    </NavLink>
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>

                    <Nav navbar>
                        <NavItem>
                            <NavLink href="/login">
                                Login
                            </NavLink>
                        </NavItem>
                    </Nav>

                </Collapse>
            </Navbar>
        </div>
    );
}