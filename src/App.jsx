import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import RecipesList from "./components/RecipesList"

function App() {

  return (
    <div id="main-container">
      <Navbar />
      <div className="container">
        <Sidebar />
        <RecipesList/>
      </div>
        <Footer />
    </div>
  )
}

export default App
