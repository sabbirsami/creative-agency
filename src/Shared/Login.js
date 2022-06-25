import React from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div>
            <div className="container">
                <div className="py-4 text-center">
                    <h1 className="fw-bold fs-0-5">Log In</h1>
                    <p>
                        Don't have and account?{" "}
                        <Link to={"/sing-up"}>Sign Up</Link>
                    </p>
                </div>
                <div className="row">
                    <div className="col-lg-6 px-lg-5">
                        <div className="p-5">
                            <Form>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Email address"
                                    className="mb-3"
                                >
                                    <Form.Control
                                        className="border-bottom border-0 rounded-0"
                                        type="email"
                                        placeholder="name@example.com"
                                    />
                                </FloatingLabel>
                                <FloatingLabel
                                    controlId="floatingPassword"
                                    label="Password"
                                    className="mb-3"
                                >
                                    <Form.Control
                                        className="border-bottom border-0 rounded-0"
                                        type="password"
                                        placeholder="Password"
                                    />
                                </FloatingLabel>
                                <div className="d-flex justify-content-between">
                                    <Form.Group className="mb-3">
                                        <Form.Check
                                            label="Remember Me"
                                            feedback="You must agree before submitting."
                                            feedbackType="invalid"
                                        />
                                    </Form.Group>
                                    <p>
                                        <Link to="/">
                                            Forgot Password or Email
                                        </Link>
                                    </p>
                                </div>
                                <div className="py-3">
                                    <button
                                        className="rounded-pill px-5 py-2 btn btn-outline-primary"
                                        type="submit"
                                    >
                                        Log In
                                    </button>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
