import React, { useState } from "react";

//probably going to need to pass in some props: creat handler function
function RecipeCreate({createRecipe}) {
  const initialFormState = { 
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "" 
  };
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  const [formData, setFormData] = useState({...initialFormState});

  const handleChange = ({target}) => {
    setFormData({...formData, [target.name]: target.value})
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted:", formData);
    createRecipe({...formData});
    setFormData({...initialFormState});
  }
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input name="name" id="name" type="text" value={formData.name} onChange={handleChange} placeholder="Name" required={true}/>
            </td>
            <td>
              <input name="cuisine" id="cuisine" type="text" value={formData.cuisine} onChange={handleChange} placeholder="Cuisine" required={true}/>
            </td>
            <td>
              <input name="photo" id="photo" type="text" value={formData.photo} onChange={handleChange} placeholder="URL" required={true}/>
            </td>
            <td>
              <textarea name="ingredients" id="ingredients" value={formData.ingredients} onChange={handleChange} placeholder="Ingredients" rows={3} required={true}/> 
            </td>
            <td>
              <textarea name="preparation" id="preparation" value={formData.preparation} onChange={handleChange} placeholder="Preparation" rows={3} required={true}/>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
