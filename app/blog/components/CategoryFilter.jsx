import { useContext } from "react";
import AppContext from "../context/AppContext";

const CategoryFilter = () => {
  const { selectedCategory, setSelectedCategory } = useContext(AppContext);
  const categories = ["All", "Fruit", "Vegetable"];

  return (
    <select
      value={selectedCategory}
      onChange={(e) => setSelectedCategory(e.target.value)}
      style={{ marginBottom: "1rem", padding: "0.5rem" }}
    >
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default CategoryFilter;
