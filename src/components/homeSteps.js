import React from "react";
import {
    HashRouter,
    Route,
    Routes,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';


const HomeSteps = () => {
    return (
        <section className='homeSteps' id='about'>
            <div className='homeSteps_quote'>
                <p>Wystarczą 4 proste kroki</p>
                <div className="header_decoration"></div>
            </div>
            <div className='homeSteps_steps'>
                <div className='homeSteps_step'>
                    <span className='homeSteps_img img_one'></span>
                    <p className='step'>Wybierz rzeczy</p>
                    <span className='line'></span>
                    <p className='desc'>ubrania, zabawki, sprzęt i inne</p>
                </div>
                <div className='homeSteps_step'>
                    <span className='homeSteps_img img_two'></span>
                    <p className='step'>Spakuj je</p>
                    <span className='line'></span>
                    <p className='desc'>skorzystaj z <br /> worków na śmieci</p>
                </div>
                <div className='homeSteps_step'>
                    <span className='homeSteps_img img_three'></span>
                    <p className='step'>Zdecyduj komu chcesz pomóc</p>
                    <span className='line'></span>
                    <p className='desc'>Zwybierz zaufane miejsce</p>
                </div>
                <div className='homeSteps_step'>
                    <span className='homeSteps_img img_four'></span>
                    <p className='step'>Zamów kuriera</p>
                    <span className='line'></span>
                    <p className='desc'>kurier przyjedzie w dogodnym terminie</p>
                </div>
            </div>
            <div className="homeSteps_btn">
                <Link to='/logowanie' className="header_action">Oddaj rzeczy</Link>
            </div>
        </section>
    );
}

export default HomeSteps;