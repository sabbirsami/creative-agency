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
                <div className="row">
                    <div className="col-lg-3">
                        <div>
                            <h1 className="fs-0-5 pt-3">
                                Provide awesome{" "}
                                <span className="text-success">services</span>
                            </h1>
                            <p className="pt-4 d-lg-block d-none">
                                <MdDoubleArrow className="fs-1" />
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <div className="row">
                            {services.slice(0, 3).map((service) => (
                                <Service
                                    key={service.id}
                                    service={service}
                                ></Service>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
