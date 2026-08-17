import AddRecipeForm from "../components/AddRecipeForm"

const EditRecipePage = ({recipes, setRecipes}) => {
    return (
        <>
         <div className="recipe-form">
        <div className="recipe-form-header">
          <div className="recipe-header-text">
            <h1> Update a recipe </h1>
            <p> Change of plans or in this case ingredients or made a mistake, lets fix it! </p>
          </div>
          <img src="../src/assets/images/cinnamon.png"/>
        </div>
            <AddRecipeForm recipes={recipes} setRecipes={setRecipes}/>
      </div>
        </>
    )
}

export default EditRecipePage