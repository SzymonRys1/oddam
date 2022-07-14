import React, { useEffect, useState } from "react";
import {
    getFirestore,
    collection,
    onSnapshot
} from 'firebase/firestore';
import Pagination from "./pagination";

const HomeHelp = () => {
    const dataBase = getFirestore();
    const [fundations, setFundations] = useState([{ name: "Loading...", id: "initial" }]);
    const [organizations, setOrganizations] = useState([{ name: "Loading...", id: "initial" }]);
    const [donations, setDonations] = useState([{ name: "Loading...", id: "initial" }]);
    const [type, setType] = useState("fundacje");
    const [quote, setQuote] = useState("W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.");
    const [btn, setBtn] = useState("homeHelp_btn active");
    const [btn2, setBtn2] = useState("homeHelp_btn");
    const [btn3, setBtn3] = useState("homeHelp_btn");
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(3);


    useEffect(() => {
        onSnapshot(collection(dataBase, "fundacje"), (snapshot) => {
            setFundations(snapshot.docs.map((doc) => ({ ...doc.data() })))
        })
        onSnapshot(collection(dataBase, "organizacje"), (snapshot) => {
            setOrganizations(snapshot.docs.map((doc) => ({ ...doc.data() })))
        })
        onSnapshot(collection(dataBase, "zbiórki "), (snapshot) => {
            setDonations(snapshot.docs.map((doc) => ({ ...doc.data() })))
        })
    }, []);


    const changeTypeToFund = (e) => {
        e.preventDefault();
        setType("fundacje");
        setQuote("W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.");
        setBtn("homeHelp_btn active");
        setBtn2("homeHelp_btn");
        setBtn3("homeHelp_btn");
        setCurrentPage(1);
    }

    const changeTypeToOrg = (e) => {
        e.preventDefault();
        setType("organizacje");
        setQuote("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.");
        setBtn("homeHelp_btn");
        setBtn2("homeHelp_btn active");
        setBtn3("homeHelp_btn");
        setCurrentPage(1);
    }

    const changeTypeToDon = (e) => {
        e.preventDefault();
        setType("zbiórki ");
        setQuote("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
        setBtn("homeHelp_btn");
        setBtn2("homeHelp_btn");
        setBtn3("homeHelp_btn active");
        setCurrentPage(1);
    }

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const slicedFundations = fundations.slice(indexOfFirstPost, indexOfLastPost);
    const slicedOrganizations = organizations.slice(indexOfFirstPost, indexOfLastPost);
    const slicedDonations = donations.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }
    
    return (
        <section className="homeHelp" id="fundations">
            <h1>Kompu pomagamy?</h1>
            <span></span>
            <div className="homeHelp_btns">
                <button type="button" onClick={changeTypeToFund} className={btn}>Fundacjom</button>
                <button type="button" onClick={changeTypeToOrg} className={btn2}>Organizacjom <br /> pozarządowym</button>
                <button type="button" onClick={changeTypeToDon} className={btn3}>Lokalnym <br /> zbiórkom</button>
            </div>
            <p className="quote">{quote}</p>
            <div className="homeHelp_elements">
                {type === "fundacje" && slicedFundations.map(element => (
                    <div key={element.name} className="homeHelp_element">
                        <div className="homeHelp_element_left">
                            <h2 className="element_name">{element.name}</h2>
                            <p className="element_mission">{element.mission}</p>
                        </div>
                        <div className="homeHelp_element_right">
                            {element?.items?.join(", ")}
                        </div>
                    </div>
                ))}
                {type === "organizacje" && slicedOrganizations.map(element => (
                    <div key={element.name} className="homeHelp_element">
                        <div className="homeHelp_element_left">
                            <h2 className="element_name">{element.name}</h2>
                            <p className="element_mission">{element.mission}</p>
                        </div>
                        <div className="homeHelp_element_right">
                            {element?.items?.join(", ")}
                        </div>
                    </div>
                ))}
                {type === "zbiórki " && slicedDonations.map(element => (
                    <div key={element.name} className="homeHelp_element">
                        <div className="homeHelp_element_left">
                            <h2 className="element_name">{element.name}</h2>
                            <p className="element_mission">{element.mission}</p>
                        </div>
                        <div className="homeHelp_element_right">
                            {element?.items?.join(", ")}
                        </div>
                    </div>
                ))}
            </div>
            {type === "fundacje" && <Pagination
                postsPerPage={postsPerPage}
                totalPosts={fundations.length}
                paginate={paginate}
                page={currentPage} />}
            {type === "organizacje" && <Pagination
                postsPerPage={postsPerPage}
                totalPosts={organizations.length}
                paginate={paginate}
                page={currentPage} />}
            {type === "zbiórki " && <Pagination
                postsPerPage={postsPerPage}
                totalPosts={donations.length}
                paginate={paginate}
                page={currentPage} />}
        </section>
    );
}

export default HomeHelp;