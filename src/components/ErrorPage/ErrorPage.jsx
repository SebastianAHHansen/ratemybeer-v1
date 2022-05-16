import React from 'react'
import {Link} from "react-router-dom";
import { FaBeer } from 'react-icons/fa';

const ErrorPage = () => {
    return (
        <div className="App">
        <h1>Rate My Beer  <FaBeer/></h1>
        <Link to={'/'} className="btn">Rate My Beer</Link>
        <Link to={'/beergarden'} className="btn">Beergarden</Link>
        <header className="App-header">
            <h1>404 Error page! </h1>
            <h3>Something went totally wrong!</h3>
            <Link to={'/'} className="btn">Take me back!</Link>
            </header>
        </div>
    )
}

export default ErrorPage

