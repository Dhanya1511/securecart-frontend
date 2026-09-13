// Utility functions

export const formatPrice = (price) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
  }).format(price);
};

export const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-IN', options);
};

export const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};

export const getInitials = (name) => {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();
};

export const calculateDiscount = (originalPrice, discountedPrice) => {
  return Math.round(((originalPrice - discountedPrice) / originalPrice) * 100);
};

export const getRiskColor = (riskScore) => {
  if (riskScore < 40) return '#10b981'; // Green - Low Risk
  if (riskScore < 70) return '#f59e0b'; // Yellow - Medium Risk
  return '#ef4444'; // Red - High Risk
};

export const getRiskStatusLabel = (riskScore) => {
  if (riskScore < 40) return 'LOW RISK';
  if (riskScore < 70) return 'MEDIUM RISK';
  return 'HIGH RISK';
};

export const getFraudStatusColor = (status) => {
  switch (status) {
    case 'genuine':
      return '#10b981';
    case 'suspicious':
      return '#f59e0b';
    case 'fake':
      return '#ef4444';
    default:
      return '#6b7280';
  }
};

export const generateOTP = (length = 6) => {
  return Math.floor(Math.random() * Math.pow(10, length))
    .toString()
    .padStart(length, '0');
};

export const isValidEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

export const isValidPhone = (phone) => {
  const regex = /^[0-9]{10}$/;
  return regex.test(phone.replace(/\D/g, ''));
};
