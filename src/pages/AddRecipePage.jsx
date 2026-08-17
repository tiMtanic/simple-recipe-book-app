import AddRecipeForm from "../components/AddRecipeForm";

const AddRecipePage = ({ setRecipes }) => {
  return (
    <>
      <div className="recipe-form">
        <div className="recipe-form-header">
          <div className="recipe-header-text">
            <h1> Add a new recipe </h1>
            <p> Save delicious new recipes to your recipe box</p>
          </div>
          <img src="../src/assets/images/cinnamon.png"/>
        </div>
        <AddRecipeForm setRecipes={setRecipes} />
      </div>
    </>
  );
};

export default AddRecipePage;
