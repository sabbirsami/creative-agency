import React from "react";
import { BsArrowRightShort } from "react-icons/bs";

const Service = ({ service }) => {
    return (
        <div className="col-lg-4 p-2">
            <div className="p-4 bg-light shadow rounded-3">
                <div className="">
                    <div>
                        <img className="w-15 pe-3" src={service.img} alt="" />
                    </div>
                    <div className="py-2">
                        <h4>{service.name}</h4>
                        <p className="pt-2">{service.dic}</p>
                        <button className="alert-success btn py-0 pe-2 ps-3 border-0 rounded-pill">
                            <small> Buy </small>
                            <BsArrowRightShort className=""></BsArrowRightShort>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;
