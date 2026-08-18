import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom';

function RecipeDetailsPage({recipes}) {
  const {recipeId} = useParams();
  const recipe = recipes.find(x => x.id === recipeId);
  const [ isPrepStarted, setIsPrepStarted ] = useState(false)
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
      return `../src/assets/images/${recipe.image}`
  }

  console.log(isPrepStarted)
  const handleStartPrep = () => {
    setIsPrepStarted(!isPrepStarted)
  }

  return (
    <>
      <div className="recipe-details-container">
        <div className='recipe-details-image' style={{backgroundColor: recipeBgcolor}}>
          <img src={getImage()} className='recipe-image' width="200px"/>
        </div>
        <h1>{recipe.name}</h1>
        <div className='recipe-details-cards'>
        <div className='recipe-details-card'>
          <span> Calories: </span>
          <h2 className='italic'> {recipe.calories} </h2>
          <p>  per serving </p>
        </div>
        <div className='recipe-details-card'>
          <span>Servings: </span>
          <h2 className='italic'> {recipe.servings} </h2>
          <p> hungry humans </p>
        </div>
        <div className='recipe-details-card'>
          <span> Ingredients : </span>
          <h2 className='italic'> {recipe.ingredients.length} </h2>
          <p> nice and simple </p>
        </div>
        <div>
        </div>
        </div>
        <div className='recipe-details-buttons'>
          <div className="recipe-details-button">
            <Link to={`/recipe/${recipe.id}/edit`}>
            <p>
              <i className="fa-solid fa-pencil"></i>
            Edit Recipe 
            </p> 
            </Link>
          </div> 
          <div className="recipe-details-button">
            <Link to={`/recipe/${recipe.id}/edit`}>
            <p>
              <i className="fa-solid fa-trash"></i>
            Delete Recipe 
            </p> 
            </Link>
          </div> 
           <div className="recipe-details-button" onClick={() => handleStartPrep()}>
            <p>
              <i className="fa-solid fa-spoon"></i>
              Start Prep
            </p> 
          </div> 
        </div>
        <div className='recipe-ingredients-container'>
          <span>Ingredients: </span>
          <ul>
          {recipe.ingredients.map((ingredient, index) => 
            <div> 
              <input type='checkbox' name='ingredient' disabled={!isPrepStarted}/>
              <li key={index}>{ingredient}</li>
            </div>
          )}
          </ul>
        </div>
      </div>
    </>
  )
}

export default RecipeDetailsPage