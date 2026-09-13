import apiClient from './apiClient';
import { mockProducts } from '../../data/mockProducts';

// Product API calls
export const productAPI = {
  // Get all products with filters
  getProducts: async (filters = {}) => {
    try {
      // For now, return mock data
      // Later, this will call: GET /products
      return Promise.resolve({
        data: mockProducts,
        total: mockProducts.length,
      });
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  },

  // Get single product by ID
  getProductById: async (productId) => {
    try {
      // Later: GET /products/:id
      const product = mockProducts.find((p) => p.id === productId);
      return Promise.resolve(product);
    } catch (error) {
      console.error('Error fetching product:', error);
      throw error;
    }
  },

  // Search products
  searchProducts: async (query) => {
    try {
      // Later: GET /products/search?q=query
      const results = mockProducts.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase())
      );
      return Promise.resolve(results);
    } catch (error) {
      console.error('Error searching products:', error);
      throw error;
    }
  },

  // Get featured products
  getFeaturedProducts: async () => {
    try {
      // Later: GET /products/featured
      return Promise.resolve(mockProducts.slice(0, 4));
    } catch (error) {
      console.error('Error fetching featured products:', error);
      throw error;
    }
  },
};
