import React from "react";
import logo from "../images/logos/logo.png";
import { Container, Nav, Navbar } from "react-bootstrap";
import CustomLink from "../Shared/CustomLink";

const HeaderNavbar = () => {
    return (
        <Navbar className="py-4" expand="lg">
            <Container className="justify-content-between align-items-center mx-auto ">
                <div className="d-flex justify-content-between align-items-center">
                    <img className="w-25" src={logo} alt="" />
                    <Navbar.Toggle
                        className="border-0"
                        aria-controls="responsive-navbar-nav"
                    />
                </div>

                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto my-2 my-lg-0 ms-3">
                        <CustomLink to="/">Home</CustomLink>
                        <CustomLink to="/our-portfolio">
                            Our Portfolio
                        </CustomLink>
                        <CustomLink to="/our-team">Our Team</CustomLink>
                        <CustomLink to="/contact">Contact Us</CustomLink>
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
