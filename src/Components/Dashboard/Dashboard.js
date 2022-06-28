import { signOut } from "firebase/auth";
import React from "react";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import logo from "../../images/logos/logo.png";

const Dashboard = () => {
    const logout = () => {
        signOut(auth);
    };
    return (
        <div>
            <div className="py-2">
                <div className="row">
                    <div className="px-4 py-2">
                        <div className="d-flex justify-content-between align-items-center">
                            <div>
                                <img className="w-25" src={logo} alt="" />
                            </div>
                            <button
                                onClick={logout}
                                className="fw-semi-bold btn border-0
                            rounded-0 px-4 py-2 
                            text-dark"
                            >
                                <Link
                                    to="/login"
                                    className="text-decoration-none text-dark"
                                >
                                    Log Out
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
