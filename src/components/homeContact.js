import React, { useState, useEffect } from "react";

const HomeContact = () => {
    const [mailMsg, setMailMsg] = useState("");
    const [nameMsg, setNameMsg] = useState("");
    const [messegeMsg, setMessegeMsg] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [messege, setMessege] = useState("");
    const [btnClass, setBtnClass] = useState("");
    const [sentMessege, setSentMessege] = useState ("");
    const url = "https://fer-api.coderslab.pl/v1/portfolio/contact";
    const emailRule = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{1,})$/i;


    const postData = (e) => {
        e.preventDefault();
        const data = {
            name: name,
            email: email,
            messege: messege
        };

        fetch("https://fer-api.coderslab.pl/v1/portfolio/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(() => {
                console.log('success');
                setSentMessege("Wiadomość została wysłana!");
                setEmail("");
                setName("");
                setMessege("");
            })
            .catch(() => setSentMessege("Coś poszło nie tak, spróbuj ponownie"));
    }


    useEffect(() => {
        if (email.length > 0) {
            if (emailRule.test(email) === false) {
                setMailMsg('Niepoprawny format');
            } else if (email.length === 0) {
                setMailMsg('To pole nie może być puste');
            } else {
                setMailMsg('');
            }
        }
    }, [email]);

    useEffect(() => {
        if (messege.length > 0) {
            if (messege.length < 120) {
                setMessegeMsg('Wiadomość musi mieć minimum 120 znaków');
            } else {
                setMessegeMsg("");
            }
        }
    }, [messege]);

    useEffect(() => {
        if (name.includes(" ")) {
            setNameMsg('Podane imię jest nieprawidłowe');
        } else if (name.includes(" ") === false) {
            setMessegeMsg("");
        } else if (name.length === 0) {
            setMessegeMsg("");
        }
    }, [name]);

    useEffect(() => {
        if (!name.includes(" ") && emailRule.test(email) && messege.length >= 120) {
            setBtnClass("")
        } else {
            setBtnClass("err");
        }
    }, [name, email, messege]);


    return (
        <section id="contact" className="homeContact">
            <div className="layer">
                <div className="homeContact_form">
                    <h1 className="homeContact_form_quote">Skontaktuj się z nami</h1>
                    <div className="homeContact_form_decoration" />
                    <p className="messege_sent">{sentMessege}</p>
                    <form className="homeContact_form_form">
                        <div className="form_data">
                            <div className="data_name">
                                <label>Wpisz swoje imię</label>
                                <input type="text" onChange={(e) => setName(e.target.value)} />
                                <p className="error">{nameMsg}</p>
                            </div>
                            <div className="data_mail">
                                <label>Wpisz swój email</label>
                                <input type="email" onChange={(e) => setEmail(e.target.value)} />
                                <p className="error">{mailMsg}</p>
                            </div>
                        </div>
                        <div className="form_messege">
                            <label>Wpisz swoją wiadomość</label>
                            <textarea rows="4" cols="5" wrap="hard" className="messege" onChange={(e) => setMessege(e.target.value)} />
                            <p className="error">{messegeMsg}</p>
                        </div>
                        <button type="button" className={btnClass} onClick={postData}>Wyślij</button>
                    </form>
                </div>
                <footer className="homeContact_footer">
                    <p className="homeContact_footer_copyright">Copyright by Coders Lab</p>
                    <div className="homeContacy_footer_socials">
                        <a href="https://www.facebook.com/" target="_blank" className="socials socials_facebook" />
                        <a href="https://www.instagram.com/" target="_blank" className="socials socials_instagram" />
                    </div>
                </footer>
            </div>
        </section>
    );
}

export default HomeContact;