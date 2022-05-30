const BeerList = ({beers, title}) => {

    return ( 
<div className="beer-list">
<h3>{title}</h3>
    {beers.map((beers) => (
            <div className="beers-preview" key={beers.id}>
                <h3>{beers.id}. {beers.type}</h3>
                <h3>Category: {beers.category}</h3>
                <h3>Rating: {beers.rating}/10</h3>
                </div>
        ))}
    </div>
    );
}

export default BeerList;