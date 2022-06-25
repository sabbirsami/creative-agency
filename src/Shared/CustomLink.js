import React from "react";
import { useMatch, useResolvedPath, Link } from "react-router-dom";
const CustomLink = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    return (
        <div>
            <Link
                className="nav-link px-3 py-2 fw-semi-bold"
                style={{
                    // borderBottom: match ? "2px solid #7AB259" : "none",
                    // backgroundColor: match ? "#D1E7DD" : "none",
                    color: match ? "#157347" : "#000000",
                }}
                to={to}
                {...props}
            >
                {children}
            </Link>
        </div>
    );
};

export default CustomLink;
