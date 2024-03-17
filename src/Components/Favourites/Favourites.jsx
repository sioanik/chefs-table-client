import PropTypes from 'prop-types'; // ES6

import Favourite from "./Favourite";

const Favourites = ({fav, handleRemoveFromFav}) => {


    // console.log(fav);
    return (
        <div className="mb-5">
            <h3 className="text-2xl font-semibold">Want to cook: {fav.length}</h3>
            <div className="overflow-x-auto">
                <table className="table-xs md:table lg:table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {/* row 1 */}

                        {
                            fav.map((singleItem, index) => <Favourite key={index} index={index} singleItem={singleItem} handleRemoveFromFav={handleRemoveFromFav}></Favourite>)
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
        
    );
};

Favourites.propTypes = {
    fav: PropTypes.array,
    handleRemoveFromFav: PropTypes.func,
}

export default Favourites;