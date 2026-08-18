import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import DeleteRecipeModal from "./DeleteRecipeModal";
import { useState } from "react";

const RecipeCard = ({ recipe, handleDeleteRecipe }) => {
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const colors = [
    "#F7C6C7", // strawberry pink
    "#F9D3A7", // peach
    "#F6E39A", // butter yellow
    "#C9E3B8", // fresh pastel green
    "#BFDDF2", // sky blue
    "#D7C2F0", // lavender
    "#F3C1DA", // candy rose
    "#BFE3D7", // mint
    "#F4D0B5", // apricot
    "#C8D2F0"  // periwinkle
  ];
    const [ recipeBgcolor ] = useState(() => {
      return colors[Math.floor(Math.random() * colors.length)]
    })

  const getImage = () => {
      return `src/assets/images/${recipe.image}`
  }

  return (
    <>
      <div className="recipe-card">
          <div className="recipe-card-image" style={{backgroundColor: recipeBgcolor}}> 
            <div className="card-actions">
            <div className="delete-button" onClick={() => setDeleteModalOpen(true)}>
                  <i className="fa-solid fa-trash"></i>
              </div> 
              <div className="edit-button">
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
      {deleteModalOpen &&
        createPortal(
          <DeleteRecipeModal
          recipeName={recipe.name}
          recipeImage={getImage(recipe.image)}
          handleDeleteRecipe={() => handleDeleteRecipe(recipe.id)}
          onClose={() => setDeleteModalOpen(false)} />,
          document.body
      )}
    </>
  );
};

export default RecipeCard;
