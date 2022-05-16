const BeerList = ({beers, title}) => {

    return ( 
<div className="beer-list">
<h3>{title}</h3>
    {beers.map((beer) => (
            <div className="beers-preview" key={beers.id}>
                <h3>{beer.id}. {beer.type}</h3>
                <h3>Category: {beer.category}</h3>
                <h3>Rating: {beer.rating}/5</h3>
                <button className="btn btn-primary">See More</button>
                <p>Price: {beer.price}</p>
                <p>Comments: {beer.comment}</p> <br/>
                </div>
        ))}
    </div>
);
}
 
export default BeerList;