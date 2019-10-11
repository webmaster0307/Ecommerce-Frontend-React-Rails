import React, { Component } from 'react';
import { Link, NavLink} from 'react-router-dom'
import {Navbar, Nav, NavItem, Form, FormControl, Button, NavDropdown } from 'react-bootstrap'


const CustomNavbar = () =>  {
        return ( 
          <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
          <Navbar.Brand as={Link} to="/">Company Logo</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link as={Link} to="/About">About</Nav.Link>
                <Nav.Link as={Link} to="/Categories">Categories</Nav.Link>
                <NavDropdown title="My Account" id="collasible-nav-dropdown">
                  <NavDropdown.Item as={Link} to="/Login">Log In</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/Signup">Sign Up</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to="/Logout">Logout</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                <Nav.Link as={Link} to="/Wishlist">Wish List</Nav.Link>
                <Nav.Link eventKey={2} as={Link} to="/Cart">Cart</Nav.Link>
              </Nav>
            </Navbar.Collapse>
        </Navbar>
         );
}
 
export default CustomNavbar;





