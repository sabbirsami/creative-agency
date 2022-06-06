import React from "react";

const Service = ({ service }) => {
    return (
        <div className="col-lg-4 p-2">
            <div className="p-4 bg-light shadow rounded-3">
                <div className="d-flex py-3">
                    <div>
                        <img className="w-15 pe-3" src={service.img} alt="" />
                    </div>
                    <div className="py-2">
                        <h4>{service.name}</h4>
                        <p className="">{service.dic}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;
