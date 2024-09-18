import { useState } from "react";
import Form from "./components/Form";
import Logo from "./components/Logo";
import PackingLists from "./components/PackingLists";
import Stats from "./components/Stats";

const App = () => {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggle(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingLists
        packingsItems={items}
        onToggleItems={handleToggle}
        onDeleteItems={handleDeleteItems}
      />
      <Stats items={items} />
    </div>
  );
};

export default App;
