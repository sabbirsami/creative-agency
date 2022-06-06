import React from "react";
import logo from "../images/logos/logo.png";
import { Container, Nav, Navbar } from "react-bootstrap";

const HeaderNavbar = () => {
    return (
        <Navbar bg="light" className="py-4" expand="lg">
            <Container className="justify-content-between mx-auto ">
                <div className="d-flex justify-content-between align-items-center">
                    <img className="w-25" src={logo} alt="" />
                    <Navbar.Toggle
                        className="border-0"
                        aria-controls="responsive-navbar-nav"
                    />
                </div>

                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto my-2 my-lg-0 ms-3">
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link href="#action2">Our Portfolio</Nav.Link>
                        <Nav.Link href="#action2">Our Team</Nav.Link>
                        <Nav.Link href="#action2">Contact Us</Nav.Link>
                    </Nav>
                    <button className="btn shadow-sm border-0 rounded-pill px-4 py-2 alert-success text-dark">
                        Login
                    </button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default HeaderNavbar;
