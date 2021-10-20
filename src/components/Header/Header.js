import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UseAuth from '../../hooks/UseAuth';

const Header = () => {
    const{user,logOut}=UseAuth();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand href="#home">MEDICARE</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link as={Link} to="/homepage#home">Home</Nav.Link>
                    <NavDropdown title="Quick Info" id="collasible-nav-dropdown">
                        <NavDropdown.Item as={Link} to="/homepage#today-doc">Todays Doctor</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/homepage#tomorrowdoc">Tommorows Doctor</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link  as={Link} to="/services">Services</Nav.Link>
                    <Nav.Link  as={Link} to="/doctors">Doctors</Nav.Link>
                   </Nav>
                   <Nav>
                    {user.email?
                    <span>
                        <small >{user.displayName}      </small>
                    <button className="bg-info rounded-pill border border-primary px-2" onClick={logOut}>Sign out</button>
                    </span>
                    :
                    <Nav.Link className="border border-primary rounded-pill bg-info px-2" as={Link} to="/signin">Sign  In</Nav.Link>
                    }
                    </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    );
};

export default Header;