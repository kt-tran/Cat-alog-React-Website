import React, { useState, useEffect } from 'react';
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
import { RandomCat } from '../utilities/randomID';

const activeStyle = {
    fontWeight: "bold",
};

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle2 = () => setDropdownOpen((prevState) => !prevState);

    let randCat = RandomCat();

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
                            {randCat ?
                                <NavLink tag={Routing} to={`/details/?id=${randCat.id}`} className="darkNav">Cat of the Day</NavLink>
                                :
                                <NavLink tag={Routing} to={`/`} className="darkNav">Loading...</NavLink>
                            }
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