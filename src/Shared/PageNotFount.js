import React from "react";
import notFound from "../../src/images/notFound.png";
import HeaderNavbar from "../Components/HeaderNavbar";

const PageNotFount = () => {
    return (
        <div className="container-fluid">
            <HeaderNavbar />
            <div className="d-flex justify-content-center">
                <img className="w-100" src={notFound} alt="" />
            </div>
        </div>
    );
};

export default PageNotFount;
