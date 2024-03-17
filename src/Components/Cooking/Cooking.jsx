import PropTypes from 'prop-types'; // ES6

const Cooking = ({ singleItem, index }) => {
    // console.log(singleItem);
    return (
        <tr className="bg-base-200">
            <th>{index + 1}</th>
            <td>{singleItem.recipe_name}</td>
            <td>{singleItem.preparing_time}</td>
            <td>{singleItem.calories}</td>
        </tr>
        
    );
};

Cooking.propTypes = {
    singleItem: PropTypes.object,
    index: PropTypes.number


}


export default Cooking;