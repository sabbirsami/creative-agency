import React from "react";
import slack from "../../images/logos/slack.png";
import google from "../../images/logos/google.png";
import uber from "../../images/logos/uber.png";
import netflix from "../../images/logos/netflix.png";
import airbnb from "../../images/logos/airbnb.png";

const Partnership = () => {
    return (
        <div>
            <div className="container">
                <div className="row py-3">
                    <div className="d-lg-flex d-none justify-content-center align-items-center">
                        <div className="p-5">
                            <img className="w-100" src={slack} alt="" />
                        </div>
                        <div className="p-5">
                            <img className="w-100" src={google} alt="" />
                        </div>
                        <div className="p-5">
                            <img className="w-100" src={uber} alt="" />
                        </div>
                        <div className="p-5">
                            <img className="w-100" src={netflix} alt="" />
                        </div>
                        <div className="p-5">
                            <img className="w-100" src={airbnb} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Partnership;
