/* eslint-disable react/prop-types */
const Item = ({ item, onDeleteItems, onToggleItems }) => {
  function deleteItems(id) {
    onDeleteItems(id);
  }

  return (
    <li>
      <input
        type="checkbox"
        checked={item.packed}
        onChange={() => onToggleItems(item.id)}
      />
      <span
        style={
          item.packed
            ? {
                textDecoration: "line-through",
              }
            : {}
        }
      >
        {item.quantity} {item.description}
      </span>
      <button onClick={() => deleteItems(item.id)}>❌</button>
    </li>
  );
};

export default Item;
