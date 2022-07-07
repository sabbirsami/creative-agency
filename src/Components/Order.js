import React, { useState } from "react";
import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import { BsFillCartPlusFill, BsCheckCircleFill } from "react-icons/bs";
import HeaderNavbar from "./HeaderNavbar";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const Order = () => {
    const { id } = useParams();
    const [user, loading] = useAuthState(auth);
    const { register, reset, handleSubmit } = useForm();

    const { data: service, isLoading } = useQuery("singleService", () =>
        fetch(`https://creative-agency-2022.herokuapp.com/services/${id}`).then(
            (res) => res.json()
        )
    );
    const [validated, setValidated] = useState(false);
    if (isLoading) {
        return <p>Loading...</p>;
    }
    const { name, price, dic, feature, _id } = service[0];

    const onSubmit = (data, event) => {
        console.log(event);
        const form = event.currentTarget;
        if (form?.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
        if (validated) {
            const userOrder = {
                userFullName: data.name,
                userEmail: data.email,
                userAddress: data.address,
                userPhone: data.phone,
                userName: data.userName,
                serviceName: name,
                servicePrice: price,
                serviceDic: dic,
                serviceFeature: feature,
                serviceId: _id,
            };
            console.log(userOrder);
            fetch("https://creative-agency-2022.herokuapp.com/orders", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userOrder),
            })
                .then((response) => response.json())
                .then((result) => {
                    console.log("Success:", result);
                    reset();
                    toast.success("Successfully Order!", {
                        duration: 4000,
                    });
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        }
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
                                onSubmit={handleSubmit(onSubmit)}
                            >
                                <Row className="mb-3">
                                    <Form.Group
                                        as={Col}
                                        md="8"
                                        controlId="validationCustom01"
                                    >
                                        <Form.Label>Full Name</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            {...register("name", {
                                                required: {
                                                    value: true,
                                                },
                                            })}
                                            placeholder="Full Name"
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
                                                {...register("userName", {
                                                    required: {
                                                        value: true,
                                                    },
                                                })}
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
                                            {...register("phone", {
                                                required: {
                                                    value: true,
                                                },
                                            })}
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
                                            {...register("email", {
                                                required: {
                                                    value: true,
                                                },
                                            })}
                                            readOnly
                                            value={user?.email}
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
                                        md="12"
                                        controlId="validationCustom03"
                                    >
                                        <Form.Label>Address</Form.Label>
                                        <Form.Control
                                            {...register("address", {
                                                required: {
                                                    value: true,
                                                },
                                            })}
                                            type="text"
                                            placeholder="Address"
                                            required
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Please provide your address.
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
                                <Button
                                    type="submit"
                                    className="btn-success px-4"
                                >
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
