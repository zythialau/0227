import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-bold text-white mb-4">波尔国际商学</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              波尔国际商学致力于为青年提供国际化商业教育，连接全球教育资源，赋能未来领袖。
            </p>
            <div className="bg-white p-2 inline-block rounded-lg">
               <img 
                 src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https://www.boer-edu.com" 
                 alt="商务洽谈二维码" 
                 className="w-24 h-24"
               />
               <p className="text-xs text-gray-900 text-center mt-1 font-bold">商务洽谈</p>
            </div>
          </div>
          
          <div className="col-span-1 md:col-span-1">
            <h4 className="text-lg font-semibold text-secondary mb-4">合作机会</h4>
            <ul className="space-y-2">
              <li><Link to="/partnership/travel-agency" className="text-gray-400 hover:text-white transition-colors">旅行社专场</Link></li>
              <li><Link to="/partnership/education-institution" className="text-gray-400 hover:text-white transition-colors">教育机构专场</Link></li>
              <li><Link to="/partnership/university" className="text-gray-400 hover:text-white transition-colors">高校合作专场</Link></li>
            </ul>
          </div>
          
          <div className="col-span-1 md:col-span-1">
            <h4 className="text-lg font-semibold text-secondary mb-4">快速链接</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">首页</Link></li>
              <li><Link to="/register" className="text-gray-400 hover:text-white transition-colors">立即注册</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">联系我们</Link></li>
            </ul>
          </div>
          
          <div className="col-span-1 md:col-span-1">
            <h4 className="text-lg font-semibold text-secondary mb-4">联系方式</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-start">
                <svg className="h-5 w-5 mr-2 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@cngoat.com
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 mr-2 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +86 131 7211 1948
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} 波尔国际商学. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
