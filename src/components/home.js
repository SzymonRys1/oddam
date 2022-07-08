import React from "react";
import HomeHeader from "./homeHeader";
import HomeThreeColumns from "./homeThreeColumns";
import HomeSteps from "./homeSteps";
import HomeAboutUs from "./homeAboutUs";

const Home = () => {
    return (
        <>
            <HomeHeader />
            <HomeThreeColumns />
            <HomeSteps />
            <HomeAboutUs />
        </>
    );
}

export default Home;