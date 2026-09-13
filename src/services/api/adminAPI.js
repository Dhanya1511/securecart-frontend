import apiClient from './apiClient';
import { mockFraudAlerts, mockTransactions } from '../../data/mockTransactions';
import { mockReviews } from '../../data/mockReviews';

// Admin Dashboard API calls
export const adminAPI = {
  // Get fraud dashboard statistics
  getFraudDashboardStats: async () => {
    try {
      // Later: GET /admin/fraud-stats
      return Promise.resolve({
        totalUsers: 1523,
        totalProducts: 847,
        totalTransactions: 5243,
        suspiciousTransactions: 18,
        blockedTransactions: 5,
        totalReviews: 12456,
        suspiciousReviews: 34,
        fakeReviews: 12,
      });
    } catch (error) {
      console.error('Error fetching dashboard stats:', error);
      throw error;
    }
  },

  // Get fraud alerts
  getFraudAlerts: async (filters = {}) => {
    try {
      // Later: GET /admin/fraud-alerts
      return Promise.resolve(mockFraudAlerts);
    } catch (error) {
      console.error('Error fetching fraud alerts:', error);
      throw error;
    }
  },

  // Get alert details
  getAlertDetails: async (alertId) => {
    try {
      // Later: GET /admin/alerts/:id
      const alert = mockFraudAlerts.find((a) => a.id === alertId);
      return Promise.resolve(alert);
    } catch (error) {
      console.error('Error fetching alert details:', error);
      throw error;
    }
  },

  // Update alert status
  updateAlertStatus: async (alertId, status, action) => {
    try {
      // Later: PUT /admin/alerts/:id
      return Promise.resolve({
        success: true,
        message: `Alert status updated to ${status}`,
      });
    } catch (error) {
      console.error('Error updating alert:', error);
      throw error;
    }
  },

  // Get transaction fraud details
  getTransactionDetails: async (transactionId) => {
    try {
      // Later: GET /admin/transactions/:id
      const transaction = mockTransactions.find((t) => t.id === transactionId);
      return Promise.resolve(transaction);
    } catch (error) {
      console.error('Error fetching transaction details:', error);
      throw error;
    }
  },

  // Get review fraud details
  getReviewDetails: async (reviewId) => {
    try {
      // Later: GET /admin/reviews/:id
      // Find review across all products
      for (const productId in mockReviews) {
        const review = mockReviews[productId].find((r) => r.id === reviewId);
        if (review) return Promise.resolve(review);
      }
      return Promise.reject(new Error('Review not found'));
    } catch (error) {
      console.error('Error fetching review details:', error);
      throw error;
    }
  },

  // Get analytics data
  getAnalyticsData: async (period = 'week') => {
    try {
      // Later: GET /admin/analytics?period=:period
      return Promise.resolve({
        transactionRiskDistribution: [
          { risk: 'Low', count: 4500 },
          { risk: 'Medium', count: 543 },
          { risk: 'High', count: 200 },
        ],
        reviewRiskDistribution: [
          { risk: 'Genuine', count: 11200 },
          { risk: 'Suspicious', count: 234 },
          { risk: 'Fake', count: 12 },
        ],
        fraudAlertsOverTime: [
          { date: '2026-09-06', count: 3 },
          { date: '2026-09-07', count: 5 },
          { date: '2026-09-08', count: 8 },
          { date: '2026-09-09', count: 4 },
          { date: '2026-09-10', count: 6 },
          { date: '2026-09-11', count: 7 },
          { date: '2026-09-12', count: 9 },
          { date: '2026-09-13', count: 2 },
        ],
      });
    } catch (error) {
      console.error('Error fetching analytics:', error);
      throw error;
    }
  },
};
