import apiClient from './apiClient';
import { mockTransactions } from '../../data/mockTransactions';

// Transaction and Fraud Detection API calls
export const transactionAPI = {
  // Analyze transaction for fraud
  analyzeTransaction: async (transactionData) => {
    try {
      // Later: POST /transactions/analyze
      // Simulate fraud detection ML model
      return new Promise((resolve) => {
        setTimeout(() => {
          const { amount, userId, previousTransactions = [] } = transactionData;

          let riskScore = 0;
          let riskStatus = 'low';
          let reasons = [];

          if (previousTransactions.length > 0) {
            const avgAmount =
              previousTransactions.reduce((a, b) => a + b, 0) / previousTransactions.length;
            const deviation = Math.abs(amount - avgAmount) / avgAmount;

            // Amount anomaly detection
            if (deviation > 3) {
              riskScore += 60;
              reasons.push('Unusual transaction amount - significantly higher than average');
            } else if (deviation > 1.5) {
              riskScore += 30;
              reasons.push('Transaction amount higher than usual');
            }
          }

          // Device and location factors (simulated)
          riskScore += Math.random() * 20;

          riskScore = Math.min(Math.round(riskScore), 100);

          if (riskScore > 70) {
            riskStatus = 'high';
          } else if (riskScore > 40) {
            riskStatus = 'medium';
          }

          resolve({
            riskScore,
            riskStatus,
            reasons,
            requiresOTP: riskScore > 60,
            analysis: {
              amountAnomaly: riskScore > 40 ? 'HIGH' : 'LOW',
              behavioureAnomaly: riskScore > 50 ? 'MEDIUM' : 'LOW',
              deviceRisk: 'LOW',
              locationRisk: 'MEDIUM',
            },
          });
        }, 1500);
      });
    } catch (error) {
      console.error('Error analyzing transaction:', error);
      throw error;
    }
  },

  // Verify OTP for high-risk transactions
  verifyOTP: async (transactionId, otp) => {
    try {
      // Later: POST /transactions/:id/verify-otp
      // For demo, accept any 6-digit OTP
      if (otp.length === 6 && /^\d+$/.test(otp)) {
        return Promise.resolve({
          success: true,
          message: 'OTP verified successfully',
        });
      }
      return Promise.reject(new Error('Invalid OTP'));
    } catch (error) {
      console.error('Error verifying OTP:', error);
      throw error;
    }
  },

  // Send OTP
  sendOTP: async (contactInfo) => {
    try {
      // Later: POST /otp/send
      return Promise.resolve({
        success: true,
        message: 'OTP sent to your registered contact',
        otpId: 'OTP' + Date.now(),
      });
    } catch (error) {
      console.error('Error sending OTP:', error);
      throw error;
    }
  },
};
