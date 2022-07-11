import React, { useState } from "react";
import { auth } from "../firebase";
import {
    HashRouter,
    Route,
    Routes,
    Link as Link1,
    Switch,
    NavLink,
} from 'react-router-dom';
import { async } from "@firebase/util";

const LogOut = () => {


    return (
        <section className="logOut">
            <div className="logOut_menu">
                <div className="logOut_logs">
                    <Link1 to='/logowanie' className="logOut_logs_login">Zaloguj</Link1>
                    <Link1 to='/rejestracja' className="logOut_logs_register">Załóż konto</Link1>
                </div>
                <div className="logOut_options">
                    <Link1 to="/" className="logOut_option start">Start</Link1>
                    <Link1 to="/" className="logOut_option about">O co chodzi?</Link1>
                    <Link1 to="/" className="logOut_option about_us">O nas</Link1>
                    <Link1 to="/" className="logOut_option foundations">Fundacje i organizacje</Link1>
                    <Link1 to="/" className="logOut_option contact">Kontakt</Link1>
                </div>
            </div>
            <div className="logOut_info">
                <h1>Wylogowanie nastąpiło <br /> pomyślnie!</h1>
                <span></span>
                <Link1 to="/" className="logOut_info_btn">Strona główna</Link1>
            </div>
        </section>
    );
}

export default LogOut;