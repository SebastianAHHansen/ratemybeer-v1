/**
 * Footer
 */

import React from 'react'
import {Link} from "react-router-dom";
import './Footer.css'

// Icons
import { FaBeer } from 'react-icons/fa';
import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { BsMessenger } from 'react-icons/bs';

const Footer = () => {
    return (
        <div className="footer">
            <hr/>
            <h2>Rate My Beer <FaBeer/></h2>
            <ul className="footer-links">
                <li><Link to={'/'}>Rate My Beer</Link></li>
                <li><Link to={'/Beergarden'}>Beergarden</Link></li>
            </ul>
            <ul className="footer-links"> About
                <li>
                    <Link to={'/About'}>About Rate My Beer</Link>
                </li>
            </ul>
            <ul className="footer-links"> Contact
                <li><a href="https://messenger.com" target="_blank"><BsMessenger/> Contact Us</a></li>
            </ul>
            <ul className="footer-links">Social Media
                <li><a href="https://facebook.com" target="_blank"><BsFacebook/> Facebook</a></li>
                <li><a href="https://instagram.com" target="_blank"> <BsInstagram/> Instagram</a></li>
                <li><a href="https://github.com" target="_blank"><BsGithub/> GitHub</a></li>
            </ul>
            <p>Created by RateMyBeer 2022</p>
        </div>
    )
}

export default Footer
