import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import CartWidget from '../NavBar/CartWidget';

function ColorSchemesExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary container-fluid">
      <Container>
        <div className='navbar__flex--container'>
          <NavLink exact to="/">
            <img className="brandLogo" src="https://cdn3.iconfinder.com/data/icons/supermario/PNG/Retro-Mario.png" alt="" />
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink exact to="/" className="nav-link">Home</NavLink>
              <NavDropdown to="/categories" title="Categories" id="basic-nav-dropdown" active>
                <NavDropdown.Item as={NavLink} to="/categories/electronics">Electronics</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/categories/jewelery">Jewelry</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/categories/men's clothing">Men's clothing</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/categories/women's clothing">Women's clothing</NavDropdown.Item>
              </NavDropdown>
              <NavLink to="/about" className="nav-link">About</NavLink>
              <NavLink to="/contact" className="nav-link">Contact</NavLink>
            </Nav>
          </Navbar.Collapse>
        </div>
        <CartWidget />
      </Container>
    </Navbar>
  );
}

export default ColorSchemesExample;