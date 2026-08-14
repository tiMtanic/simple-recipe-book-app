import RecipesList from '../components/RecipesList'
import { Link } from 'react-router-dom'

function RecipesListPage({recipes, setRecipes}) {
  return (
    <>
      <h1>All Recipes</h1>
      <Link to="/recipes/create">
        <button> Add a new recipe </button>
      </Link>
      <RecipesList recipes={recipes} setRecipes={setRecipes} />
    </>
  )
}

export default RecipesListPage