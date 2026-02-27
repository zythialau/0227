import React from 'react';
import { Link } from 'react-router-dom';

const EducationInstitution = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-indigo-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-sm text-indigo-200 mb-4">
            <Link to="/" className="hover:text-white">首页</Link> &gt; <span>合作机会</span> &gt; <span>教育机构专场</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">教育机构合作沙龙</h1>
          <p className="text-xl text-indigo-100 max-w-3xl">
            共同开发高端商业素质课程，整合优质教育资源，拓展学生升学与就业渠道。
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
                <span className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center text-primary mr-3 text-sm">01</span>
                目标受众
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="font-bold text-lg text-gray-800 mb-2">国际学校校长/负责人</div>
                  <p className="text-gray-500 text-sm">寻求优质国际课程资源与升学通道</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="font-bold text-lg text-gray-800 mb-2">培训机构创始人</div>
                  <p className="text-gray-500 text-sm">拓展高端产品线与提升品牌竞争力</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="font-bold text-lg text-gray-800 mb-2">留学中介机构负责人</div>
                  <p className="text-gray-500 text-sm">为客户提供背景提升与职业规划服务</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="font-bold text-lg text-gray-800 mb-2">素质教育机构负责人</div>
                  <p className="text-gray-500 text-sm">引入商业素养课程，丰富教学内容</p>
                </div>
              </div>
            </section>

            {/* Core Values */}
            <section>
              <h2 className="text-2xl font-bold text-primary mb-6 flex items-center">
                <span className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center text-primary mr-3 text-sm">02</span>
                核心价值
              </h2>
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-8">
                  <ul className="space-y-6">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-100 flex items-center justify-center mt-1">
                        <svg className="h-4 w-4 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-bold text-gray-900">获得独家课程授权</h4>
                        <p className="mt-1 text-gray-600">引入波尔国际商学成熟的商业素养课程体系，填补市场空白。</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-100 flex items-center justify-center mt-1">
                        <svg className="h-4 w-4 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-bold text-gray-900">建立教育生态联盟</h4>
                        <p className="mt-1 text-gray-600">共享师资、生源與渠道资源，打造教育产业共同体。</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-100 flex items-center justify-center mt-1">
                        <svg className="h-4 w-4 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-bold text-gray-900">提升品牌影响力</h4>
                        <p className="mt-1 text-gray-600">借助波尔国际品牌背书，提升机构在当地市场的知名度与美誉度。</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-100 flex items-center justify-center mt-1">
                        <svg className="h-4 w-4 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-bold text-gray-900">拓展升学与就业渠道</h4>
                        <p className="mt-1 text-gray-600">为学生提供更多元化的国际升学路径与职业发展机会。</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Agenda */}
            <section>
              <h2 className="text-2xl font-bold text-primary mb-6 flex items-center">
                <span className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center text-primary mr-3 text-sm">03</span>
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
                      <tr className="bg-indigo-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-medium">45分钟</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-bold">波尔国际商学介绍</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">教育理念、课程体系、师资力量</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-medium">45分钟</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-bold">未来教育趋势分享</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">国际教育发展方向、人才培养模式</td>
                      </tr>
                      <tr className="bg-indigo-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-medium">45分钟</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-bold">合作模式与案例</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">课程引进、联合办学、师资培训</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-medium">45分钟</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-bold">圆桌讨论</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">如何打造具有竞争力的教育产品</td>
                      </tr>
                      <tr className="bg-yellow-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-medium">30分钟</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-bold">合作洽谈与交流</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">深度对接、资源互换</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Benefits Visualization */}
            <section>
              <h2 className="text-2xl font-bold text-primary mb-6 flex items-center">
                <span className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center text-primary mr-3 text-sm">04</span>
                合作收益
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-secondary hover:shadow-lg transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-indigo-50 rounded-lg text-primary">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <span className="text-xs font-bold text-secondary bg-yellow-50 px-2 py-1 rounded">课程升级</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">丰富课程体系</h3>
                  <p className="text-gray-600 text-sm">引入国际化商业素养课程，提升教学质量与竞争力。</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-secondary hover:shadow-lg transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-indigo-50 rounded-lg text-primary">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded">品牌赋能</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">品牌双向赋能</h3>
                  <p className="text-gray-600 text-sm">与波尔国际商学联合挂牌，提升机构品牌形象。</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-secondary hover:shadow-lg transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-indigo-50 rounded-lg text-primary">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">师资共享</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">师资培训与支持</h3>
                  <p className="text-gray-600 text-sm">定期提供教师培训，共享波尔全球师资网络。</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-secondary hover:shadow-lg transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-indigo-50 rounded-lg text-primary">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <span className="text-xs font-bold text-purple-600 bg-purple-50 px-2 py-1 rounded">生源拓展</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">生源互推与转化</h3>
                  <p className="text-gray-600 text-sm">建立生源互推机制，实现客户资源的最大化利用。</p>
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
              
              <Link to="/register?type=education-institution" className="block w-full bg-secondary text-white text-center font-bold py-4 rounded-lg hover:bg-yellow-600 transition-colors duration-300 shadow-md mb-4">
                填写预约表单
              </Link>
              
              <div className="mt-8 pt-8 border-t border-gray-100">
                <h4 className="font-bold text-gray-900 mb-4">联系咨询</h4>
                <div className="space-y-4">
                  <div className="flex items-center">
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
    </div>
  );
};

export default EducationInstitution;
