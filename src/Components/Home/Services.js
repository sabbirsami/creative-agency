import React, { useEffect } from "react";
import { useState } from "react";

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("service.json")
            .then((res) => res.json())
            .then((data) => {
                setServices(data);
            });
    }, []);
    return (
        <div>
            <div className="container">
                <div className="py-5">
                    <h1>
                        Provide awesome{" "}
                        <span className="text-success">services</span>
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default Services;
