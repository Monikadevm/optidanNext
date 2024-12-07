"use client";
import { useContext } from "react";
import AppContext from "../context/AppContext";

const Search = () => {
  const { searchQuery, setSearchQuery } = useContext(AppContext);

  return (
    <input
      type="text"
      placeholder="Search items..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  );
};

export default Search;
