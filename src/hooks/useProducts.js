import { useState, useEffect } from "react";
import { getProducts } from "../client-services/product.service";

export default function useProducts(params) {

  const { page, limit, search, category, subcategory } = params;

  const [products, setProducts] = useState([]);
  const [pagination, setPagination] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {

    async function fetchProducts() {
      try {
        setLoading(true);
        console.log("18", { page, limit, search, category, subcategory });
        const data = await getProducts(params);
        console.log("27", data);
       setProducts(data.products || []);
         setPagination({
          page: data.currentPage,
          totalPages: data.totalPages,
          total: data.totalCount,
        });
        
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();

  }, [page, limit, search, category, subcategory]);
 // console.log("48", { products, pagination, loading, error });
  return { products, pagination, loading, error };
}