import React from "react";
import { useMatch, useResolvedPath, Link } from "react-router-dom";
const DashboardLink = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    return (
        <Link
            className="nav-link px-4 py-3 fw-semi-bold"
            style={{
                borderLeft: match ? "6px solid #157347" : "6px solid #F8F9FA",
                backgroundColor: match ? "#ffffff" : "none",
                color: match ? "#157347" : "#000000",
                fontWeight: match ? "600" : "400",
            }}
            to={to}
            {...props}
        >
            {children}
        </Link>
    );
};

export default DashboardLink;
