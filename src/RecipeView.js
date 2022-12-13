import React, {usestate} from "react";


function RecipeView ({recipe, deleteRecipe}) {
    return (
        <tr>
            <td>{recipe.name}</td>
            <td>{recipe.cuisine}</td>
            <td> <img src={recipe.photo} alt="" style={{objectFit: "scale-down", width:"100%", height: "100%"}} /> </td>
            <td className="content_td"><p>{recipe.ingredients}</p></td>
            <td className="content_td"><p>{recipe.preparation}</p></td>
            <td><button name="delete" onClick={deleteRecipe}>Delete</button></td>
        </tr>
    );
}
export default RecipeView;