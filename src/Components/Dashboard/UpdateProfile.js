import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import { HiOutlinePlus } from "react-icons/hi";
import { Form } from "react-bootstrap";

const UpdateProfile = () => {
    const [user, loading, error] = useAuthState(auth);
    // console.log(user);
    if (loading) {
        return <p>Loading....</p>;
    }
    return (
        <div>
            <div className="container-fluid py-4">
                <div className="row">
                    <div className="col-lg-3">
                        <button
                            style={{
                                width: "250px",
                                height: "250px",
                                border: "2px dashed",
                            }}
                            className="p-2 bg-white rounded d-flex justify-content-center align-items-center"
                        >
                            <HiOutlinePlus />
                        </button>
                        <div className="px-2 py-4">
                            <button className="btn shadow-sm border-0 rounded-0 px-4 py-2 alert-success text-dark">
                                <Link
                                    to=""
                                    className="text-decoration-none text-dark"
                                >
                                    Update Profile
                                </Link>
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <div className="">
                            <div>
                                <p className="m-0">Name:</p>
                                <p className="text-muted col-lg-6">
                                    <Form.Control
                                        type="text"
                                        className="rounded-0"
                                    />
                                </p>
                            </div>
                            <div>
                                <p className="m-0">Email:</p>
                                <p className="text-muted col-lg-6">
                                    <Form.Control
                                        type="email"
                                        className="rounded-0"
                                    />
                                </p>
                            </div>
                            <div>
                                <p className="m-0">Phone Number:</p>
                                <p className="text-muted col-lg-6">
                                    <Form.Control
                                        type="number"
                                        className="rounded-0"
                                    />
                                </p>
                            </div>
                            <div>
                                <p className="m-0">Address:</p>
                                <p className="text-muted col-lg-6">
                                    <Form.Control
                                        type="text"
                                        className="rounded-0"
                                    />
                                </p>
                            </div>
                            <div>
                                <p className="m-0">About:</p>
                                <p className="text-muted col-lg-6">
                                    <Form.Control
                                        as="textarea"
                                        rows={6}
                                        className="rounded-0"
                                    />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;
