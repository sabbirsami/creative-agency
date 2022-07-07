import React from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

const AddReview = () => {
    const { register, reset, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        fetch("https://creative-agency-2022.herokuapp.com/reviews", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
                reset();
            });
    };
    return (
        <div>
            <div className="container-fluid">
                <div className="row pt-4">
                    <div className="col-lg-5">
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlInput1"
                            >
                                <Form.Control
                                    {...register("name", {
                                        required: {
                                            value: true,
                                        },
                                    })}
                                    name="name"
                                    type="name"
                                    className="rounded-1 border-0 py-3"
                                    placeholder="Your Name"
                                />
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlInput1"
                            >
                                <Form.Control
                                    {...register("email", {
                                        required: {
                                            value: true,
                                        },
                                    })}
                                    name="email"
                                    type="email"
                                    className="rounded-1 border-0 py-3"
                                    placeholder="Your email address"
                                />
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlTextarea1"
                            >
                                <Form.Control
                                    {...register("review", {
                                        required: {
                                            value: true,
                                        },
                                    })}
                                    name="review"
                                    as="textarea"
                                    rows={6}
                                    className="rounded-1 border-0 py-3"
                                    placeholder="Write your review here.."
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
        </div>
    );
};

export default AddReview;
