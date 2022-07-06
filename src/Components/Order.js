import React from "react";
import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import { BsFillCartPlusFill, BsCheckCircleFill } from "react-icons/bs";
import HeaderNavbar from "./HeaderNavbar";

const Order = () => {
    const { id } = useParams();
    console.log(id);
    const { data: service, isLoading } = useQuery("singleService", () =>
        fetch(`http://localhost:5000/services/${id}`).then((res) => res.json())
    );
    if (isLoading) {
        return <p>Loading...</p>;
    }
    const { name, price, dic, feature, _id } = service[0];

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
                </div>
            </div>
        </div>
    );
};

export default Order;
