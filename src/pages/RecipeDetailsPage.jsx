import React from 'react'
import { useParams } from 'react-router-dom';

function RecipeDetailsPage({recipes}) {
  const {recipeId} = useParams();
  const recipe = recipes.find(x => x.id === recipeId);

  const getImage = () => {
      return `../src/assets/images/${recipe.image}`
  }

  return (
    <>
      <h1>{recipe.name}</h1>
      <div>
        <img src={getImage()} width="200px" />
        <p>
          <span>Calories: </span>
          {recipe.calories}
        </p>
        <p>
          <span>Servings: </span>
          {recipe.servings}
        </p>
        <p>
          <span>Category: </span>
          {recipe.category}
        </p>
        <p>
          <span>Ingredients: </span>
          {recipe.ingredients.map((ingredient, index) => <li key={index}>{ingredient}</li>)}
        </p>
      </div>
    </>
  )
}

export default RecipeDetailsPage