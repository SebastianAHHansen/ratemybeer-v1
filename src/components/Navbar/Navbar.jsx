import React from 'react'
import {Link} from "react-router-dom";
import './Navbar.css'

//Icons
import { FaBeer } from 'react-icons/fa';

const Navbar = () => {
    return (
        <div className="navbar">
            <h1>Rate My Beer <FaBeer/></h1>
                <Link to={'/'} className="btn">Rate My Beer</Link>
                <Link to={'/beergarden'} className="btn">Beergarden</Link>
                <Link to={'/About'} className="btn">About</Link>
                <hr/>
        </div>
    )
}

export default Navbar
