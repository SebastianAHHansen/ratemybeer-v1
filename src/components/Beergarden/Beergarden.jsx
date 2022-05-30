import React from 'react'
import {Link} from "react-router-dom";
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import BeerList from '../BeerList/BeerList';
import useFetch from '../useFetch';

// Icons
import { FaBeer } from 'react-icons/fa';
import { MdOutlineManageSearch } from 'react-icons/md';
import { IoMdList } from 'react-icons/io';

const Beergarden = () => {
    const { data: beers, isPending, error } = useFetch('http://localhost:3001/beers');
    return (
        <div className="App">
            <Navbar/>
            <header className="App-header">
                    <h1>Beergarden <FaBeer/></h1>
                    {/* List all Beers in database */}
                    <h3><IoMdList/> List your saved Beers</h3>
                    <button className="btn"> <IoMdList/> List all of your saved Beers</button>

                    {/* List Beer by Category */}
                    <div className="selectCategory">
                        <h5>Or List By Category</h5>
                        <select id="category" required>
                            <option value="Lager">Lager BEERS</option>
                            <option value="Lager">Ale BEERS</option>
                            <option value="Lager">IPA, APA, DIPA BEERS</option>
                            <option value="Lager">Porter, Stout BEERS</option>
                            <option value="Lager">Weissbier</option>
                            <option value="Lager">Sour beer</option>
                            <option value="Lager">Other BEERS</option>
                        </select>
                    </div>

                    {/* Search for Beers in database */}
                    <h3 className="h3-header"><MdOutlineManageSearch/> Search Beers</h3>
                    <input type="text" id="search-beer" placeholder=" Search for Beer, Category, Rating" required/>
                    {/* <button type="submit" className="btn btn-primary"> <FaBeer/> Search Beers</button> */}

                    {/* List All Beers */}
                    <div className="beer-list">
                    { error && <div>{ error }</div> }
                    { isPending && <div>Loading Beers...</div> }
                    { beers && <BeerList beers={beers} title="All Your Saved Beers"/> }
                    </div>

            </header>   
                    <Link to={'/'} className="btn">Rate Another Beer</Link>
            <Footer/>
        </div>
    )
}


export default Beergarden