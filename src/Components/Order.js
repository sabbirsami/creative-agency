import React from "react";
import { useParams } from "react-router-dom";

const Order = () => {
    const { id } = useParams();
    console.log(id);
    return (
        <div>
            <h1>Order Page</h1>
            <p> id: {id}</p>
        </div>
    );
};

export default Order;
