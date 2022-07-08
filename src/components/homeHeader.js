import React from "react";
import {
    HashRouter,
    Route,
    Routes,
    Link as Link1,
    Switch,
    NavLink,
} from 'react-router-dom';
import {Link as Link2} from 'react-scroll';

const HomeHeader = () => {
    return (
        <section className="header">
            <div className="header_left">

            </div>
            <div className="header_right">
                <div className="header_logs">
                    <Link1 to='/logowanie' className="header_logs_login">Zaloguj</Link1>
                    <Link1 to='/rejestracja' className="header_logs_register">Załóż konto</Link1>
                </div>
                <div className="header_options">
                    <a href="#start" className="header_option start">Start</a>
                    <Link2 to="about" spy={true} smooth={true} offset={50} duration={500} className="header_option about">O co chodzi?</Link2>
                    <a href="#about_us" className="header_option about_us">O nas</a>
                    <a href="#foundations" className="header_option foundations">Fundacje i organizacje</a>
                    <a href="#contact" className="header_option contact">Kontakt</a>
                </div>
                <div className="header_quote">
                    <h1>Zacznij pomagać!<br /> Oddaj niechciane rzeczy w zaufane ręce</h1>
                </div>
                <div className="header_decoration">
                </div>
                <div className="header_actions">
                    <Link1 to='/logowanie' className="header_action">Oddaj rzeczy</Link1>
                    <Link1 to='/logowanie' className="header_action">Zorganizuj zbiórkę</Link1>
                </div>
            </div>
        </section>
    )
}

export default HomeHeader;