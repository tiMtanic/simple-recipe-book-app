import { Link } from "react-router-dom";

const RecipeCard = ({ recipe, handleDeleteRecipe }) => {
  
    const getImage = () => {
        return `src/assets/images/${recipe.image}`
    }

  return (
    <div className="recipe-card">
        <div className="recipe-card-image">
          <div className="card-actions">
           <div className="delete-button" onClick={() => handleDeleteRecipe(recipe.id)}>
                <i className="fa-solid fa-trash"></i>
            </div> 
            <div className="edit-button" onClick={() => handleDeleteRecipe(recipe.id)}>
               <Link to={`/recipe/${recipe.id}/edit`}>
                <i className="fa-solid fa-pencil"></i>
               </Link>
            </div> 
          </div>
            <img src={getImage()}/>
        </div>
      <Link to={`/recipe/${recipe.id}`}>
        <h2> {recipe.name} </h2>
        <div className="recipe-card-details">
          <p> Calories: {recipe.calories} </p>
          <p> Servings: {recipe.servings} </p>
        </div>
      </Link>
    </div>
  );
};

export default RecipeCard;
