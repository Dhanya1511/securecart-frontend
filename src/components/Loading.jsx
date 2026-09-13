import React from 'react';
import { Loader } from 'lucide-react';

const Loading = ({ message = 'Loading...', fullScreen = false }) => {
  const content = (
    <div className="flex flex-col items-center justify-center">
      <Loader className="animate-spin text-blue-600 mb-4" size={40} />
      <p className="text-gray-600 font-medium">{message}</p>
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-90 z-50">
        {content}
      </div>
    );
  }

  return <div className="min-h-[200px] flex items-center justify-center">{content}</div>;
};

export default Loading;
