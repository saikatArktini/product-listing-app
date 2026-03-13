"use client";

import Select from "../ui/Select";
import useCategories from "../../hooks/useCategories";

export default function CategoryFilter({ value, onChange }) {
  const { categories, loading } = useCategories();

  if (loading) {
    return <p className="text-sm text-gray-500">Loading categories...</p>;
  }

  return (
    <div className="w-full md:w-64">
      <Select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        options={categories}
        placeholder="Select Category"
      />
    </div>
  );
}