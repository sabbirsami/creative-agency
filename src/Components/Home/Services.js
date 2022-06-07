import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Service from "./Service";
import { BsArrowUpRightSquareFill } from "react-icons/bs";

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("services.json")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setServices(data);
            });
    }, []);
    return (
        <div className="pb-5">
            <div className="container py-5">
                <div className="pb-4 text-center">
                    <h1>
                        Provide awesome{" "}
                        <span className="text-success">services</span>
                    </h1>
                </div>
                {/* <p className="text-end">
                    <Link to="/" className="text-dark nav-link">
                        Show All{" "}
                        <BsArrowUpRightSquareFill className=""></BsArrowUpRightSquareFill>
                    </Link>
                </p> */}
                <div className="row">
                    {services.slice(0, 3).map((service) => (
                        <Service key={service.id} service={service}></Service>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
