import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import MainLayout from './layouts/MainLayout';
import ProtectedRoute from './layouts/ProtectedRoute';
import { useAuth } from './hooks';

// Pages
import HomePage from './pages/customer/HomePage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import ProductListingPage from './pages/customer/ProductListingPage';
import ProductDetailsPage from './pages/customer/ProductDetailsPage';
import CartPage from './pages/customer/CartPage';
import CheckoutPage from './pages/customer/CheckoutPage';
import OrdersPage from './pages/customer/OrdersPage';
import ProfilePage from './pages/customer/ProfilePage';
import WriteReviewPage from './pages/customer/WriteReviewPage';

// Admin Pages
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminFraudAlerts from './pages/admin/AdminFraudAlerts';
import AdminTransactionDetails from './pages/admin/AdminTransactionDetails';
import AdminReviewDetails from './pages/admin/AdminReviewDetails';

const App = () => {
  return (
    <Router>
      <Toaster position="bottom-right" />
      <Routes>
        {/* Auth Routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Customer Routes */}
        <Route
          path="/"
          element={
            <MainLayout>
              <HomePage />
            </MainLayout>
          }
        />
        <Route
          path="/products"
          element={
            <MainLayout>
              <ProductListingPage />
            </MainLayout>
          }
        />
        <Route
          path="/products/:id"
          element={
            <MainLayout>
              <ProductDetailsPage />
            </MainLayout>
          }
        />
        <Route
          path="/cart"
          element={
            <MainLayout>
              <CartPage />
            </MainLayout>
          }
        />
        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <MainLayout>
                <CheckoutPage />
              </MainLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/orders"
          element={
            <ProtectedRoute>
              <MainLayout>
                <OrdersPage />
              </MainLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <MainLayout>
                <ProfilePage />
              </MainLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/write-review/:productId"
          element={
            <ProtectedRoute>
              <MainLayout>
                <WriteReviewPage />
              </MainLayout>
            </ProtectedRoute>
          }
        />

        {/* Admin Routes */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/fraud-alerts" element={<AdminFraudAlerts />} />
        <Route path="/admin/transaction/:id" element={<AdminTransactionDetails />} />
        <Route path="/admin/review/:id" element={<AdminReviewDetails />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
