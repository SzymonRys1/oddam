import React, { useState, useEffect, useRef } from "react";
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from "../firebase";
import { Link as Link1 } from 'react-router-dom';

const Register = () => {
    const [regEmail, setRegEmail] = useState("");
    const [regPsw, setRegPsw] = useState("");
    const [regPsw2, setRegPsw2] = useState("");
    const [messegeMail, setMessegeMail] = useState("");
    const [messegePswd, setMessegePswd] = useState("");
    const [messegePswd2, setMessegePswd2] = useState("");
    const [a, setA] = useState("register_btns_register err");
    const emailRule = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{1,})$/i;


    const registerUser = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, regEmail, regPsw);
            console.log(user);
        } catch (error) {
            console.error(error.messege);
        }
    }

    useEffect(() => {
        if (regEmail.length > 0) {
            if (emailRule.test(regEmail) === false) {
                setMessegeMail('Niepoprawny format');
            } else if (regEmail.length === 0) {
                setMessegeMail('To pole nie może być puste');
            } else {
                setMessegeMail('');
            }
        }
    }, [regEmail]);


    useEffect(() => {
        if (regPsw.length > 0) {
            if (regPsw.length < 6) {
                setMessegePswd('Hasło musi mieć minimum 6 znaków');
            } else {
                setMessegePswd('');
            }
        }
    }, [regPsw]);


    useEffect(() => {
        if (regPsw === regPsw2) {
            setMessegePswd2('');
        } else {
            setMessegePswd2('Hasła nie są identyczne');
        }
    }, [regPsw2]);

    useEffect(() => {
        if (emailRule.test(regEmail) && regPsw.length > 5 && regPsw === regPsw2) {
            setA("register_btns_register");
        } else {
            setA("register_btns_register err");
        }
    },[regPsw2, regPsw, regEmail]);

    return (
        <section className="register">
            <div className="register_menu">
                <div className="register_logs">
                    <Link1 to='/logowanie' className="register_logs_login">Zaloguj</Link1>
                    <Link1 to='/rejestracja' className="register_logs_register">Załóż konto</Link1>
                </div>
                <div className="register_options">
                    <Link1 to="/" className="register_option start">Start</Link1>
                    <Link1 to="/" className="register_option about">O co chodzi?</Link1>
                    <Link1 to="/" className="register_option about_us">O nas</Link1>
                    <Link1 to="/" className="register_option foundations">Fundacje i organizacje</Link1>
                    <Link1 to="/" className="register_option contact">Kontakt</Link1>
                </div>
            </div>
            <div className="register_box_form">
                <h1>Załóż konto</h1>
                <span></span>
                <form>
                    <div className="register_form_email register_form">
                        <label>Email</label>
                        <input type="email" className="register_form_email" onChange={(e) => setRegEmail(e.target.value)} />
                        <p className="mail_error">{messegeMail}</p>
                    </div>
                    <div className="register_form_password register_form">
                        <label>Hasło</label>
                        <input type="password" className="register_form_pswd" onChange={(e) => setRegPsw(e.target.value)} />
                        <p className="pswd_error">{messegePswd}</p>
                    </div>
                    <div className="register_form_password register_form_repeat_password register_form">
                        <label>Powtórz hasło</label>
                        <input type="password" className="register_form_pswd register_form_pswd2" onChange={(e) => setRegPsw2(e.target.value)} />
                        <p className="pswd2_error">{messegePswd2}</p>
                    </div>
                </form>
                <div className="register_btns">
                    <Link1 to='/' className={a} onClick={registerUser}>Załóż konto</Link1>
                    <Link1 to='/logowanie' className="register_btns_login">Zaloguj się</Link1>
                </div>
            </div>
        </section>
    );
}

export default Register;