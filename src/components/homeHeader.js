import React from "react";
import {
    HashRouter,
    Route,
    Routes,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';

const HomeHeader = () => {
    return (
        <section className="header">
            <div className="header_left">

            </div>
            <div className="header_right">
                <div className="header_logs">
                    <Link to='/logowanie' className="header_logs_login">Zaloguj</Link>
                    <Link to='/rejestracja' className="header_logs_register">Załóż konto</Link>
                </div>
                <div className="header_options">
                    <a href="#start" className="header_option start">Start</a>
                    <a href="#about" className="header_option about">O co chodzi?</a>
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
                    <Link to='/logowanie' className="header_action">Oddaj rzeczy</Link>
                    <Link to='/logowanie' className="header_action">Zorganizuj zbiórkę</Link>
                </div>
            </div>
        </section>
    )
}

export default HomeHeader;