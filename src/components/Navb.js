import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logoImage from '../img/logo.png'
import  './Navb.css'
export default function Navb() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary shadow ">
      <Container fluid className='m-2'>
        {/* Replace text with img tag for the logo */}
        <Navbar.Brand href="#">
          <img
            src={logoImage}
            alt="Your Logo"
            height="30"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        
        

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="d-flex me-auto my-2 my-lg-0 ml-3  "
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>
          <Nav className="ml-auto ">
            <Nav.Link href="/" style={{ fontWeight: 'bold', color: 'orange'}} className='fs-5 fa-bold'>Home</Nav.Link>
            <NavDropdown style={{ fontWeight: 'bold' }} title="Page" className='fs-5 ' id="navbarScrollingDropdown">
              <NavDropdown.Item href="/booking">Booking</NavDropdown.Item>
              <NavDropdown.Item href="/Service">Service</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/admin">Admin Dashboard</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="about" style={{ fontWeight: 'bold' }} className='mrl fs-5 fa-bold '  >About</Nav.Link>
            
            
            
            <div className="d-grid">
              <Button href='/booking' variant="danger" onClick={() => console.log("Danger")}>
              Book Now
              </Button>
            </div>
            

            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
