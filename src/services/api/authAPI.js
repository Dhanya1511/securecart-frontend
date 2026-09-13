import apiClient from './apiClient';
import { mockCurrentUser, mockUsers } from '../../data/mockUsers';

// Authentication and User API calls
export const authAPI = {
  // Login user
  loginUser: async (email, password) => {
    try {
      // Later: POST /auth/login
      // For demo, check against mock users
      const user = mockUsers.find((u) => u.email === email);
      if (user) {
        localStorage.setItem('authToken', 'demo-token-' + user.id);
        localStorage.setItem('currentUser', JSON.stringify(user));
        return Promise.resolve({ user, token: 'demo-token-' + user.id });
      }
      return Promise.reject(new Error('Invalid credentials'));
    } catch (error) {
      console.error('Error logging in:', error);
      throw error;
    }
  },

  // Register new user
  registerUser: async (userData) => {
    try {
      // Later: POST /auth/register
      const newUser = {
        id: 'U' + Date.now(),
        ...userData,
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${userData.name}`,
        accountAge: 0,
        totalOrders: 0,
        totalReviews: 0,
        verifiedPurchases: 0,
        trustScore: 75,
        isVerified: false,
        joinDate: new Date().toISOString().split('T')[0],
      };
      localStorage.setItem('authToken', 'demo-token-' + newUser.id);
      localStorage.setItem('currentUser', JSON.stringify(newUser));
      return Promise.resolve({ user: newUser, token: 'demo-token-' + newUser.id });
    } catch (error) {
      console.error('Error registering user:', error);
      throw error;
    }
  },

  // Logout user
  logoutUser: async () => {
    try {
      // Later: POST /auth/logout
      localStorage.removeItem('authToken');
      localStorage.removeItem('currentUser');
      return Promise.resolve({ success: true });
    } catch (error) {
      console.error('Error logging out:', error);
      throw error;
    }
  },

  // Get current user
  getCurrentUser: async () => {
    try {
      // Later: GET /auth/me
      const storedUser = localStorage.getItem('currentUser');
      if (storedUser) {
        return Promise.resolve(JSON.parse(storedUser));
      }
      return Promise.resolve(mockCurrentUser);
    } catch (error) {
      console.error('Error fetching current user:', error);
      throw error;
    }
  },
};

// User Profile API calls
export const userAPI = {
  // Get user profile
  getUserProfile: async (userId) => {
    try {
      // Later: GET /users/:id/profile
      const user = mockUsers.find((u) => u.id === userId);
      return Promise.resolve(user);
    } catch (error) {
      console.error('Error fetching user profile:', error);
      throw error;
    }
  },

  // Update user profile
  updateUserProfile: async (userId, profileData) => {
    try {
      // Later: PUT /users/:id/profile
      return Promise.resolve({ success: true, user: profileData });
    } catch (error) {
      console.error('Error updating user profile:', error);
      throw error;
    }
  },
};
