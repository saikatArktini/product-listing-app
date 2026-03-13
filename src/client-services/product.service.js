import { apiClient } from "./apiClient";

export async function getProducts(params = {}) {
  const query = new URLSearchParams(params).toString();
    console.log("5",query);
  return apiClient(`/products?${query}`);
}