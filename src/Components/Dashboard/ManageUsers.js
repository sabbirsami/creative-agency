import React from "react";
import { useQuery } from "react-query";
import toast from "react-hot-toast";
import Loading from "../Loading";

const ManageUsers = () => {
    const {
        data: orders,
        refetch,
        isLoading,
    } = useQuery("orders", () =>
        fetch(`http://localhost:5000/users`).then((res) => res.json())
    );
    if (isLoading) {
        return <Loading />;
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
                        <div className="col-2">User Name</div>
                        <div className="col-2">Email ID</div>
                        <div className="col-1">Phone Number</div>
                        <div className="col-3">Linkedin Link</div>
                        <div className="col-3">Github Link</div>
                        <div className="col-1">Delete</div>
                    </div>
                </div>
                {orders.map((order) => (
                    <div className="m-2 p-3 rounded-2">
                        <div className="row align-items-center">
                            <div className="col-2">{order.name}</div>
                            <div className="col-2">{order.email}</div>
                            <div className="col-1">${order.phone}</div>
                            <div className="col-3">
                                <a
                                    target={"_blank"}
                                    rel="noreferrer"
                                    className="text-decoration-none"
                                    href={order.linkedinLink}
                                >
                                    {order.linkedinLink}
                                </a>
                            </div>
                            <div className="col-3">
                                <a
                                    target={"_blank"}
                                    rel="noreferrer"
                                    className="text-decoration-none"
                                    href={order.githubLink}
                                >
                                    {order.githubLink}
                                </a>
                            </div>
                            <div className="col-1">
                                <button
                                    onClick={() => handleDelete(order._id)}
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

export default ManageUsers;
