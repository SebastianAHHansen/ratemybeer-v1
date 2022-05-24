/**
 * About Page
 */

import React from 'react'
import {Link} from "react-router-dom";
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const About = () => {
    return (
        <div className="App">
            <Navbar/>
            <header className="App-header">
            <h1>About & Contact</h1>
                <div className="content">
                    <h3>Story Behind</h3>
                    <p>I'm Sebastian, the creator of Rate My Beer. I've always wanted a simple app to be able to save the beer I've been drinking. <br/><br/> In step with studies in Front End Development, Rate My Beer became reality. Enjoy!</p>
                    <h3>Contact</h3>
                    <p>Feel free to hit me up with your thoughts and/or ideas what Rate My Beer lacks, or how you use the Rate My Beer app.</p>
                    <p>Cheers, <br/> Sebastian </p>
                    <a href="mailto: ratemybeer@gmail.com">ratemybeer@gmail.com</a>
                </div>
            </header>
                <Link to={'/'} className="btn">Rate My Beer</Link>
                <Link to={'/beergarden'} className="btn">Beergarden</Link>
            <Footer/>
        </div>
    )
}

export default About
