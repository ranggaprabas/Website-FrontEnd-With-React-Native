import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Navigation = () => {
  const [showAboutMenu, setShowAboutMenu] = useState(false);

  const handleAboutMenuHover = () => {
    setShowAboutMenu(true);
  };

  const handleAboutMenuLeave = () => {
    setShowAboutMenu(false);
  };

  return (
    <>
      <Navbar bg="white" data-bs-theme="light" expand="lg" className="justify-content-center">
        <Container>
          <Navbar.Brand href="#">
            <strong>Company</strong>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav" className="justify-content-end">
            <Nav>
              <NavDropdown
                title="ABOUT"
                id="about-dropdown"
                show={showAboutMenu}
                onMouseEnter={handleAboutMenuHover}
                onMouseLeave={handleAboutMenuLeave}
              >
                <NavDropdown.Item href="#">History</NavDropdown.Item>
                <NavDropdown.Item href="#">Vision Mission</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#">OUR WORK</Nav.Link>
              <Nav.Link href="#">OUR TEAM</Nav.Link>
              <Nav.Link href="#">CONTACT</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
