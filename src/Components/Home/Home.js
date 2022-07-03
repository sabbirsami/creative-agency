import React from "react";
import HeaderNavbar from "../HeaderNavbar";
import Loading from "../Loading";
import Work from "../Work";
import Contact from "./Contact";
import Feedback from "./Feedback";
import Hero from "./Hero";
import Partnership from "./Partnership";
import QuestionAnswer from "./QuestionAnswer";
import Services from "./Services";

const Home = () => {
    return (
        <div>
            <HeaderNavbar></HeaderNavbar>
            <Hero></Hero>
            <Partnership></Partnership>
            <Services></Services>
            <Work></Work>
            <Feedback></Feedback>
            <QuestionAnswer></QuestionAnswer>
            <Contact></Contact>
        </div>
    );
};

export default Home;
