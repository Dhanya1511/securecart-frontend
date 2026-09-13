import React from 'react';
import { Check, AlertCircle, X } from 'lucide-react';

const FraudBadge = ({ status, label }) => {
  const getBadgeStyles = () => {
    switch (status) {
      case 'genuine':
        return {
          bg: 'bg-green-100',
          text: 'text-green-800',
          icon: 'text-green-600',
          Icon: Check,
        };
      case 'suspicious':
        return {
          bg: 'bg-yellow-100',
          text: 'text-yellow-800',
          icon: 'text-yellow-600',
          Icon: AlertCircle,
        };
      case 'fake':
        return {
          bg: 'bg-red-100',
          text: 'text-red-800',
          icon: 'text-red-600',
          Icon: X,
        };
      default:
        return {
          bg: 'bg-gray-100',
          text: 'text-gray-800',
          icon: 'text-gray-600',
          Icon: AlertCircle,
        };
    }
  };

  const { bg, text, icon, Icon } = getBadgeStyles();

  return (
    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${bg} ${text}`}>
      <Icon size={14} className={icon} />
      {label || status.toUpperCase()}
    </span>
  );
};

export default FraudBadge;
