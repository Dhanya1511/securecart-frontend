import React, { useState, useEffect } from 'react';
import { CheckCircle, AlertCircle, AlertTriangle } from 'lucide-react';

const Toast = ({ message, type = 'success', duration = 3000, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const getStyles = () => {
    switch (type) {
      case 'success':
        return { bg: 'bg-green-50', border: 'border-green-200', text: 'text-green-800', icon: 'text-green-600', Icon: CheckCircle };
      case 'error':
        return { bg: 'bg-red-50', border: 'border-red-200', text: 'text-red-800', icon: 'text-red-600', Icon: AlertCircle };
      case 'warning':
        return { bg: 'bg-yellow-50', border: 'border-yellow-200', text: 'text-yellow-800', icon: 'text-yellow-600', Icon: AlertTriangle };
      default:
        return { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-800', icon: 'text-blue-600', Icon: AlertCircle };
    }
  };

  const { bg, border, text, icon, Icon } = getStyles();

  return (
    <div className={`${bg} border-l-4 ${border} ${text} p-4 rounded flex items-center gap-3 shadow-md`}>
      <Icon size={20} className={icon} />
      <p className="flex-1">{message}</p>
    </div>
  );
};

export default Toast;
