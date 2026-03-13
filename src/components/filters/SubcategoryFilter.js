"use client";

import Select from "../ui/Select";
import useSubcategories from "../../hooks/useSubcategories";

export default function SubcategoryFilter({
  categoryId,
  value,
  onChange,
}) {
  const { subcategories, loading } = useSubcategories(categoryId);

  if (!categoryId) {
    return null;
  }

  if (loading) {
    return <p className="text-sm text-gray-500">Loading subcategories...</p>;
  }

  return (
    <div className="w-full md:w-64">
      <Select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        options={subcategories}
        placeholder="Select Subcategory"
      />
    </div>
  );
}