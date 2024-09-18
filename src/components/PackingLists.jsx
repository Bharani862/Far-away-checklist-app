/* eslint-disable react/prop-types */
import { useState } from "react";
import Item from "./Item";

const PackingLists = ({ packingsItems, onDeleteItems, onToggleItems }) => {
  // console.log("PackingLists");

  const [sortBy, setSortBy] = useState("input");
  let sortedItems = [];

  if (sortBy === "input") sortedItems = packingsItems;

  if (sortBy === "description")
    sortedItems = packingsItems
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));


      if(sortBy === "packed") sortedItems = packingsItems.slice().sort((a,b) => Number(a.packed) - Number(b.packed))
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => {
          return (
            <Item
              item={item}
              key={item.id}
              onDeleteItems={onDeleteItems}
              onToggleItems={onToggleItems}
            />
          );
        })}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description </option>
          <option value="packed">Sort by packed status </option>
        </select>
      </div>
    </div>
  );
};

export default PackingLists;
