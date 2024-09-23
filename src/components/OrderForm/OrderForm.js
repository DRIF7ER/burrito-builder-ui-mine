import { useState, propTypes } from "react";
import { Orders } from '../Orders/Orders.js'

function OrderForm(props) {
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState([]);

  function handleIngredients(e) {
    e.preventDefault();
    setIngredients([...ingredients, e.target.name])
  };

  function handleSubmit(e, aName, someIngredients) {
    if(aName === '' && someIngredients.length === 0) {
      return alert('You must enter a name and at least one ingredient!')
    } else {}
    props.addOrder(e, aName, someIngredients);
    clearInputs()
  }

  function clearInputs() {
    setName("");
    setIngredients([]);
  };

  const possibleIngredients = [
    "beans",
    "steak",
    "carnitas",
    "sofritas",
    "lettuce",
    "queso fresco",
    "pico de gallo",
    "hot sauce",
    "guacamole",
    "jalapenos",
    "cilantro",
    "sour cream",
  ];
  const ingredientButtons = possibleIngredients.map((ingredient) => {
    return (
      <button
        key={ingredient}
        name={ingredient}
        onClick={(e) => {handleIngredients(e, name, ingredients)}}
      >
        {ingredient}
      </button>
    );
  });

  return (
    <form>
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      {ingredientButtons}

      <p>Order: {ingredients.join(", ") || "Nothing selected"}</p>

      <button onClick={(e) => handleSubmit(e, name, ingredients)}>Submit Order</button>
    </form>
  );
}

export default OrderForm;
