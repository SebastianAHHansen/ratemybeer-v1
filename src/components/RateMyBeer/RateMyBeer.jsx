/**
* Rate My Beer, Homepage
*/

import React from 'react'
import {Link} from "react-router-dom";
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

// Icons
import { FaBeer } from 'react-icons/fa';
import { BiCategory } from 'react-icons/bi';
import { AiFillStar } from 'react-icons/ai';
import { FaRegMoneyBillAlt } from 'react-icons/fa';
import { BiCommentDetail } from 'react-icons/bi';

const RateMyBeer = () => {
    // Save Data from Input Fields to Database
    function SaveBeers() {

        // Validation Input Field
        const beer = document.getElementById('beer')
        const rating = document.getElementById('rating')
        const category = document.getElementById('category')
        const form = document.getElementById('form')
        const errorElement = document.GetElementById('error')
    
        form.addEventListener('submit', (e) => {
            let messages = []
            if (beer.value === '' || beer.value == null) {
                messages.push('Type a Beer to rate!')
            }
            if (rating.value === '' || rating.value == null) {
                messages.push('Give the Beer a rating!')
            }
            if (category.value === '' || category.value == null) {
                messages.push('Select a category for the Beer!')
            }
    
            if (messages.length > 0) {
                e.preventDefault()
                errorElement.innerText = messages.join(', ')
            }
            console.log('Great Success!')
        })
    } 

    // Clear Input Fields
    const ClearInput = () => {
        document.getElementById("beer").value = "";
        document.getElementById("category").value = "Lager";
        document.getElementById("rating").value = "Rating";
        document.getElementById("price").value = "Price";
        document.getElementById("comment").value = "";
    }
    

    return (
        <div className="App">
            <Navbar />         
            <header className="App-header">
            <h1>Rate My Beer <FaBeer/></h1>
                {/* Error Message if Validation goes wrong */}
                <div id="error"></div>

                {/* Input Fields */}
                {/* What Beer? */}
                <form id="form" action="/" method="GET">
                <h3 className="h3-header"><FaBeer/> Beer *</h3>
                <input type="text" id="beer" placeholder="What Beer did you have? *"/>

                {/* Category */}
                {/* Select Category - dropdown options */}
                <h3 className="h3-header"><BiCategory/> Category</h3>
                <div className="selectCategory">
                <select id="category">
                <option value="Lager">Lager</option>
                <option value="Lager">Ale</option>
                <option value="Lager">IPA, APA, DIPA</option>
                <option value="Lager">Porter</option>
                <option value="Lager">Stout</option>
                <option value="Lager">Weissbier</option>
                <option value="Lager">Sour beer</option>
                <option value="Lager">Other</option>
                </select>
                </div>

                {/* Rating */}
                {/* Select Rating - dropdown options */}
                <h3 className="h3-header"><AiFillStar/> Rating</h3>
                <div className="selectRating">
                <select id="rating">
                <option value="Rating">5</option>
                <option value="Rating">10</option>
                <option value="Rating">9.5</option>
                <option value="Rating">9</option>
                <option value="Rating">8.5</option>
                <option value="Rating">8</option>
                <option value="Rating">7.5</option>
                <option value="Rating">7</option>
                <option value="Rating">6.5</option>
                <option value="Rating">6</option>
                <option value="Rating">5.5</option>
                <option value="Rating">5</option>
                <option value="Rating">4.5</option>
                <option value="Rating">4</option>
                <option value="Rating">3.5</option>
                <option value="Rating">3</option>
                <option value="Rating">2.5</option>
                <option value="Rating">2</option>
                <option value="Rating">1.5</option>
                <option value="Rating">1</option>
                </select>
                </div>

                {/* Price */}
                {/* Select Price - dropdown options */}
                <h3 className="h3-header"><FaRegMoneyBillAlt/> Price</h3>
                <div className="selectPrice">
                <select id="price" required>
                <option value="Price">Between 15SEK & 30SEK </option>
                <option value="Price">Less Than 15SEK </option>
                <option value="Price">More Than 30SEK</option>
                <option value="Price">Don't know</option>
                </select>
                </div>

                {/* Other Comments */}
                <h3 className="h3-header"><BiCommentDetail/> Other Comments</h3>
                <input type="text" id="comment" placeholder="Other Comments about the Beer"/>
                <br/>
                <button id="submit" className="btn" onClick={SaveBeers}> <FaBeer/> Cheers! </button>
                </form>
            </header>
                {/* Buttons with execution */}
                <button className="btn" onClick={ClearInput}>Save More Beers</button>
                <Link to={'/beergarden'} className="btn">Beergarden</Link>
            <Footer/>
        </div>
    )
}

export default RateMyBeer