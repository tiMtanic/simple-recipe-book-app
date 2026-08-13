import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Routes, Route } from "react-router-dom";
import RecipesListPage from "./pages/RecipesListPage";
import RecipeDetailsPage from "./pages/RecipeDetailsPage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";

import allRecipes from "./assets/data/recipes.json"
import { useState } from "react";


function App() {
  let [recipes, setRecipes] = useState(allRecipes)

  return (
    <div id="main-container">
      <Navbar />
      <div className="container">
        <Sidebar />
        <div id="main-content-container">
          <Routes>
            <Route path="/" element={<RecipesListPage recipes={recipes} setRecipes={setRecipes} />} />
            <Route path="/recipe/:recipeId" element={<RecipeDetailsPage recipes={recipes} />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
