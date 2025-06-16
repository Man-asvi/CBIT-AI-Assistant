import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="bg-emerald-700 text-white p-4 shadow-md">
      <div className="container mx-auto flex items-center">
        <svg className="h-10 w-10 mr-3" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="18" fill="#FFD700" stroke="#FFFFFF" strokeWidth="1.5"/>
        </svg>
        <h1 className="text-2xl font-bold">CBIT AI Assistant</h1>
      </div>
    </header>
  );
};