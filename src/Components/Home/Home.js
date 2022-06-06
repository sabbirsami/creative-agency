import React from "react";
import Work from "../Work";
import Hero from "./Hero";
import Partnership from "./Partnership";
import Services from "./Services";

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Partnership></Partnership>
            <Services></Services>
            <Work></Work>
        </div>
    );
};

export default Home;
