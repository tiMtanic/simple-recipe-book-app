import AddRecipeForm from "../components/AddRecipeForm"

const EditRecipePage = ({recipes, setRecipes}) => {
    return (
        <>
            <h1> Add Recipe </h1>
            <AddRecipeForm recipes={recipes} setRecipes={setRecipes}/>
        </>
    )
}

export default EditRecipePage