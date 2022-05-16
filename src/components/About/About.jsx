import React from 'react'
import {Link} from "react-router-dom";
import Footer from '../Footer/Footer';

// Icons
import { FaBeer } from 'react-icons/fa';


const About = () => {
    return (
        <div className="App">
                <h1>About Rate My Beer <FaBeer/></h1>
                <Link to={'/'} className="btn">Rate My Beer</Link>
                <Link to={'/beergarden'} className="btn">Beergarden</Link>
            <header className="App-header">
                <div className="content">
                    <h3>Story Behind</h3>
                    <p>I'm Sebastian, the creator of Rate My Beer. I've always wanted a simple app to be able to save the beer I've been drinking. <br/><br/> In step with studies in Front End Development, Rate My Beer became reality. Enjoy!</p>
                    <h3>Contact</h3>
                    <p>Feel free to hit me up with your thoughts and/or ideas what Rate My Beer lacks, or how you use the Rate My Beer app.</p>
                    <p>Cheers, <br/> Sebastian </p>
                    <a href="#">ratemybeer@gmail.com</a>
                </div>
            </header>
                <Link to={'/'} className="btn">Rate My Beer</Link>
                <Link to={'/beergarden'} className="btn">Beergarden</Link>
            <Footer/>
        </div>
    )
}

export default About
