import { useEffect } from "react";
import { useState } from "react";
import Recipe from "./Recipe";
import PropTypes from "prop-types";


const Recipes = ({handleClickToCook}) => {
    const [recipes, setRecipes] =useState([]);

    useEffect(()=>{
        fetch('fakeData.json')
        .then(res => res.json())
        .then(data=> setRecipes(data));
    },[])
    return (
        <div className="md:w-2/3 grid lg:grid-cols-2 gap-4 m-4">
           
           {
            recipes.map(recipe => <Recipe handleClickToCook={handleClickToCook}
                key={recipe.id}
                 recipe={recipe} >
                 </Recipe> )
                    
            
           }

            
        </div>
    );
};
Recipes.propTypes={
    handleClickToCook: PropTypes.func
}
export default Recipes;