import React from "react";
import notFound from "../../src/images/notFound.png";
import HeaderNavbar from "../Components/HeaderNavbar";

const PageNotFount = () => {
    return (
        <>
            <HeaderNavbar />
            <div className="d-flex justify-content-center">
                <img src={notFound} alt="" />
            </div>
        </>
    );
};

export default PageNotFount;
