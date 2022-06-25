import React from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineGithub } from "react-icons/ai";
import { GrFacebookOption } from "react-icons/gr";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div
        // className="d-flex align-items-center justify-content-center"
        // style={{ height: "75vh" }}
        >
            <div className="container">
                <div className="pt-4 text-center">
                    <h1 className="fw-bold fs-0-5 pt-lg-5 pb-2">Log In</h1>
                    <p>
                        Don't have and account?{" "}
                        <Link to={"/sing-up"}>Sign Up</Link>
                    </p>
                </div>
                <div className="row align-items-center">
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
                    <div className="col-lg-6 px-lg-5 border-start">
                        <div className="p-5">
                            <button className="p-0 btn btn-primary mb-3 rounded-0">
                                <div className="d-flex align-items-center pe-4">
                                    <div className="bg-white p-1">
                                        <FcGoogle className="fs-1" />
                                    </div>
                                    <p className="m-0 px-5">
                                        Continue with Google
                                    </p>
                                </div>
                            </button>
                            <button className="p-0 btn btn-light mb-3 border border-dark rounded-0">
                                <div className="d-flex align-items-center">
                                    <div className="bg-primary p-1">
                                        <GrFacebookOption className="fs-1 text-white" />
                                    </div>
                                    <p className="m-0 px-5">
                                        Continue with Facebook
                                    </p>
                                </div>
                            </button>
                            <button className="p-0 btn btn-outline-dark mb-3 rounded-0">
                                <div className="d-flex align-items-center pe-4">
                                    <div className="bg-white p-1 border-end border-dark">
                                        <AiOutlineGithub className="fs-1 " />
                                    </div>
                                    <p className="m-0 px-5">
                                        Continue with GitHub
                                    </p>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 mx-auto">
                    <p className="text-center mx-auto text-muted">
                        <small>
                            * By Logging in, you agree to our{" "}
                            <span className="text-primary">Terms of Use</span>{" "}
                            and to receive Creative Agency emails & updates and
                            acknowledge that you read our{" "}
                            <span className="text-primary">Privacy Policy</span>
                        </small>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
