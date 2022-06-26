import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import emailjs from "@emailjs/browser";

const Contact = () => {
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
    };
    return (
        <div className="bg-yellow">
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="pe-4">
                            <h2>Let us handle your project, professionally.</h2>
                            <div className="col-lg-9 pt-3">
                                <p>
                                    With well written codes, we build amazing
                                    apps for all platforms, mobile and web apps
                                    in general.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="">
                            <Form>
                                <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlInput1"
                                >
                                    <Form.Control
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
                                </Button>
                            </Form>
                        </div>
                    </div>
                </div>
                <div className="pt-5">
                    <p className="text-center pt-3">
                        copyright Orange labs 2020
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Contact;
