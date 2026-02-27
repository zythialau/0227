import React from 'react';
import { Link } from 'react-router-dom';

const FloatingButton = () => {
  return (
    <Link 
      to="/register" 
      className="fixed bottom-8 right-8 z-50 bg-secondary text-white px-6 py-4 rounded-full shadow-2xl hover:bg-yellow-600 transition-all duration-300 transform hover:scale-110 flex items-center space-x-2 animate-bounce-slow"
      style={{ boxShadow: '0 4px 14px 0 rgba(212, 175, 55, 0.39)' }}
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
      <span className="font-bold text-lg">立即预约沙龙</span>
    </Link>
  );
};

export default FloatingButton;
