import PropTypes from 'prop-types'; // ES6

const CookingTotal = ({cooking}) => {

     
    // console.log(cooking[0].calories);
    let totalCal = 0
    let totalTime = 0
    for(const item of cooking){
        // console.log(item);


        // Total calories count
       const cal = item.calories 
       const calInNum = parseInt(cal)
    //    console.log(typeof calInNum);
       totalCal = totalCal + calInNum


       // Total time count
        const time = item.preparing_time
        const timeInNum = parseInt(time)
        // console.log(typeof timeInNum);
        totalTime = totalTime + timeInNum

    }
    // console.log(totalCal);


    return (
        <tr className="">
            <th colSpan={2}></th>
            <th>Total Time= <br /> {totalTime} minutes</th>
            <th>Total Calories= <br /> {totalCal}  Calories</th>
        </tr>
    );
};

CookingTotal.propTypes = {
    cooking: PropTypes.array
}

export default CookingTotal;