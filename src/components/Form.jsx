/* eslint-disable react/prop-types */
import { useState } from "react";

const Form = ({ onAddItems }) => {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    const newItem = {
      description,
      quantity,
      id: Date.now(),
      packed: false,
    };

    onAddItems(newItem);

    setDescription("");
    setQuantity(1);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip 😍?</h3>

      <select
        name="quantity"
        id="quantity"
        onChange={(e) => setQuantity(Number(e.target.value))}
        value={quantity}
      >
        {Array.from({ length: 20 }).map((data, ind) => {
          return (
            <option key={ind} value={ind + 1}>
              {ind + 1}
            </option>
          );
        })}
      </select>

      <input
        type="text"
        placeholder="Items..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button>Add</button>
    </form>
  );
};

export default Form;
