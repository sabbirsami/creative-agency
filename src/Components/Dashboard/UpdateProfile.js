import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const UpdateProfile = () => {
    const [user, loading] = useAuthState(auth);
    const { register, reset, handleSubmit } = useForm();

    if (loading) {
        return <p>Loading....</p>;
    }

    const onSubmit = (data) => {
        console.log(data);
        const email = data.email;
        fetch(`https://creative-agency-2022.herokuapp.com/users/${email}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((result) => {
                console.log("Success:", result);
                reset();
                toast.success("Successfully update profile", {
                    duration: 4000,
                });
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };
    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <div className="container-fluid py-4">
                <div className="row">
                    <div className="col-lg-3">
                        <Form.Control
                            type="file"
                            {...register("photo")}
                            style={{
                                width: "250px",
                                height: "250px",
                                border: "2px dashed",
                            }}
                            className="p-2 bg-white rounded d-flex justify-content-center align-items-center"
                        ></Form.Control>
                    </div>
                    <div className="col-lg-9">
                        <div>
                            <div>
                                <p className="m-0">Name:</p>
                                <p className="text-muted col-lg-6">
                                    <Form.Control
                                        {...register("name")}
                                        type="text"
                                        className="rounded-0"
                                    />
                                </p>
                            </div>
                            <div>
                                <p className="m-0">Email:</p>
                                <p className="text-muted col-lg-6">
                                    <Form.Control
                                        {...register("email")}
                                        type="email"
                                        readOnly
                                        value={user?.email}
                                        className="rounded-0"
                                    />
                                </p>
                            </div>
                            <div>
                                <p className="m-0">Phone Number:</p>
                                <p className="text-muted col-lg-6">
                                    <Form.Control
                                        {...register("phone")}
                                        type="number"
                                        className="rounded-0"
                                    />
                                </p>
                            </div>
                            <div>
                                <p className="m-0">Address:</p>
                                <p className="text-muted col-lg-6">
                                    <Form.Control
                                        {...register("address")}
                                        type="text"
                                        className="rounded-0"
                                    />
                                </p>
                            </div>
                            <div>
                                <p className="m-0">Linkedin Account:</p>
                                <p className="text-muted col-lg-6">
                                    <Form.Control
                                        {...register("linkedinLink")}
                                        type="text"
                                        className="rounded-0"
                                    />
                                </p>
                            </div>
                            <div>
                                <p className="m-0">Github Address:</p>
                                <p className="text-muted col-lg-6">
                                    <Form.Control
                                        {...register("githubLink")}
                                        type="text"
                                        className="rounded-0"
                                    />
                                </p>
                            </div>
                            <div>
                                <p className="m-0">About:</p>
                                <p className="text-muted col-lg-6">
                                    <Form.Control
                                        {...register("about")}
                                        as="textarea"
                                        rows={6}
                                        className="rounded-0"
                                    />
                                </p>
                            </div>
                            <div className=" py-4">
                                <button className="btn shadow-sm border-0 rounded-0 px-5 py-2 alert-success text-dark">
                                    <Link
                                        type="submit"
                                        to="/dashboard"
                                        className="text-decoration-none text-dark"
                                    >
                                        Update Profile
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Form>
    );
};

export default UpdateProfile;
