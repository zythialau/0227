import React from 'react';
import { Link } from 'react-router-dom';

const TravelAgency = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-sm text-blue-200 mb-4">
            <Link to="/" className="hover:text-white">首页</Link> &gt; <span>合作机会</span> &gt; <span>旅行社专场</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">旅行社专场沙龙</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            为旅行社客户提供国际商业视野培训，打造教育旅游新品类，建立合作共赢生态。
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-16">
            
            {/* Target Audience */}
            <section>
              <h2 className="text-2xl font-bold text-primary mb-6 flex items-center">
                <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-primary mr-3 text-sm">01</span>
                目标受众
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="font-bold text-lg text-gray-800 mb-2">国内主要旅行行业负责人</div>
                  <p className="text-gray-500 text-sm">寻找新的业务增长点与差异化竞争优势</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="font-bold text-lg text-gray-800 mb-2">旅行社总裁</div>
                  <p className="text-gray-500 text-sm">制定企业战略发展方向与合作伙伴选择</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="font-bold text-lg text-gray-800 mb-2">教育旅游项目经理</div>
                  <p className="text-gray-500 text-sm">负责研学旅行产品的设计与执行落地</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="font-bold text-lg text-gray-800 mb-2">国际业务拓展团队</div>
                  <p className="text-gray-500 text-sm">开拓海外资源与建立国际合作网络</p>
                </div>
              </div>
            </section>

            {/* Core Values */}
            <section>
              <h2 className="text-2xl font-bold text-primary mb-6 flex items-center">
                <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-primary mr-3 text-sm">02</span>
                核心价值
              </h2>
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-8">
                  <ul className="space-y-6">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                        <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-bold text-gray-900">提供国际商业视野培训</h4>
                        <p className="mt-1 text-gray-600">引入全球顶尖商学院课程理念，提升团队国际化服务能力。</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                        <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-bold text-gray-900">打造教育旅游新品类</h4>
                        <p className="mt-1 text-gray-600">结合"游"与"学"，开发高附加值的商业研学产品。</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                        <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-bold text-gray-900">建立合作共赢生态</h4>
                        <p className="mt-1 text-gray-600">资源共享，优势互补，共同开发高端教育旅游市场。</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                        <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-bold text-gray-900">开拓新的收入增长点</h4>
                        <p className="mt-1 text-gray-600">通过高品质教育内容赋能，提升产品溢价能力。</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Agenda */}
            <section>
              <h2 className="text-2xl font-bold text-primary mb-6 flex items-center">
                <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-primary mr-3 text-sm">03</span>
                活动议程
              </h2>
              <p className="text-gray-500 text-sm mb-4">内容仅供参考，具体安排以实际通知为准</p>
              <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">时长</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">活动内容</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">描述</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-medium">30分钟</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-bold">签到与茶敘</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">欢迎说词、轻松互动</td>
                      </tr>
                      <tr className="bg-blue-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-medium">45分钟</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-bold">波尔国际商学介绍</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">品牌故事、课程亮点、合作案例分享</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-medium">45分钟</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-bold">教育旅游机遇分析</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">市场趋势、客户需求、商业模式探讨</td>
                      </tr>
                      <tr className="bg-blue-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-medium">45分钟</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-bold">合作方案与优势</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">定制课程、资源整合、利润分配模式</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-medium">45分钟</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-bold">互动交流与案例分享</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">现场合作伙伴经验分享、Q&A</td>
                      </tr>
                      <tr className="bg-yellow-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-medium">30分钟</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-bold">合作洽谈与交流</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">一对一深度沟通、轻松社交</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Benefits Visualization */}
            <section>
              <h2 className="text-2xl font-bold text-primary mb-6 flex items-center">
                <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-primary mr-3 text-sm">04</span>
                合作收益
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-secondary hover:shadow-lg transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-blue-50 rounded-lg text-primary">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span className="text-xs font-bold text-secondary bg-yellow-50 px-2 py-1 rounded">核心权益</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">获得国际教育课程代理权</h3>
                  <p className="text-gray-600 text-sm">独家代理波尔国际商学高端研学课程，丰富产品线。</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-secondary hover:shadow-lg transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-blue-50 rounded-lg text-primary">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded">利润提升</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">享受优惠的课程定价</h3>
                  <p className="text-gray-600 text-sm">合作伙伴专享折扣价，保障充足的利润空间。</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-secondary hover:shadow-lg transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-blue-50 rounded-lg text-primary">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                      </svg>
                    </div>
                    <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">营销支持</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">获得完整的市场营销支持</h3>
                  <p className="text-gray-600 text-sm">提供宣传物料、招生话术、海报设计等全套支持。</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-secondary hover:shadow-lg transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-blue-50 rounded-lg text-primary">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <span className="text-xs font-bold text-purple-600 bg-purple-50 px-2 py-1 rounded">长期发展</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">建立长期稳定的合作关系</h3>
                  <p className="text-gray-600 text-sm">成为战略合作伙伴，优先获取新项目合作机会。</p>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-xl shadow-lg sticky top-24 border border-gray-100">
              <h3 className="text-2xl font-bold text-primary mb-6 text-center">立即预约沙龙</h3>
              <p className="text-gray-600 mb-8 text-center text-sm">
                名额有限，请填写下方信息预约席位。我们的顾问将在24小时内与您联系。
              </p>
              
              <Link to="/register?type=travel-agency" className="block w-full bg-secondary text-white text-center font-bold py-4 rounded-lg hover:bg-yellow-600 transition-colors duration-300 shadow-md mb-4">
                填写预约表单
              </Link>
              
              <div className="mt-8 pt-8 border-t border-gray-100">
                <h4 className="font-bold text-gray-900 mb-4">联系我们</h4>
                <div className="flex items-center mb-3">
                  <svg className="w-5 h-5 text-secondary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-gray-600 text-sm">+86 131 7211 1948</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-secondary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-600 text-sm">info@cngoat.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelAgency;
