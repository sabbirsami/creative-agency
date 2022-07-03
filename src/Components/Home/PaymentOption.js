import React from "react";
import {
    FaCcVisa,
    FaBitcoin,
    FaCcMastercard,
    FaCcStripe,
    FaCcAmazonPay,
    FaCcPaypal,
} from "react-icons/fa";

const PaymentOption = () => {
    return (
        <div style={{ backgroundColor: "#F5F9FE" }}>
            <div className="py-5">
                <div className="container">
                    <div className="text-center">
                        <div className="">
                            <h3>
                                We accept PayPal and all major credit cards.
                            </h3>
                            <p className="display-5 py-2">
                                <FaCcVisa className="mx-2" />
                                <FaBitcoin className="mx-2" />
                                <FaCcMastercard className="mx-2" />
                                <FaCcStripe className="mx-2" />
                                <FaCcAmazonPay className="mx-2" />
                                <FaCcPaypal className="mx-2" />
                            </p>
                            <div className="d-flex justify-content-center">
                                <p className="border-end border-dark p-2 text-success">
                                    Chat with us
                                </p>
                                <p className=" p-2">
                                    Send us an email to
                                    support@creative-agency.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentOption;
