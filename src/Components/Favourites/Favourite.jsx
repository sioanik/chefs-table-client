import PropTypes from 'prop-types'; // ES6


const Favourite = ({ singleItem, index, handleRemoveFromFav }) => {
    // console.log(singleItem);
    return (
        <tr className="bg-base-200">
            <th>{index + 1}</th>
            <td>{singleItem.recipe_name}</td>
            <td>{singleItem.preparing_time}</td>
            <td>{singleItem.calories}</td>

            <th>
                <button onClick={() => { handleRemoveFromFav(singleItem) }} className="btn bg-green-400 rounded-3xl btn-xs">Preparing</button>
            </th>
        </tr>
    );
};

Favourite.propTypes = {
    singleItem: PropTypes.object,
    index: PropTypes.number,
    handleRemoveFromFav: PropTypes.func

}


export default Favourite;