import { signOut } from "firebase/auth";
import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import auth from "../../firebase.init";
import logo from "../../images/logos/logo.png";

const Dashboard = () => {
    const logout = () => {
        signOut(auth);
    };
    return (
        <div>
            {/* DASHBOARD HEADER START */}
            <div className="mt-2">
                <div className="container-fluid">
                    <div className="row">
                        <div className="px-4 py-1">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="col-lg-2">
                                    <img className="w-25" src={logo} alt="" />
                                </div>
                                <div className="col-lg-2 d-flex justify-content-end align-items-center">
                                    {/* <button
                                        onClick={logout}
                                        className="fw-semi-bold btn border-0
                            rounded-0 p-0 
                            text-dark"
                                    >
                                        <Link
                                            to="/login"
                                            className="text-decoration-none text-dark"
                                        >
                                            Log Out
                                        </Link>
                                    </button> */}
                                    <div>
                                        <h5 className="fw-bold m-0">Sami</h5>
                                        <p className="m-0">
                                            <small>a@gmail.com</small>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="m-0" />
            </div>
            {/* DASHBOARD MENU START */}
            <div
                className="container-fluid bg-light"
                style={{ height: "93vh" }}
            >
                <div className="row">
                    <div className="col-lg-2 ">
                        <Navbar bg="light" expand="lg">
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto d-block">
                                    <Nav.Link href="#home">Home</Nav.Link>
                                    <Nav.Link href="#link">Link</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </div>
                    <div
                        className="col-lg-10 border-start"
                        style={{ height: "93vh" }}
                    >
                        <h1>Dashboard</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
