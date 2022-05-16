import React from 'react'
import {Link} from "react-router-dom";
import Footer from '../Footer/Footer';

// Icons
import { FaBeer } from 'react-icons/fa';
import { BiCategory } from 'react-icons/bi';
import { AiFillStar } from 'react-icons/ai';
import { FaRegMoneyBillAlt } from 'react-icons/fa';
import { BiCommentDetail } from 'react-icons/bi';

const RateMyBeer = () => {
    // Clear Input Fields
    const ClearInput = () => {
        document.getElementById("beer").value = "";
        document.getElementById("category").value = "Lager";
        document.getElementById("rating").value = "Rating";
        document.getElementById("price").value = "Price";
        document.getElementById("comment").value = "";
    }

    // Save Data in Input Fields
    const SaveBeers = () => {
        document.getElementById("beer").value = this.beer;
        document.getElementById("category").value = this.category;
        document.getElementById("rating").value = this.rating;
        document.getElementById("price").value = this.price;
        document.getElementById("comment").value = this.comment;
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1>Rate My Beer <FaBeer/></h1>
                <Link to={'/beergarden'} className="btn">Beergarden</Link>
                {/* Input Fields */}
                {/* What Beer? */}
                <h3 className="h3-header"><FaBeer/> Beer *</h3>
                <input type="text" id="beer" placeholder="What Beer did you have? *"/>

                {/* Category */}
                {/* Select Category - dropdown options */}
                <h3 className="h3-header"><BiCategory/> Category</h3>
                <div className="selectCategory">
                <select id="category" required>
                <option value="Lager">Lager</option>
                <option value="Lager">Ale</option>
                <option value="Lager">IPA, APA, DIPA</option>
                <option value="Lager">Porter</option>
                <option value="Lager">Stout</option>
                <option value="Lager">Weissbier</option>
                <option value="Lager">Sour beer</option>
                <option value="Lager">Kloster</option>
                <option value="Lager">Snusk</option>
                <option value="Lager">Other</option>
                </select>
                </div>

                {/* Rating */}
                {/* Select Rating - dropdown options */}
                <h3 className="h3-header"><AiFillStar/> Rating</h3>
                <div className="selectRating">
                <select id="rating" required>
                <option value="Rating">5</option>
                <option value="Rating">1</option>
                <option value="Rating">1.5</option>
                <option value="Rating">2</option>
                <option value="Rating">2.5</option>
                <option value="Rating">3</option>
                <option value="Rating">3.5</option>
                <option value="Rating">4</option>
                <option value="Rating">4.5</option>
                <option value="Rating">5</option>
                <option value="Rating">5.5</option>
                <option value="Rating">6</option>
                <option value="Rating">6.5</option>
                <option value="Rating">7</option>
                <option value="Rating">7.5</option>
                <option value="Rating">8</option>
                <option value="Rating">8.5</option>
                <option value="Rating">9</option>
                <option value="Rating">9.5</option>
                <option value="Rating">10</option>
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

                {/* Buttons with execution */}
                <button className="btn btn-primary" onClick={SaveBeers}> <FaBeer/> Cheers! </button>
                <button className="btn btn-primary" onClick={ClearInput}>Clear Input Forms</button>
            </header>
            <Footer/>
        </div>
    )
}

export default RateMyBeer