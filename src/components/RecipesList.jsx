import RecipeCard from './RecipeCard'
import allRecipes from "../assets/data/recipes.json"
import { useState } from 'react'

const RecipesList = () => {

    let [recipes, setRecipes] = useState(allRecipes)

    const handleDeleteRecipe = (id) => {
        console.log("clicked")
        setRecipes(recipes.filter((recipe) => {
            return recipe.id !== id
        }))
    }


    return (
        <div className="recipes-list">
            {recipes.map((recipe) => {
              return  <RecipeCard key={recipe.id} recipe={recipe} handleDeleteRecipe={handleDeleteRecipe}/>
            })
            }
        </div>
    )
}

export default RecipesList