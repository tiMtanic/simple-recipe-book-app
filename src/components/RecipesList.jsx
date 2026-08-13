import RecipeCard from './RecipeCard'


const RecipesList = ({recipes, setRecipes}) => {
    const handleDeleteRecipe = (id) => {
        console.log("clicked")
        setRecipes(recipes.filter((recipe) => {
            return recipe.id !== id
        }))
    }

    return (
        <div className="recipes-list">
            {recipes?.map((recipe) => {
              return  <RecipeCard key={recipe.id} recipe={recipe} handleDeleteRecipe={handleDeleteRecipe}/>
            })
            }
        </div>
    )
}

export default RecipesList