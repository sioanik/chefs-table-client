import PropTypes from 'prop-types'; // ES6

import { useEffect, useState } from "react";
import Card from "../Card/Card";

const Cards = ({handleWantToCook}) => {
    const [cards, setCards] = useState([])
    // console.log(cards);

    useEffect(() => {
        fetch('./recipes.json')
            .then(res => res.json())
            .then(data => setCards(data))
        // .then(data => console.log(data))

    }, [])

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            {
                cards.map((item, index) =>
                    <Card item={item}
                        handleWantToCook={handleWantToCook}
                        key={index}
                    ></Card>)
            }
        </div>
    );
};

Cards.propTypes = {
    handleWantToCook: PropTypes.func

} 

export default Cards;