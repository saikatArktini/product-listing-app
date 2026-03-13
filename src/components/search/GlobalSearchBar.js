"use client";

import { useState, useEffect } from "react";
import Input from "../ui/Input";
import useDebounce from "../../hooks/useDebounce";

export default function GlobalSearchBar({ onSearch }) {
  const [searchValue, setSearchValue] = useState("");

  // debounce search value (500ms)
  const debouncedSearch = useDebounce(searchValue, 500);

  // trigger search when debounce finishes
  useEffect(() => {
    onSearch(debouncedSearch);
  }, [debouncedSearch, onSearch]);

  return (
    <div className="w-full mb-6 mt-6">
      <Input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Search products, categories, or descriptions..."
      />
    </div>
  );
}