import axios from "axios";

const API_BASE_URL = "https://fakestoreapi.com";

/**
 * Fetch all products
 */
export const fetchProducts = async () => {
  const response = await axios.get(`${API_BASE_URL}/products`);
  return response.data;
};

/**
 * Fetch single product by ID
 */
export const fetchProductById = async (id) => {
  const response = await axios.get(`${API_BASE_URL}/products/${id}`);
  return response.data;
};
