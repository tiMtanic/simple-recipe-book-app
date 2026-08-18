import React, { useEffect, useState } from 'react'

function DeleteRecipeModal({recipeName, recipeImage, handleDeleteRecipe, onClose}) {
  const [startTransition, setStartTransition] = useState(false);

  useEffect(() => {
    setStartTransition(true);
    return () => setStartTransition(false);
  }, []);

  const handleConfirm = () => handleDeleteRecipe();
  const handleAbort = () => {
    console.log(onClose);
    onClose()
  };

  return (
    <>
      <div className="modal-background" style={{ opacity: startTransition ? "1.0" : "0" }}></div>
      <div className="delete-recipe-modal" style={{ opacity: startTransition ? "1.0" : "0" }}>
        <h3>Are you sure you want to delete "{recipeName}"?</h3>
        <img src={recipeImage} />
        <div className="modal-buttons-container">
          <button className="recipe-form-button" onClick={handleConfirm}>Yes</button>
          <button className="recipe-form-button" onClick={handleAbort}>No</button>
        </div>
      </div>
    </>
  )
}

export default DeleteRecipeModal