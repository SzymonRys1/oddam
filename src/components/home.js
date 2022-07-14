import React from "react";
import HomeHeader from "./homeHeader";
import HomeThreeColumns from "./homeThreeColumns";
import HomeSteps from "./homeSteps";
import HomeAboutUs from "./homeAboutUs";
import HomeHelp from "./homeHelp";
import HomeContact from "./homeContact";

const Home = () => {
    return (
        <>
            <HomeHeader />
            <HomeThreeColumns />
            <HomeSteps />
            <HomeAboutUs />
            <HomeHelp />
            <HomeContact />
        </>
    );
}

export default Home;