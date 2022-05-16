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
        document.getElementById("rating").value = "";
        document.getElementById("price").value = "";
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
                <h3 className="h3-header"><FaBeer/> Beer *</h3>
                <input type="text" id="beer" placeholder="What Beer did you have? *"/>
                <h3 className="h3-header"><BiCategory/> Category *</h3>

                {/* Select Category - dropdown options */}
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

                {/* Input Fields */}
                <h3 className="h3-header"><AiFillStar/> Rating *</h3>
                <input type="number" id="rating" min="1" max="10" pattern="[1-5]" step="0.5" placeholder="Rate the Beer 1-10 *"required/>
                <h3 className="h3-header"><FaRegMoneyBillAlt/> Price</h3>
                <input type="text" id="price" min="1" max="100" placeholder="How much did you pay for it?"/>
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

// Error Message
{/* <div className="error-msg" id="error-msg"></div> */}
