import React, { useState } from "react";
import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import { BsFillCartPlusFill, BsCheckCircleFill } from "react-icons/bs";
import HeaderNavbar from "./HeaderNavbar";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";

const Order = () => {
    const { id } = useParams();
    console.log(id);
    const { data: service, isLoading } = useQuery("singleService", () =>
        fetch(`http://localhost:5000/services/${id}`).then((res) => res.json())
    );
    const [validated, setValidated] = useState(false);
    if (isLoading) {
        return <p>Loading...</p>;
    }
    const { name, price, dic, feature, _id } = service[0];

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };
    return (
        <div>
            <HeaderNavbar />
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="p-5 bg-light shadow-sm rounded-3">
                            <div className="">
                                <div>
                                    <p className="">
                                        <h1 className="display-4 d-inline fw-semibold mb-0">
                                            ${price}
                                        </h1>{" "}
                                        /month
                                    </p>
                                </div>
                                <div className="py-2">
                                    <h3 className="pt-1">{name}</h3>
                                    <p className=" text-muted">{dic}</p>
                                    {feature.map((features, index) => (
                                        <p key={index} className="d-flex">
                                            <p className="m-0">
                                                <BsCheckCircleFill
                                                    className="d-block text-success"
                                                    style={{
                                                        height: "20px",
                                                        width: "20px",
                                                    }}
                                                />
                                            </p>
                                            <p className="m-0 ms-3">
                                                {features}
                                            </p>
                                        </p>
                                    ))}

                                    <Link
                                        to={`/services/${_id}`}
                                        className="btn btn-outline-dark w-100 border-2 rounded-3"
                                    >
                                        <p className="m-0">
                                            Add to cart{" "}
                                            <BsFillCartPlusFill className="ms-3"></BsFillCartPlusFill>
                                        </p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="p-5 border border-3 rounded shadow-sm">
                            <Form
                                noValidate
                                validated={validated}
                                onSubmit={handleSubmit}
                            >
                                <Row className="mb-3">
                                    <Form.Group
                                        as={Col}
                                        md="4"
                                        controlId="validationCustom01"
                                    >
                                        <Form.Label>First name</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="First name"
                                        />
                                        <Form.Control.Feedback>
                                            Looks good!
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group
                                        as={Col}
                                        md="4"
                                        controlId="validationCustom02"
                                    >
                                        <Form.Label>Last name</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="Last name"
                                        />
                                        <Form.Control.Feedback>
                                            Looks good!
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group
                                        as={Col}
                                        md="4"
                                        controlId="validationCustomUsername"
                                    >
                                        <Form.Label>Username</Form.Label>
                                        <InputGroup hasValidation>
                                            <InputGroup.Text id="inputGroupPrepend">
                                                @
                                            </InputGroup.Text>
                                            <Form.Control
                                                type="text"
                                                placeholder="Username"
                                                aria-describedby="inputGroupPrepend"
                                                required
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                Please choose a username.
                                            </Form.Control.Feedback>
                                        </InputGroup>
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                    <Form.Group
                                        as={Col}
                                        md="5"
                                        controlId="validationCustom03"
                                    >
                                        <Form.Label>Phone</Form.Label>
                                        <Form.Control
                                            type="number"
                                            placeholder="Phone Number"
                                            required
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Please provide Phone Number.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group
                                        as={Col}
                                        md="7"
                                        controlId="validationCustom03"
                                    >
                                        <Form.Label>Email Address</Form.Label>
                                        <Form.Control
                                            type="email"
                                            placeholder="Email Address"
                                            required
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Please provide Email Address.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                    <Form.Group
                                        as={Col}
                                        md="6"
                                        controlId="validationCustom03"
                                    >
                                        <Form.Label>City</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="City"
                                            required
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Please provide a valid city.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group
                                        as={Col}
                                        md="3"
                                        controlId="validationCustom04"
                                    >
                                        <Form.Label>State</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="State"
                                            required
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Please provide a valid state.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group
                                        as={Col}
                                        md="3"
                                        controlId="validationCustom05"
                                    >
                                        <Form.Label>Zip</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Zip"
                                            required
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Please provide a valid zip.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Row>
                                <Form.Group className="mb-3">
                                    <Form.Check
                                        required
                                        label="Agree to terms and conditions"
                                        feedback="You must agree before submitting."
                                        feedbackType="invalid"
                                    />
                                </Form.Group>
                                <Button type="submit" className="btn-success">
                                    Order Now
                                </Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;
