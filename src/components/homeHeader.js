import React, {useState} from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { Link as Link1 } from 'react-router-dom';
import {Link as Link2} from 'react-scroll';
import { auth } from "../firebase";

const HomeHeader = () => {
    const [user, setUser] = useState("");

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });

    const logOutUser = async () => {
        await signOut(auth);
    }

    return (
        <section className="header">
            <div className="header_left">

            </div>
            <div className="header_right">
                <div className="header_logs">
                    {user ? <p className="header_logs_login">Witaj {user.email} !</p> : <Link1 to='/logowanie' className="header_logs_login">Zaloguj</Link1>}
                    {user ? <Link1 to='/wylogowano' className="header_logs_register" onClick={logOutUser}>Wyloguj</Link1> : <Link1 to='/rejestracja' className="header_logs_register">Załóż konto</Link1>}
                </div>
                <div className="header_options">
                    <a href="#start" className="header_option start">Start</a>
                    <Link2 to="about" spy={true} smooth={true} offset={50} duration={500} className="header_option about">O co chodzi?</Link2>
                    <Link2 to="about_us" spy={true} smooth={true} offset={50} duration={650} className="header_option about_us">O nas</Link2>
                    <Link2 to="fundations" spy={true} smooth={true} offset={50} duration={800} className="header_option foundations">Fundacje i organizacje</Link2>
                    <Link2 to="contact" spy={true} smooth={true} offset={50} duration={950}  className="header_option contact">Kontakt</Link2>
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