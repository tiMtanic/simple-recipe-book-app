import RecipesList from '../components/RecipesList'
import { Link } from 'react-router-dom'

function RecipesListPage({recipes, setRecipes}) {
  return (
    <>
    <div className='recipe-page-header'>
      <div className='recipe-header-content'>
        <div className='recipe-header-text'>
          <h1> What Are You Cooking Today? </h1>
          <p> Save the recipes that you love, discover something new and save your favorites in one happy place</p>
        </div>
        <Link to="/recipes/create">
          <button className='add-recipe-button'> Add a new recipe </button>
        </Link>
      </div>
      <img src='src/assets/images/pudding.png' />
    </div>
      <RecipesList recipes={recipes} setRecipes={setRecipes} />
    </>
  )
}

export default RecipesListPage