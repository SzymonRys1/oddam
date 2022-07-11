import React, { useState, useEffect } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Link as Link1, useNavigate } from 'react-router-dom';

const LogIn = () => {
    const [logEmail, setLogEmail] = useState("");
    const [logPsw, setLogPsw] = useState("");
    const [a, setA] = useState("logIn_btns_login err");
    const [b, setB] = useState("logIn_form_email");
    const [c, setC] = useState("logIn_form_pswd")
    const [mailMsg, setMailMsg] = useState("");
    const [pswdMsg, setPswdMsg] = useState("");
    const emailRule = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{1,})$/i;
    const [generalError, setGeneralError] = useState(null)

    const navigate = useNavigate()

    useEffect(() => {
        if (emailRule.test(logEmail) && logPsw.length > 5) {
            setA("logIn_btns_login");
        } else {
            setA("logIn_btns_login err");
        }
    }, [logEmail, logPsw]);

    useEffect(() => {
        if (logEmail.length > 0) {
            if (emailRule.test(logEmail) === false) {
                setMailMsg('Niepoprawny format');
                setB("logIn_form_email invalid");
            } else if (logEmail.length === 0) {
                setMailMsg('To pole nie może być puste');
                setB("logIn_form_email");;
            } else {
                setMailMsg('');
                setB("logIn_form_email");
            }
        }
    }, [logEmail]);

    useEffect(() => {
        if (logPsw.length > 0) {
            if (logPsw.length < 6) {
                setPswdMsg('Podane hasło jest za krótkie!');
                setC("logIn_form_pswd invalid");
            } else {
                setPswdMsg('');
                setC("logIn_form_pswd");
            }
        }
    }, [logPsw]);


    const logUser = async (e) => {
        e.preventDefault()
        setGeneralError(null)
        try {
            const user = await signInWithEmailAndPassword(auth, logEmail, logPsw);
            console.log(user);
            navigate("/")
        } catch (error) {
            setGeneralError("Adres e-mail lub hasło są niepoprawne");
            setLogEmail("");
            setLogPsw("");
        }
    }

    return (
        <section className="logIn">
            <div className="logIn_menu">
                <div className="logIn_logs">
                    <Link1 to='/logowanie' className="logIn_logs_login">Zaloguj</Link1>
                    <Link1 to='/rejestracja' className="logIn_logs_register">Załóż konto</Link1>
                </div>
                <div className="logIn_options">
                    <Link1 to="/" className="logIn_option start">Start</Link1>
                    <Link1 to="/" className="logIn_option about">O co chodzi?</Link1>
                    <Link1 to="/" className="logIn_option about_us">O nas</Link1>
                    <Link1 to="/" className="logIn_option foundations">Fundacje i organizacje</Link1>
                    <Link1 to="/" className="logIn_option contact">Kontakt</Link1>
                </div>
            </div>
            <div className="logIn_box_form">
                <h1>Zaloguj się</h1>
                <span></span>
                <form onSubmit={logUser}>
                    <div className="form">
                    {generalError && <p className="log_error">{generalError}</p>}
                        <div className="logIn_form_email logIn_form">
                            <label>Email</label>
                            <input type="email" className={b}  value={logEmail} onChange={(e) => { setLogEmail(e.target.value) }} />
                            <p className="mail_err">{mailMsg}</p>
                        </div>
                        <div className="logIn_form_password logIn_form">
                            <label>Hasło</label>
                            <input type="password" className={c} value={logPsw} onChange={(e) => { setLogPsw(e.target.value) }} />
                            <p className="psw_err">{pswdMsg}</p>
                        </div>
                    </div>
                    <div className="logIn_btns">
                        <Link1 to='/rejestracja' className="logIn_btns_register">Załóż konto</Link1>
                        <button className={a} type="submit">Zaloguj się</button>
                    </div>
                </form>

            </div>
        </section>
    );
}

export default LogIn;