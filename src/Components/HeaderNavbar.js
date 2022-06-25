import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import logo from "../images/logos/logo.png";
import { Container, Nav, Navbar } from "react-bootstrap";
import CustomLink from "../Shared/CustomLink";
import { AiOutlineMenu } from "react-icons/ai";

const HeaderNavbar = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <Navbar className="py-4 d-lg-block">
            <div className="container d-block">
                <div className="row align-items-center justify-content-between">
                    <div className="col-lg-3">
                        <div className="d-flex justify-content-between align-items-center">
                            <img
                                className="w-50 px-lg-3 pe-5"
                                src={logo}
                                alt=""
                            />
                            <button
                                class="btn btn-white d-block d-lg-none"
                                type="button"
                                onClick={handleShow}
                            >
                                <AiOutlineMenu className="display-5" />
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="d-none d-lg-block">
                            <Navbar.Collapse
                                id=""
                                className="text-center justify-content-center"
                            >
                                <Nav className="me-auto my-lg-0 mx-auto mx-0 text-center">
                                    <CustomLink to="/">Home</CustomLink>
                                    <CustomLink to="/our-portfolio">
                                        Our Portfolio
                                    </CustomLink>
                                    <CustomLink to="/our-team">
                                        Our Team
                                    </CustomLink>
                                    <CustomLink to="/contact">
                                        Contact Us
                                    </CustomLink>
                                </Nav>
                            </Navbar.Collapse>
                        </div>
                    </div>
                    <div className="col-lg-3 text-end d-none d-lg-block">
                        <button className="btn shadow-sm border-0 rounded-0 px-4 py-2 alert-success text-dark">
                            <Link
                                to="/login"
                                className="text-decoration-none text-dark"
                            >
                                Login
                            </Link>
                        </button>
                    </div>
                </div>

                {/* Toggle  */}
                <div className="d-lg-none d-block">
                    <Offcanvas show={show} onHide={handleClose}>
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>
                                <img className="w-25" src={logo} alt="" />
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Navbar.Collapse id="">
                                <Nav className="me-auto my-2 my-lg-0 ms-3">
                                    <CustomLink to="/">Home</CustomLink>
                                    <CustomLink to="/our-portfolio">
                                        Our Portfolio
                                    </CustomLink>
                                    <CustomLink to="/our-team">
                                        Our Team
                                    </CustomLink>
                                    <CustomLink to="/contact">
                                        Contact Us
                                    </CustomLink>
                                </Nav>
                                <button className="btn shadow-sm border-0 rounded-pill ms-4 px-4 py-2 alert-success text-dark">
                                    <Link
                                        to="/login"
                                        className="text-decoration-none text-dark"
                                    >
                                        Login
                                    </Link>
                                </button>
                            </Navbar.Collapse>
                        </Offcanvas.Body>
                    </Offcanvas>
                </div>
            </div>
        </Navbar>
    );
};

export default HeaderNavbar;
