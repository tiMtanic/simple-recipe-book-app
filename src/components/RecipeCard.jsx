const RecipeCard = ({ recipe, handleDeleteRecipe }) => {
  
    const getImage = () => {
        return `src/assets/images/${recipe.image}`
    }

  return (
    <div className="recipe-card">
        <div className="recipe-card-image">
           <div className="delete-button" onClick={() => handleDeleteRecipe(recipe.id)}>
                <i className="fa-solid fa-trash"></i>
            </div> 
            <img src={getImage()}/>
        </div>
      <h2> {recipe.name} </h2>
      <div className="recipe-card-details">
        <p> Calories: {recipe.calories} </p>
        <p> Servings: {recipe.servings} </p>
      </div>
    </div>
  );
};

export default RecipeCard;
