// Type definitions and enums

export const UserRole = {
  CUSTOMER: 'customer',
  SELLER: 'seller',
  ADMIN: 'admin',
};

export const OrderStatus = {
  PROCESSING: 'processing',
  SHIPPED: 'shipped',
  DELIVERED: 'delivered',
  CANCELLED: 'cancelled',
};

export const PaymentStatus = {
  PENDING: 'pending',
  COMPLETED: 'completed',
  FAILED: 'failed',
};

export const TransactionRiskStatus = {
  LOW: 'low',
  MEDIUM: 'medium',
  HIGH: 'high',
};

export const FraudStatus = {
  GENUINE: 'genuine',
  SUSPICIOUS: 'suspicious',
  FAKE: 'fake',
};

export const AlertType = {
  TRANSACTION: 'transaction',
  REVIEW: 'review',
  USER: 'user',
};

export const AlertStatus = {
  ACTIVE: 'active',
  BLOCKED: 'blocked',
  VERIFIED: 'verified',
  FLAGGED: 'flagged',
};
