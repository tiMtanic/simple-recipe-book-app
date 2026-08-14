import AddRecipeForm from "../components/AddRecipeForm"

const AddRecipePage = ({setRecipes}) => {
    return (
        <>
            <h1> Add Recipe </h1>
            <AddRecipeForm setRecipes={setRecipes}/>
        </>
    )
}

export default AddRecipePage