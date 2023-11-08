import React from 'react';
import "../static/css/navbar.css"
import nhslogo from "../static/images/NHSlogo.png";
import nhsbrandname from "../static/images/NHSBrandname.png";
import { Container, Navbar, Nav, Offcanvas, Stack } from 'react-bootstrap';

const NHSNavbar = () => {
  return (
    <>
        <Navbar expand="lg" className="bg-body-tertiary navbar position-fixed w-100">
          <Container>
            <Navbar.Brand href="#">
              <Stack direction='horizontal' gap={3}>
                <img src={nhslogo} width={100} alt="North Haven Spa Brand Logo" />
                <img src={nhsbrandname} width={250} alt="North Haven Spa Brand Name" className='d-none d-lg-block'/>
              </Stack>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} className='border-0' />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-lg`}
              aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                  <Stack direction='horizontal' gap={3}>
                  <img src={nhslogo} width={80} alt="North Haven Spa Brand Logo" />
                  <img src={nhsbrandname} width={150} alt="North Haven Spa Brand Name"/>
                  </Stack>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#">Home</Nav.Link>
                  <Nav.Link href="#action2">Services</Nav.Link>
                  <Nav.Link href="#action3">Gallery</Nav.Link>
                  <Nav.Link href="#action4">About Us</Nav.Link>
                  <Nav.Link href="#action5">Contact Us</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
      </Navbar>
    </>
  )
};

export default NHSNavbar;
