import React from "react";

const Loading = () => {
    return (
        <div
            style={{ height: "100vh" }}
            className="d-flex align-items-center justify-content-center"
        >
            <div
                className="spinner-grow text-success"
                style={{ height: "150px", width: " 150px" }}
                role="status"
            >
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default Loading;
