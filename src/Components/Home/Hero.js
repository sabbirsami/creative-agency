import React from "react";
import Frame from "../../images/logos/Frame.png";

const Hero = () => {
    return (
        <div>
            <div className="container d-lg-block d-flex flex-nowrap">
                <div className="py-lg-5">
                    <div className="hero-content order-2">
                        <h1 className="fw-light text-center">
                            Let’s Grow Your Brand To <br /> The Next Level
                        </h1>
                        <p className="col-lg-6 mx-auto text-center py-lg-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Purus commodo ipsum duis laoreet maecenas.
                            Feugiat{" "}
                        </p>
                        <div className="col-lg-4 mx-auto">
                            <div className="alert-secondary d-flex justify-content-between align-items-center p-2 rounded-pill ">
                                <p className="m-0 ps-4 text-muted">
                                    Want to hire?
                                </p>
                                <button className="btn shadow border-0 rounded-pill btn-success px-5 py-2">
                                    Hire
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="order-1">
                        <div className="col-lg-8 mx-auto">
                            <img className="w-100" src={Frame} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
