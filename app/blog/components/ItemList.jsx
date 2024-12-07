import { useContext } from "react";
import AppContext from "../context/AppContext";
import items from "../BlogData.js";

const ItemList = () => {
  const { searchQuery, selectedCategory } = useContext(AppContext);

  const filteredItems = items.filter((item) => {
    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <ul>
      {filteredItems.map((item) => (
        <li key={item.id} style={{ padding: "0.5rem 0" }}>
          {item.name} ({item.category})
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
