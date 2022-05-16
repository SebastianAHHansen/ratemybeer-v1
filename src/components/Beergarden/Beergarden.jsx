import React from 'react'
import {Link} from "react-router-dom";
import Footer from '../Footer/Footer';
import BeerList from '../BeerList/BeerList';
import useFetch from '../useFetch';

// Icons
import { FaBeer } from 'react-icons/fa';
import { MdOutlineManageSearch } from 'react-icons/md';
import { IoMdList } from 'react-icons/io';



const Beergarden = () => {
    const { data: beers, isPending, error } = useFetch('http://localhost:8000');
    return (
        <div className="App">
            <header className="App-header">
                <h1>Beergarden <FaBeer/></h1>
                <Link to={'/'} className="btn">Rate My Beer</Link>

                    {/* List all Beers in database */}
                    <h3><IoMdList/> List your saved Beers</h3>
                    <button className="btn"> <IoMdList/> List all of your saved Beers</button>

                    {/* List All Beers */}
                    <div className="beer-list">
                    { error && <div>{ error }</div> }
                    { isPending && <div>Loading Beers...</div> }
                    { beers && <BeerList beers={beers} title="All Your Saved Beers"/> }
                    </div>

                    {/* Search for Beers in database */}
                    {/* <h3 className="h3-header"><MdOutlineManageSearch/> Search Beers *</h3>
                    <input type="text" id="search-beer" placeholder=" Search for Beer, Category, Rating *" required/>
                    <button type="submit" className="btn btn-primary"> <FaBeer/> Search Beers</button> */}
            </header>   
            <Footer/>
        </div>
    )
}


export default Beergarden

// let jsonFile = require("./data.json");

// const {default: fetch } = require("cross-fetch");
// async function getBeersData() {
//     //Get Data from JSON file
//     let response = await fetch("http://127.0.0.1:5500/data.json");
//     response =  await response.json();

//     //Return the JS object
//     return response;
// }

// async function btnBeersData() {
//     let data = await getBeersData();
//     document.getElementById("output").innerHTML = `<div>${data.type}</div><div>${data.category}</div><div>${data.rating}</div>`
// }
