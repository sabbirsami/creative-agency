import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import HeaderNav from "../HeaderNavbar";
import { HiLocationMarker } from "react-icons/hi";
import { AiFillPhone } from "react-icons/ai";
import { IoMail } from "react-icons/io5";
import { Button, Form } from "react-bootstrap";

const ContactSection = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "YOUR_SERVICE_ID",
                "YOUR_TEMPLATE_ID",
                form.current,
                "YOUR_PUBLIC_KEY"
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
        e.target.reset();
    };
    return (
        <div style={{ height: "90vh" }}>
            <div
                className="d-flex py-5 align-items-center bg-yellow"
                style={{ height: "91vh" }}
            >
                <div className="container d-flex justify-content-center py-5">
                    <div className="row ">
                        {/* d-flex flex-column */}
                        <div className="col-lg-7 pt-lg-0 mt-lg-0 pt-5 mt-5">
                            <h1>
                                Let's talk & make something amazing together.
                            </h1>
                            <div className="pt-lg-5 pb-4 mt-auto">
                                <h1>
                                    Start by{" "}
                                    <span className="text-success text-decoration-underline">
                                        saying hi
                                    </span>
                                </h1>
                            </div>
                            <div className="">
                                <p className="highlight">
                                    <p>CONTACT</p>
                                </p>
                                <p className="p-0 m-0">
                                    <HiLocationMarker></HiLocationMarker> Dhaka,
                                    Bangladesh{" "}
                                    <span className="ps-lg-3 d-lg-inline d-block">
                                        <AiFillPhone></AiFillPhone> +880 19 7070
                                        6676
                                    </span>
                                </p>
                                <p className="pb-4 m-0">
                                    <IoMail></IoMail>{" "}
                                    sabbir.mohammad.sami@gmail.com
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="pb-4 px-lg-3">
                                <Form ref={form} onSubmit={sendEmail}>
                                    <Form.Group
                                        className="mb-3"
                                        controlId="exampleForm.ControlInput1"
                                    >
                                        <Form.Control
                                            name="email"
                                            type="email"
                                            className="rounded-1 border-0 py-3"
                                            placeholder="Your email address"
                                        />
                                    </Form.Group>
                                    <Form.Group
                                        className="mb-3"
                                        controlId="exampleForm.ControlInput1"
                                    >
                                        <Form.Control
                                            name="company_name"
                                            type="text"
                                            className="rounded-1 border-0 py-3"
                                            placeholder="Your name / company’s name"
                                        />
                                    </Form.Group>
                                    <Form.Group
                                        className="mb-3"
                                        controlId="exampleForm.ControlTextarea1"
                                    >
                                        <Form.Control
                                            name="message"
                                            as="textarea"
                                            rows={6}
                                            className="rounded-1 border-0 py-3"
                                            placeholder="Your message"
                                        />
                                    </Form.Group>
                                    <Button
                                        variant="dark"
                                        className="rounded-1 border-0 px-5"
                                        type="submit"
                                    >
                                        Sent
                                    </Button>{" "}
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;
