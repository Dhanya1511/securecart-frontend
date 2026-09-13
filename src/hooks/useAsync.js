import { useState } from 'react';

// Hook for managing async operations
export const useAsync = (asyncFunction, immediate = true) => {
  const [status, setStatus] = useState('idle');
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const execute = async (...args) => {
    setStatus('pending');
    setData(null);
    setError(null);
    try {
      const response = await asyncFunction(...args);
      setData(response);
      setStatus('success');
      return response;
    } catch (error) {
      setError(error);
      setStatus('error');
      throw error;
    }
  };

  return { execute, status, data, error };
};
