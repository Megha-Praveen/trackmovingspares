import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-primary shadow-sm py-2 sticky-top border-bottom border-primary">
      <Container fluid>
        <Navbar.Brand href="#home" className="d-flex align-items-center text-white fw-bold fs-4">
          <img src={logo}  alt="Logo"  width="45"  height="45"  className="me-2 rounded-circle border-2 border-primary"/>
          Track Moving Spares
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className="bg-primary" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link className="nav-link" href="#about">About</Nav.Link>
            <Nav.Link className="nav-link" href="#services">Services</Nav.Link>
            <Nav.Link className="nav-link" href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;