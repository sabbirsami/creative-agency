import React from "react";
import { useQuery } from "react-query";
import toast from "react-hot-toast";

const ServiceList = () => {
    const {
        data: services,
        refetch,
        isLoading,
    } = useQuery("orders", () =>
        fetch(`http://localhost:5000/services`, {
            method: "GET",
        }).then((res) => res.json())
    );
    if (isLoading) {
        return <p>Loading..</p>;
    }
    const handleDelete = (id) => {
        console.log(id);
        fetch(`http://localhost:5000/services/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((result) => {
                toast.success("Service delete", {
                    duration: 4000,
                });
                refetch();
            });
    };
    return (
        <div>
            <div className=" bg-white rounded-3 mt-3 p-2">
                <div
                    className="m-2 p-3 rounded-2"
                    style={{ backgroundColor: "#F5F6FA" }}
                >
                    <div className="row rounded-3">
                        <div className="col-3">Service Name</div>
                        <div className="col-2">Price</div>
                        <div className="col-5">Details</div>
                        <div className="col-2">Delete</div>
                    </div>
                </div>
                {services.map((service) => (
                    <div className="m-2 p-3 rounded-2">
                        <div className="row align-items-center">
                            <div className="col-3">{service.name}</div>
                            <div className="col-2">${service.price}</div>
                            <div className="col-5">{service.dic}</div>
                            <div className="col-2">
                                <button
                                    onClick={() => handleDelete(service._id)}
                                    className="btn px-0 text-danger "
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServiceList;
