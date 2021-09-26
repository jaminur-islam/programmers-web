// import 
import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import './Header.css'

// Header component
const Header = () => {
  return (
    // added Nav bar and 
    <div>
 <Navbar collapseOnSelect expand="lg"  variant="dark" className='nav'>
  <Container>
  <Navbar.Brand href="#home">  <img src={'./jhankorSir.jpg'} alt='programmer' /> <span>jhankar Mahbub</span> </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto text-uppercase">
      <Nav.Link className='nav-link'  href="#features">Join Course</Nav.Link>
      <Nav.Link className='nav-link'  href="#pricing"> Abount us </Nav.Link>
    </Nav>
    <Nav className= 'text-uppercase'>
      <Nav.Link className='nav-link'  href="#deets">Total members</Nav.Link>
      <Nav.Link className='nav-link'  eventKey={2} href="#memes">
      Contact us
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
  </Navbar>

  <div className='text-center top-header mt-3'>
     <h1>The largest and best web development course in the world</h1>
       <h6>It is the largest web development course in the world, where you are taught from the very beginning and are taught with great care.</h6>
       <h4> Every Year’s Budget : 100 million </h4>
    </div>
  </div>
  );
};

export default Header;