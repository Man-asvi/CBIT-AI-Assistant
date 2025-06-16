import React from 'react';

export const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex items-center space-x-2">
      <div className="w-3 h-3 bg-emerald-600 rounded-full animate-bounce delay-75"></div>
      <div className="w-3 h-3 bg-emerald-600 rounded-full animate-bounce delay-150"></div>
      <div className="w-3 h-3 bg-emerald-600 rounded-full animate-bounce delay-300"></div>
      <span className="text-sm text-gray-600">AI is thinking...</span>
    </div>
  );
};