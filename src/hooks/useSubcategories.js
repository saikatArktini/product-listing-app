import { useState, useEffect } from "react";
import { getSubcategories } from "../client-services/subcategory.service";

export default function useSubcategories(categoryId) {
  const [subcategories, setSubcategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!categoryId) {
      setSubcategories([]);
      return;
    }

    async function fetchSubcategories() {
      try {
        setLoading(true);
        const data = await getSubcategories(categoryId);
        setSubcategories(data || []);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchSubcategories();
  }, [categoryId]);

  return { subcategories, loading };
}