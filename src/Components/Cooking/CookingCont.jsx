import PropTypes from 'prop-types'; // ES6

import Cooking from "./Cooking";
import CookingTotal from "./CookingTotal";

const CookingCont = ({cooking}) => {


    // console.log(cooking);
    return (
        <div>
            <h3 className="text-2xl md:text-2xl lg:text-2xl font-semibold">Currently cooking: {cooking.length}</h3>
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
                            cooking.map((singleItem, index) =>( <Cooking key={index} index={index} singleItem={singleItem} ></Cooking>))
                        }

                        <CookingTotal cooking={cooking}></CookingTotal>
                        
                        {/* {
                            cooking.map((singleItem, index) =>( <CookingTotal key={index} singleItem={singleItem} ></CookingTotal>))
                        } */}

                    </tbody>
                </table>
            </div>
        </div>
        
    );
};

CookingCont.propTypes = {
    cooking: PropTypes.array

}

export default CookingCont;