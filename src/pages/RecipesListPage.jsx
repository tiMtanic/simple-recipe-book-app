import React from 'react'
import RecipesList from '../components/RecipesList'

function RecipesListPage({recipes, setRecipes}) {
  return (
    <>
      <h1>All Recipes</h1>
      <RecipesList recipes={recipes} setRecipes={setRecipes} />
    </>
  )
}

export default RecipesListPage