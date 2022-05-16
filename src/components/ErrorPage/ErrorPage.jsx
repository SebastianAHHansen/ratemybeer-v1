import React from 'react'
import {Link} from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="App">
        <header className="App-header">
            <h1>404 Error page! </h1>
            <Link to={'/'} className="btn">Take me back!</Link>
            </header>
        </div>
    )
}

export default ErrorPage

