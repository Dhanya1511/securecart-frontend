import apiClient from './apiClient';
import { mockReviews } from '../../data/mockReviews';

// Review API calls
export const reviewAPI = {
  // Get reviews for a product
  getProductReviews: async (productId) => {
    try {
      // Later: GET /products/:id/reviews
      return Promise.resolve(mockReviews[productId] || []);
    } catch (error) {
      console.error('Error fetching reviews:', error);
      throw error;
    }
  },

  // Submit a review
  submitReview: async (productId, reviewData) => {
    try {
      // Later: POST /products/:id/reviews
      const newReview = {
        id: 'REV' + Date.now(),
        productId,
        ...reviewData,
        date: new Date().toISOString().split('T')[0],
      };
      return Promise.resolve(newReview);
    } catch (error) {
      console.error('Error submitting review:', error);
      throw error;
    }
  },

  // Analyze review for fraud
  analyzeReview: async (reviewData) => {
    try {
      // Later: POST /reviews/analyze
      // Simulate ML fraud detection
      return new Promise((resolve) => {
        setTimeout(() => {
          const { rating, text, verifiedPurchase } = reviewData;
          let riskScore = Math.random() * 100;
          let fraudStatus = 'genuine';

          // Simulate analysis
          if (!verifiedPurchase) riskScore += 20;
          if (text.length < 10) riskScore += 15;
          if (rating === 1 || rating === 5) riskScore += 10;
          if (text.toUpperCase() === text) riskScore += 25; // All caps
          if ((text.match(/!/g) || []).length > 5) riskScore += 15; // Too many exclamations

          riskScore = Math.min(riskScore, 100);

          if (riskScore > 75) {
            fraudStatus = 'fake';
          } else if (riskScore > 50) {
            fraudStatus = 'suspicious';
          }

          resolve({
            riskScore: Math.round(riskScore),
            fraudStatus,
            analysis: {
              textAnalysis: { score: Math.round(Math.random() * 100), status: 'completed' },
              behaviourAnalysis: { score: Math.round(Math.random() * 100), status: 'completed' },
              purchaseVerification: { verified: verifiedPurchase, status: 'completed' },
              imageAnalysis: { score: Math.round(Math.random() * 100), status: 'completed' },
              networkAnalysis: { score: Math.round(Math.random() * 100), status: 'completed' },
            },
          });
        }, 2000);
      });
    } catch (error) {
      console.error('Error analyzing review:', error);
      throw error;
    }
  },
};
