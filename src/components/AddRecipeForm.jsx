import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

const AddRecipeForm = ({recipes, setRecipes}) => {
    const { recipeId } = useParams()
    const navigate = useNavigate()
    
    const existingRecipe = recipes?.find(
    recipe => recipe.id === recipeId
    )

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

  const handleInputChange = (e) => {
    setNewRecipe({...newRecipe,[e.target.name]: e.target.value })
  }
  
  const handleSubmit =(e) => {
    e.preventDefault()

    const recipeToAdd = {...newRecipe, ingredients: newRecipe.ingredients.split(",")};

    if (existingRecipe) {
        // update
        const updatedRecipes = recipes.map((element) => {
            return element.id === recipeId ? recipeToAdd : element;
        });
        
        setRecipes(updatedRecipes);
    } else {
        // add
        setRecipes((recipes) => [...recipes, recipeToAdd]);
    }
    
    navigate("/");
  }

    return (
        <div className="recipe-form-container">
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
                <textarea rows={3} cols={50} type="text" id="ingredients" name="ingredients" value={newRecipe.ingredients} onChange={handleInputChange}></textarea>
                <button className="recipe-form-button " type="submit">{existingRecipe ? "Update " : "Add "}Recipe</button>
            </form>
        </div>
    )
}

export default AddRecipeForm