import { signOut } from "firebase/auth";
import React from "react";
import { TbLayoutDashboard } from "react-icons/tb";
import { FiHardDrive } from "react-icons/fi";
import { MdReviews } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { HiOutlineUserAdd } from "react-icons/hi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Nav, Navbar } from "react-bootstrap";
import auth from "../../firebase.init";
import logo from "../../images/logos/logo.png";
import DashboardLink from "../../Shared/DashboardLink";
import { Link, Outlet } from "react-router-dom";

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
                                    <Link to="/">
                                        <img
                                            className="w-25"
                                            src={logo}
                                            alt=""
                                        />
                                    </Link>
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
                    <div className="col-lg-2 p-0">
                        <Navbar bg="light" expand="lg">
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav d-block">
                                <Nav className=" m-0 d-block w-100">
                                    <DashboardLink to="/dashboard">
                                        <TbLayoutDashboard className="me-2" />{" "}
                                        Dashboard
                                    </DashboardLink>
                                    <DashboardLink to="/dashboard/service">
                                        <FiHardDrive className="me-2" /> Service
                                        list
                                    </DashboardLink>
                                    <DashboardLink to="/dashboard/manage-order">
                                        <AiOutlineShoppingCart className="me-2" />{" "}
                                        Manage Order
                                    </DashboardLink>
                                    <DashboardLink to="/dashboard/my-order">
                                        <AiOutlineShoppingCart className="me-2" />{" "}
                                        My Order
                                    </DashboardLink>
                                    <DashboardLink to="/dashboard/manage-review">
                                        <MdReviews className="me-2" /> Manage
                                        Review
                                    </DashboardLink>
                                    <DashboardLink to="/dashboard/manage-user">
                                        <FaUsers className="me-2" /> Manage User
                                    </DashboardLink>
                                    <DashboardLink to="/dashboard/add-review">
                                        <MdReviews className="me-2" /> Add
                                        Review
                                    </DashboardLink>
                                    <DashboardLink to="/dashboard/add-admin">
                                        <HiOutlineUserAdd className="me-2" />{" "}
                                        Add Admin
                                    </DashboardLink>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </div>
                    <div
                        className="col-lg-10 border-start"
                        style={{ height: "93vh" }}
                    >
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
