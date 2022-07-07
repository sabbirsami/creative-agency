import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import logo from "../images/logos/logo.png";
import { Nav, Navbar } from "react-bootstrap";
import CustomLink from "../Shared/CustomLink";
import { AiOutlineMenu } from "react-icons/ai";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import { signOut } from "firebase/auth";
import Loading from "./Loading";

const HeaderNavbar = () => {
    const [show, setShow] = useState(false);
    const [user, loading] = useAuthState(auth);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    if (loading) {
        return <Loading />;
    }
    const logout = () => {
        signOut(auth);
        localStorage.removeItem("accessToken");
    };
    return (
        <Navbar className="py-4 d-lg-block sticky-lg-top bg-white">
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
                                className="btn btn-white d-block d-lg-none"
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
                                    <CustomLink to="/dashboard">
                                        <button className="position-relative btn p-0 m-0 fw-semibold">
                                            Dashboard
                                        </button>
                                        <span class="position-absolute translate-middle badge rounded-pill bg-danger">
                                            99+
                                        </span>
                                        <span class="visually-hidden">
                                            unread messages
                                        </span>
                                    </CustomLink>
                                </Nav>
                            </Navbar.Collapse>
                        </div>
                    </div>
                    <div className="col-lg-3 text-end d-none d-lg-block">
                        {user ? (
                            <button
                                onClick={logout}
                                className="btn shadow-sm border-0
                            rounded-0 px-4 py-2 alert-success
                            text-dark"
                            >
                                <Link
                                    to="/login"
                                    className="text-decoration-none text-dark"
                                >
                                    Log Out
                                </Link>
                            </button>
                        ) : (
                            <button className="btn shadow-sm border-0 rounded-0 px-4 py-2 alert-success text-dark">
                                <Link
                                    to="/login"
                                    className="text-decoration-none text-dark"
                                >
                                    Log In
                                </Link>
                            </button>
                        )}
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
                                    <CustomLink to="/dashboard">
                                        Dashboard
                                    </CustomLink>
                                </Nav>
                                {user ? (
                                    <button
                                        onClick={logout}
                                        className="btn shadow-sm border-0
                                        rounded-0 px-4 py-2 alert-success
                                        text-dark"
                                    >
                                        <Link
                                            to="/login"
                                            className="text-decoration-none text-dark"
                                        >
                                            Log Out
                                        </Link>
                                    </button>
                                ) : (
                                    <button className="btn shadow-sm border-0 rounded-0 px-4 py-2 alert-success text-dark">
                                        <Link
                                            to="/login"
                                            className="text-decoration-none text-dark"
                                        >
                                            Log In
                                        </Link>
                                    </button>
                                )}
                            </Navbar.Collapse>
                        </Offcanvas.Body>
                    </Offcanvas>
                </div>
            </div>
        </Navbar>
    );
};

export default HeaderNavbar;
