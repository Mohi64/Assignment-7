
import './App.css'
import Header from './Components/Header/Header'
import Recipes from './Components/Recipes/Recipes'
import CookCart from './Components/CookCarts/CookCart'
import { useState } from 'react'

function App() {
  const [cooks, setCooks] =useState([]);

  const handleClickToCook= cook =>{
    const isExist = cooks.find(item => item.recipe_id == cook.recipe_id);
    if(!isExist){
      // setCooks([...cooks, cook]);
      const newCooks= [...cooks, cook];
      setCooks(newCooks);
    }
    else{
      alert('Already Added')
    }
  
  }

  return (
    <>
      
      <Header></Header>
      <div className='md:flex-row lg:flex'>
      <Recipes handleClickToCook={handleClickToCook}></Recipes>
      <CookCart cooks={cooks}></CookCart>
      </div>
      
      
    </>
  )
}

export default App
