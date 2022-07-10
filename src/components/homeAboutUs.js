import React from "react";
import {
    HashRouter,
    Route,
    Routes,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';

const HomeAboutUs = () => {
    return (
        <section className="homeAboutUs" id="about_us">
            <div className="homeAboutUs_left">
                <h1>O nas</h1>
                <div className="header_decoration"></div>
                <p>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                <span></span>
            </div>
            <div className="homeAboutUs_right"></div>
        </section>
    );
}

export default HomeAboutUs;