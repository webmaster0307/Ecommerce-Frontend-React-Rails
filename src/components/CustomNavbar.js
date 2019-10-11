import React, { Component } from 'react';
import { Link, NavLink} from 'react-router-dom'
import {Navbar, Nav, NavItem, Form, FormControl, Button, NavDropdown } from 'react-bootstrap'

class CustomNavbar extends Component {
    state = {  }
    render() { 
        return ( 
          <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
          <Navbar.Brand href="/">Company Logo</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#categories">Categories</Nav.Link>
              <NavDropdown title="My Account" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#Log In">Log In</NavDropdown.Item>
                <NavDropdown.Item href="#Sign Up">Sign Up</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#">Wish List</Nav.Link>
              <Nav.Link eventKey={2} href="#">Cart</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
         );
    }
}
 
export default CustomNavbar;





