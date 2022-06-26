import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import carousel_1 from "../images/carousel-1.png";
import carousel_2 from "../images/carousel-2.png";
import carousel_3 from "../images/carousel-3.png";
import carousel_4 from "../images/carousel-4.png";
import carousel_5 from "../images/carousel-5.png";
const Work = () => {
    return (
        <div style={{ backgroundColor: "#111430" }}>
            <div className="pt-lg-5">
                <div className="py-5">
                    <h1 className="text-center text-white pb-5 pt-3 display-4">
                        Here are some of{" "}
                        <span className="text-success bg-light px-2 fw-semi-bold">
                            our works
                        </span>
                    </h1>
                    <>
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            centeredSlides={true}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div>
                                    {" "}
                                    <img
                                        className="w-100"
                                        src={carousel_1}
                                        alt=""
                                    />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <img
                                        className="w-100"
                                        src={carousel_2}
                                        alt=""
                                    />
                                </div>
                            </SwiperSlide>
                            {/* <SwiperSlide>
                            <div>
                                <img
                                    className="w-100"
                                    src={carousel_3}
                                    alt=""
                                />
                            </div>
                        </SwiperSlide> */}
                            <SwiperSlide>
                                <div>
                                    <img
                                        className="w-100"
                                        src={carousel_4}
                                        alt=""
                                    />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <img
                                        className="w-100"
                                        src={carousel_5}
                                        alt=""
                                    />
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </>
                </div>
            </div>
        </div>
    );
};

export default Work;
