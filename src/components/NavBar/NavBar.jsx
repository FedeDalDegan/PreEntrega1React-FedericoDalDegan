import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import CartWidget from "../NavBar/CartWidget"

function ColorSchemesExample() {

  return (
    <>
        <Navbar className='container-fluid'>
          <Container>
            <div className='navbar__flex--container'>
              <NavLink exact to ="/"><img className="brandLogo" src="https://cdn3.iconfinder.com/data/icons/supermario/PNG/Retro-Mario.png" alt="" /></NavLink>
              <Nav className="me-auto">
                <NavLink exact to="/" className="anchors">Home</NavLink>
                <NavLink to="/products" className="anchors">Products</NavLink>
                <NavLink to="/about" className="anchors">About</NavLink>
                <NavLink to="/contact" className="anchors">Contact</NavLink>
              </Nav>
            </div>
            <CartWidget />
          </Container>
        </Navbar>
    </>
  );
}

export default ColorSchemesExample;