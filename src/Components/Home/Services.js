import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Service from "./Service";
import { MdDoubleArrow } from "react-icons/md";

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
                <div className="col-lg-7 mx-auto">
                    <div>
                        <h1 className="display-5 fw-semibold pt-3 text-center">
                            Our awesome services pricing plan made simple
                        </h1>
                        <p className="fs-5 text-center text-muted">
                            Upgrade your space for higher rankings, powerful
                            features & more ways to connect with potential
                            customers
                        </p>
                    </div>
                </div>
                <div className="row pt-5">
                    {services.slice(0, 3).map((service) => (
                        <Service key={service.id} service={service}></Service>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
