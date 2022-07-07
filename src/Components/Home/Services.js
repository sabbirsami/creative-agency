import React from "react";

import { useQuery } from "react-query";
import Loading from "../Loading";
import Service from "./Service";

const Services = () => {
    const { data: services, isLoading } = useQuery("services", () =>
        fetch("https://creative-agency-2022.herokuapp.com/services").then(
            (res) => res.json()
        )
    );
    if (isLoading) {
        return <Loading />;
    }
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
                        <Service key={service._id} service={service}></Service>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
