import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'text-secondary font-bold' : 'text-white hover:text-secondary';
  };

  return (
    <nav className="bg-primary shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img 
                src="https://s3.cn-north-1.amazonaws.com.cn/manus-user-upload/1740494294_0.png" 
                alt="波尔国际商学" 
                className="h-12 w-auto object-contain"
              />
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`transition-colors duration-300 ${location.pathname === '/' ? 'text-secondary font-bold' : 'text-white hover:text-secondary'}`}>首页</Link>
            
            <div className="relative group">
              <button className="text-white hover:text-secondary flex items-center transition-colors duration-300 focus:outline-none">
                合作机会
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left z-50">
                <Link to="/partnership/travel-agency" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary">旅行社专场</Link>
                <Link to="/partnership/education-institution" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary">教育机构专场</Link>
                <Link to="/partnership/university" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary">高校合作专场</Link>
              </div>
            </div>
            
            <Link to="/contact" className={`transition-colors duration-300 ${location.pathname === '/contact' ? 'text-secondary font-bold' : 'text-white hover:text-secondary'}`}>联系我们</Link>
            
            <Link to="/register" className="bg-secondary text-white px-5 py-2 rounded-full hover:bg-yellow-600 transition-colors duration-300 font-medium shadow-md transform hover:scale-105">
              立即注册
            </Link>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-secondary focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-primary border-t border-blue-800 absolute w-full z-50">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-secondary hover:bg-blue-900" onClick={() => setIsOpen(false)}>首页</Link>
            <div className="px-3 py-2 text-gray-400 text-sm font-bold uppercase tracking-wider">合作机会</div>
            <Link to="/partnership/travel-agency" className="block px-3 py-2 pl-6 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-blue-900" onClick={() => setIsOpen(false)}>旅行社专场</Link>
            <Link to="/partnership/education-institution" className="block px-3 py-2 pl-6 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-blue-900" onClick={() => setIsOpen(false)}>教育机构专场</Link>
            <Link to="/partnership/university" className="block px-3 py-2 pl-6 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-blue-900" onClick={() => setIsOpen(false)}>高校合作专场</Link>
            <Link to="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-secondary hover:bg-blue-900" onClick={() => setIsOpen(false)}>联系我们</Link>
            <div className="pt-4 pb-2">
              <Link to="/register" className="block w-full text-center px-5 py-3 rounded-md font-medium bg-secondary text-white hover:bg-yellow-600" onClick={() => setIsOpen(false)}>立即注册</Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
