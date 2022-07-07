import React from "react";
import { useQuery } from "react-query";
import toast from "react-hot-toast";

const ManageOrders = () => {
    const {
        data: orders,
        refetch,
        isLoading,
    } = useQuery("orders", () =>
        fetch(`http://localhost:5000/orders`).then((res) => res.json())
    );
    if (isLoading) {
        return <p>Loading..</p>;
    }
    const handleDelete = (id) => {
        console.log(id);
        fetch(`http://localhost:5000/orders/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((result) => {
                toast.success("Order delete", {
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
                        <div className="col-2">Service</div>
                        <div className="col-3">Email ID</div>
                        <div className="col-1">Price</div>
                        <div className="col-4">Details</div>
                        <div className="col-1">Delete</div>
                        <div className="col-1">Pay</div>
                    </div>
                </div>
                {orders.map((order) => (
                    <div className="m-2 p-3 rounded-2">
                        <div className="row align-items-center">
                            <div className="col-2">{order.serviceName}</div>
                            <div className="col-3">{order.userEmail}</div>
                            <div className="col-1">${order.servicePrice}</div>
                            <div className="col-4">{order.serviceDic}</div>
                            <div className="col-1">
                                <button
                                    onClick={() => handleDelete(order._id)}
                                    className="btn px-0 text-danger "
                                >
                                    Delete
                                </button>
                            </div>
                            <div className="col-1">
                                <button className="btn px-0 text-success">
                                    Paid
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ManageOrders;