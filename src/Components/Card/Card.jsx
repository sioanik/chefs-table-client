import PropTypes from 'prop-types'; // ES6

import { CiClock2 } from "react-icons/ci";
import { AiOutlineFire } from "react-icons/ai";
const Card = ({item, handleWantToCook}) => {
    // console.log(item);
    return (
        <div>
            <div className="card border card-compact bg-base-100 shadow-xl">
                <figure className="p-6"><img className="h-48 w-80 object-cover rounded-2xl" src={item.recipe_image} alt="recipes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{item.recipe_name}</h2>
                    <p>{item.short_description}</p>
                    <p className="font-medium">Ingredients: {item.ingredients.length}</p>
                    <ul className="list-disc text-zinc-400 pl-8" >
                        {
                            item.ingredients.map((ingredient, index) => <li
                            key={index}
                            > {ingredient}</li>) 
                        }
                    </ul>
                    <div className="flex text-zinc-500 font-medium py-4">
                        <p className="flex gap-2 items-center"><CiClock2 />{item.preparing_time}</p>
                        <p className="flex gap-2 items-center"><AiOutlineFire />{item.calories}</p>
                    </div>


                    <div className="card-actions justify-start">
                        <button onClick={()=>handleWantToCook(item)} className="btn bg-green-400 rounded-3xl">Want to Cook</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    item: PropTypes.object,
    handleWantToCook: PropTypes.func
}

export default Card;