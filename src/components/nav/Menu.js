import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import "./menu.css";
const Menu = () => {
    return (
        <div>
            <Navbar className='header' collapseOnSelect expand="lg" bg="dark" variant="dark" >
                <Container>
                    <Navbar.Brand className='text-primary' href="/">  <i class="fa-brands fa-shopify"></i>  eShop</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    <NavLink className="nav-link" to="/">Home</NavLink>
                    </Nav>
                    <Nav>
                        <NavLink className="nav-link" to="/register">Register</NavLink>
                        <NavLink className="nav-link" to="/login">Login</NavLink>

                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Register</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            Login
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                            Log Out
                        </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Menu;