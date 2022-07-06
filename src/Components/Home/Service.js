import React from "react";
import { BsFillCartPlusFill, BsCheckCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
    return (
        <div className="col-lg-4">
            <div className="p-5 bg-light shadow-sm rounded-3">
                <div className="">
                    <div>
                        <p className="">
                            <h1 className="display-4 d-inline fw-semibold mb-0">
                                ${service.price}
                            </h1>{" "}
                            /month
                        </p>
                    </div>
                    <div className="py-2">
                        <h3 className="pt-1">{service.name}</h3>
                        <p className=" text-muted">{service.dic}</p>
                        {service.feature.map((features, index) => (
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
                                <p className="m-0 ms-3">{features}</p>
                            </p>
                        ))}

                        <Link
                            to={`/services/${service._id}`}
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
    );
};

export default Service;
