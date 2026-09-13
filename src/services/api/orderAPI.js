import apiClient from './apiClient';
import { mockOrders } from '../../data/mockOrders';

// Order API calls
export const orderAPI = {
  // Get user orders
  getUserOrders: async (userId) => {
    try {
      // Later: GET /users/:id/orders
      const userOrders = mockOrders.filter((o) => o.userId === userId);
      return Promise.resolve(userOrders);
    } catch (error) {
      console.error('Error fetching orders:', error);
      throw error;
    }
  },

  // Get order details
  getOrderDetails: async (orderId) => {
    try {
      // Later: GET /orders/:id
      const order = mockOrders.find((o) => o.id === orderId);
      return Promise.resolve(order);
    } catch (error) {
      console.error('Error fetching order details:', error);
      throw error;
    }
  },

  // Create order
  createOrder: async (orderData) => {
    try {
      // Later: POST /orders
      const newOrder = {
        id: 'ORD' + Date.now(),
        ...orderData,
        date: new Date().toISOString().split('T')[0],
        status: 'processing',
        paymentStatus: 'pending',
      };
      return Promise.resolve(newOrder);
    } catch (error) {
      console.error('Error creating order:', error);
      throw error;
    }
  },
};
