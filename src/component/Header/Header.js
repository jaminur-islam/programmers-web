import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './Header.css'

const Header = () => {
  return (
    // added Nav bar and 
    <div>
    <Navbar collapseOnSelect expand="lg"  variant="dark" className='nav'>
  <Container>
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
     
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>


  <div className='text-center top-header'>
    <h1> Programmers Association 2021 </h1>
    <h5>It is the largest programmers association in the world</h5>
    <h4> Total Deposited Budget : 1000 million </h4>

  </div>

    </div>
  );
};

export default Header;