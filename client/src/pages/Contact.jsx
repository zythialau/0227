import React from 'react';

const Contact = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-primary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">联系我们</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            无论您有任何疑问或合作意向，我们都期待与您交流。
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 h-full">
            <h2 className="text-2xl font-bold text-primary mb-8">联系方式</h2>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-primary">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-bold text-gray-900">电话咨询</h3>
                  <p className="mt-2 text-gray-600">+86 131 7211 1948</p>
                  <p className="text-gray-500 text-sm mt-1">周一至周五 9:00 - 18:00</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-primary">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-bold text-gray-900">电子邮箱</h3>
                  <p className="mt-2 text-gray-600">info@cngoat.com</p>
                  <p className="text-gray-500 text-sm mt-1">我们将尽快回复您的邮件</p>
                </div>
              </div>
            </div>
          </div>

          {/* QR Code Section */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 h-full flex flex-col items-center justify-center text-center">
            <h2 className="text-2xl font-bold text-primary mb-6">扫码联系我们</h2>
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <img 
                src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://www.boer-edu.com" 
                alt="商务洽谈二维码" 
                className="w-64 h-64 object-contain"
              />
            </div>
            <p className="text-gray-600 font-medium">微信扫一扫，添加商务顾问</p>
            <p className="text-gray-500 text-sm mt-2">获取更多合作资料与沙龙信息</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
