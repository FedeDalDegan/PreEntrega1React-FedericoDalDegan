import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import CartWidget from '../NavBar/CartWidget';
import "../../components/NavBar/NavBarStyle.css";

function ColorSchemesExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary container-fluid">
      <Container>
        <div className='navbar__flex--container'>
          <NavLink exact="true" to="/">
            <img className="brandLogo" src="https://cdn3.iconfinder.com/data/icons/supermario/PNG/Retro-Mario.png" alt="" />
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink exact="true" to="/" className="nav-link">Home</NavLink>
              <NavDropdown to="/categories" title="Categories" id="basic-nav-dropdown" active>
                <NavDropdown.Item as={NavLink} to="/categories/Puzzle">Puzzle</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/categories/RPG">RPG</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/categories/Acción">Acción</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/categories/Multijugador">Multijugador</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/categories/Aventura">Aventura</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/categories/Souls">Souls</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/categories/Sandbox">Sandbox</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/categories/Survival Horror">Survival Horror</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/categories/Plataformas">Plataformas</NavDropdown.Item>
              </NavDropdown>
              <NavLink to="/about" className="nav-link">About</NavLink>
              <NavLink to="/contact" className="nav-link">Contact</NavLink>
            </Nav>
          </Navbar.Collapse>
        </div>
        <NavLink to="/cart" className="nav-link"><CartWidget /></NavLink>
      </Container>
    </Navbar>
  );
}

export default ColorSchemesExample;