import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useState } from 'react'

import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner'
import Cards from './Components/Cards/Cards'
import Favourites from './Components/Favourites/Favourites'
import CookingCont from './Components/Cooking/CookingCont'


function App() {

  const [fav, setFav] = useState([])

  const [cooking, setCooking] = useState([])

  const handleWantToCook = (recipe) => {

    let isExist = fav.find(item => item.recipe_id == recipe.recipe_id)
    if (!isExist) {
      setFav([...fav, recipe])
    }
    else {
      toast("Already in the list!!")
    }

  }
  // console.log(fav);


  const handleRemoveFromFav = (recipe) => {
    setCooking([...cooking, recipe])
    const newFav = fav.filter(item => item.recipe_id !== recipe.recipe_id)
    setFav(newFav)


  }
  // console.log(cooking);


  return (
    <>
      <ToastContainer />
      <Navbar></Navbar>
      <Banner></Banner>

      <div className='mt-24 w-[90%] mx-auto'>
        <div className='text-center'>
          <h3 className='text-4xl font-semibold'>Our Recipes</h3>
          <p className='mt-6 mb-12'>Explore Our Diverse Collection of Delectable Recipes for Every Palate and Occasion!</p>
        </div>
        <div className='flex flex-col lg:flex-row md:flex-col gap-4 w-[90%] mx-auto'>
          <div className='w-[100%] md:w-[100%] lg:w-[60%]'>
            <Cards handleWantToCook={handleWantToCook}></Cards>
          </div>
          <div className='w-[100%] md:w-[100%] lg:w-[40%] border rounded-2xl p-5'>
            {/* {
              fav.map((item, index)=> <Favourites
              key={index}
              item={item}
              ></Favourites>)
            } */}
            <Favourites fav={fav} handleRemoveFromFav={handleRemoveFromFav}></Favourites>

            <CookingCont cooking={cooking}></CookingCont>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
