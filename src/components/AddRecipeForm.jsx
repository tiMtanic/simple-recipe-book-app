import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

const AddRecipeForm = ({recipes, setRecipes}) => {
    const { recipeId } = useParams()
    const navigate = useNavigate()
    const existingRecipe = recipes?.find((recipe) => recipe.id === recipeId)
    const [ newRecipe, setNewRecipe ] = useState( !existingRecipe ? {
        "id": crypto.randomUUID,
        "name": "",
        "calories": 0,
        "image": "",
        "servings": 1 ,
        "category": "",
        "isLowCalorie": false,
        "ingredients": []
    } : existingRecipe )

    console.log(!existingRecipe ? {
        "id": crypto.randomUUID,
        "name": "",
        "calories": 0,
        "image": "",
        "servings": 1 ,
        "category": "",
        "isLowCalorie": false,
        "ingredients": []
    } : existingRecipe)

    console.log(recipes)

  const handleInputChange = (e) => {
    setNewRecipe({...newRecipe,[e.target.name]: e.target.value })
  }
  
  const handleSubmit =(e) => {
    e.preventDefault()
    setRecipes((recipes) => [...recipes, newRecipe])
    navigate("/")
  }

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name"> Name: </label>
                <input type="text" id="name" name="name" value={newRecipe.name} value={newRecipe.name} onChange={handleInputChange}></input>
                 <label htmlFor="calories"> Calories: </label>
                <input type="text" id="calories" name="calories" value={newRecipe.calories} onChange={handleInputChange}></input>
                <label htmlFor="image"> Image: </label>
                <input type="text" id="image" name="image" value={newRecipe.image} onChange={handleInputChange}></input>
                <label htmlFor="servings"> Servings: </label>
                <input type="text" id="servings" name="servings" value={newRecipe.servings} onChange={handleInputChange}></input>
                <label htmlFor="category"> Category: </label>
                <input type="text" id="category" name="category" value={newRecipe.category} onChange={handleInputChange}></input>
                <label htmlFor="ingredients"> Ingredients: </label>
                <input type="text" id="ingredients" name="ingredients" value={newRecipe.ingredients} onChange={handleInputChange}></input>
                <button type="submit"> Add Recipe </button>
            </form>
        </div>
    )
}

export default AddRecipeForm