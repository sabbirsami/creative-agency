import React from "react";
import { useQuery } from "react-query";
const MyOrder = () => {
    const { data: orders, isLoading } = useQuery("orders", () =>
        fetch("http://localhost:5000/orders").then((res) => res.json())
    );
    if (isLoading) {
        return <p>Loading..</p>;
    }
    return (
        <div>
            <div className=" bg-white rounded-3 mt-3 p-2">
                <div
                    className="m-2 p-3 rounded-2"
                    style={{ backgroundColor: "#F5F6FA" }}
                >
                    <div className="row rounded-4">
                        <div className="col-2">Service</div>
                        <div className="col-3">Email ID</div>
                        <div className="col-1">Price</div>
                        <div className="col-4">Details</div>
                        <div className="col-1">Cancel</div>
                        <div className="col-1">Pay</div>
                    </div>
                </div>
                {orders.map((order) => (
                    <div className="m-2 p-3 rounded-2">
                        <div className="row align-items-center">
                            <div className="col-2">{order.serviceName}</div>
                            <div className="col-3">${order.userEmail}</div>
                            <div className="col-1">${order.servicePrice}</div>
                            <div className="col-4">{order.serviceDic}</div>
                            <div className="col-1">
                                <button className="btn btn-danger">
                                    Cancel
                                </button>
                            </div>
                            <div className="col-1">
                                <button className="btn btn-success">Pay</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyOrder;