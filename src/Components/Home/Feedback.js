import React, { useEffect, useState } from "react";

const Feedback = () => {
    const [customers, setCustomers] = useState([]);
    useEffect(() => {
        fetch("feedback.json")
            .then((res) => res.json())
            .then((data) => {
                setCustomers(data);
            });
    }, []);
    return (
        <div>
            <div className="container py-4">
                <div className="py-5">
                    <h1 className="text-center">
                        {" "}
                        Clients <span className="text-success">Feedback</span>
                    </h1>
                </div>
                <div className="row pb-5">
                    {customers.map((customer) => (
                        <div className="col-lg-4">
                            <div className="p-3 border border-1">
                                <div className="d-flex align-items-center">
                                    <img
                                        className="w-10"
                                        src={customer.img}
                                        alt=""
                                    />

                                    <div className="ps-3 pt-3">
                                        <h5 className="fw-bold m-0 pt-2">
                                            {customer.name}
                                        </h5>
                                        <p>{customer.position}</p>
                                    </div>
                                </div>
                                <div className="p-2">
                                    <p>{customer.dis}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Feedback;
