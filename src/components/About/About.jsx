import React from 'react'
import {Link} from "react-router-dom";
import Footer from '../Footer/Footer';

// Icons
import { FaBeer } from 'react-icons/fa';


const About = () => {
    return (
        <div className="App">
            <header className="App-header">
                <h1>About Rate My Beer <FaBeer/></h1>
                <div className="content">
                    <h3>Crew Behind</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus beatae maxime architecto asperiores maiores tempore repudiandae, repellat obcaecati! </p>
                    <h3>History</h3>
                    <p>Saepe sequi sunt recusandae deleniti accusamus nostrum. taque minus dolore aperiam, repellat quisquam, omnis quo ipsa necessitatibus? Perferendis quo ipsam illo ducimus.</p>
                </div>
                <Link to={'/'} className="btn">Rate My Beer</Link>
                <Link to={'/beergarden'} className="btn">Beergarden</Link>
            </header>
            <Footer/>
        </div>
    )
}

export default About
