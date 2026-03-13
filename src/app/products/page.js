"use client";

import { useState } from "react";

import Container from "../../components/layout/Container";
import Navbar from "../../components/layout/Navbar";

import GlobalSearchBar from "../../components/search/GlobalSearchBar";

import CategoryFilter from "../../components/filters/CategoryFilter";
import SubcategoryFilter from "../../components/filters/SubcategoryFilter";

import ProductGrid from "../../components/products/ProductGrid";

import Pagination from "../../components/pagination/Pagination";

import useProducts from "../../hooks/useProducts";

export default  function ProductsPage() {

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");
  const [page, setPage] = useState(1);

  const { products, pagination, loading } = useProducts({
    page,
    limit: 2,
    search,
    category,
    subcategory,
  });
  console.log("44", { products, pagination, loading });
  return (
    <>
      {/* <Navbar /> */}

      <Container>

        {/* Search Bar */}
        <GlobalSearchBar onSearch={setSearch} />

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">

          <CategoryFilter
            value={category}
            onChange={(value) => {
              setCategory(value);
              setSubcategory("");
              setPage(1);
            }}
          />

          <SubcategoryFilter
            categoryId={category}
            value={subcategory}
            onChange={(value) => {
              setSubcategory(value);
              setPage(1);
            }}
          />

        </div>

        {/* Product Grid */}
        <ProductGrid
          products={products}
          loading={loading}
        />

        {/* Pagination */}
        <Pagination
          currentPage={pagination?.page || 1}
          totalPages={pagination?.totalPages || 1}
          onPageChange={setPage}
        />

      </Container>
    </>
    //<div></div>
  );
}