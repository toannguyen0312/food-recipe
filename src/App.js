import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.
  const createRecipe = (newRecipe) => 
  setRecipes((recipes) => [...recipes, newRecipe]);

  const deleteRecipe = (indexToDelete) => 
  setRecipes((recipes) => 
  recipes.filter((recipe, index) => index !== indexToDelete)
  );
  
  return (
    <div className="App">
      <header><h1 style={{fontSize: "64px", fontFamily: "Playfair Display SC", textAlign: "center"}}>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe}/>
      <RecipeCreate createRecipe={createRecipe}/>
    </div>
  );
}

export default App;
