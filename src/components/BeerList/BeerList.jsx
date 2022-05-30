//Icons
import { AiFillDelete } from 'react-icons/ai';
import { FiEdit3 } from 'react-icons/fi';

const BeerList = ({beers, title}) => {

    return ( 
<div className="beer-list">
<h3>{title}</h3>
    {beers.map((beers) => (
    <div className="beers-preview" key={beers.id}>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>Beer</th>
            <th>Category</th>
            <th>Rating</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
            <tr>
                <td>{beers.id}.</td>
                <td>{beers.type}</td>
                <td>{beers.category}</td>
                <td>{beers.rating}/10</td>
                <td><a href="#"><FiEdit3/></a></td>
                <td><a href="#"><AiFillDelete/></a></td>
            </tr>
        </tbody>
      </table>
    </div>
))}
</div>
    );
}

export default BeerList;