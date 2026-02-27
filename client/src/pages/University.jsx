import React from 'react';
import { Link } from 'react-router-dom';

const University = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-deep-purple text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://files.manuscdn.com/user_upload_by_module/session_file/310419663030765982/BbJKgFdhKAYvyiYo.jpg')] bg-cover bg-center opacity-40"></div>
        {/* Darker overlay for better text readability */}
        <div className="absolute inset-0 bg-indigo-950/90"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-sm text-purple-200 mb-4">
            <Link to="/" className="hover:text-white">首页</Link> &gt; <span>合作机会</span> &gt; <span>高校合作专场</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">高校合作沙龙</h1>
          <p className="text-xl text-purple-100 max-w-3xl">
            为大学生提供国际升学与职业规划指导，打造校园精英培养计划，建立长期合作关系。
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
                <span className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-primary mr-3 text-sm">01</span>
                目标受众
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="font-bold text-lg text-gray-800 mb-2">高校就业指导中心负责人</div>
                  <p className="text-gray-500 text-sm">提升学生就业竞争力与职业素养</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="font-bold text-lg text-gray-800 mb-2">国际交流处负责人</div>
                  <p className="text-gray-500 text-sm">拓展海外交流项目与升学通道</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="font-bold text-lg text-gray-800 mb-2">商学院/经管学院领导</div>
                  <p className="text-gray-500 text-sm">引入实战案例教学与企业导师</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="font-bold text-lg text-gray-800 mb-2">学生社团/学生会负责人</div>
                  <p className="text-gray-500 text-sm">组织高质量校园活动与技能培训</p>
                </div>
              </div>
            </section>

            {/* Core Values */}
            <section>
              <h2 className="text-2xl font-bold text-primary mb-6 flex items-center">
                <span className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-primary mr-3 text-sm">02</span>
                核心价值
              </h2>
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-8">
                  <ul className="space-y-6">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center mt-1">
                        <svg className="h-4 w-4 text-deep-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-bold text-gray-900">打造校园精英培养计划</h4>
                        <p className="mt-1 text-gray-600">通过商业竞赛、实战演练等形式，选拔并培养具有潜力的商业人才。</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center mt-1">
                        <svg className="h-4 w-4 text-deep-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-bold text-gray-900">提供国际升学与职业规划指导</h4>
                        <p className="mt-1 text-gray-600">邀请名校招生官与企业高管进校园，为学生提供权威的升学与就业建议。</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center mt-1">
                        <svg className="h-4 w-4 text-deep-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-bold text-gray-900">建立长期合作关系</h4>
                        <p className="mt-1 text-gray-600">设立波尔奖学金、实习基地等，与高校建立深度的产学研合作。</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center mt-1">
                        <svg className="h-4 w-4 text-deep-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-bold text-gray-900">提升学校品牌影响力</h4>
                        <p className="mt-1 text-gray-600">引入国际化教育资源，提升学校的国际化办学水平与社会声誉。</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Agenda */}
            <section>
              <h2 className="text-2xl font-bold text-primary mb-6 flex items-center">
                <span className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-primary mr-3 text-sm">03</span>
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
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-bold">签到与交流</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">高校代表签到、自由交流</td>
                      </tr>
                      <tr className="bg-purple-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-medium">45分钟</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-bold">波尔国际商学介绍</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">愿景使命、高校合作计划发布</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-medium">45分钟</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-bold">大学生职业发展趋势</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">就业市场分析、核心竞争力培养</td>
                      </tr>
                      <tr className="bg-purple-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-medium">45分钟</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-bold">产教融合模式探讨</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">校企合作案例、实习基地建设</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-medium">45分钟</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-bold">互动问答</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">针对高校需求的定制化解答</td>
                      </tr>
                      <tr className="bg-yellow-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-medium">30分钟</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-bold">合作洽谈与交流</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">建立联系、意向沟通</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Benefits Visualization */}
            <section>
              <h2 className="text-2xl font-bold text-primary mb-6 flex items-center">
                <span className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-primary mr-3 text-sm">04</span>
                合作收益
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-secondary hover:shadow-lg transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-purple-50 rounded-lg text-deep-purple">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                    </div>
                    <span className="text-xs font-bold text-secondary bg-yellow-50 px-2 py-1 rounded">人才培养</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">提升学生就业竞争力</h3>
                  <p className="text-gray-600 text-sm">通过实战项目与职业指导，帮助学生更好地适应职场需求。</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-secondary hover:shadow-lg transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-purple-50 rounded-lg text-deep-purple">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded">国际视野</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">拓展国际交流渠道</h3>
                  <p className="text-gray-600 text-sm">引入国际化教育资源，為学校搭建国际交流与合作的桥梁。</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-secondary hover:shadow-lg transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-purple-50 rounded-lg text-deep-purple">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                    <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">品牌提升</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">提升学校品牌影响力</h3>
                  <p className="text-gray-600 text-sm">通过高质量的合作项目，提升学校在国际教育领域的知名度。</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-secondary hover:shadow-lg transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-purple-50 rounded-lg text-deep-purple">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <span className="text-xs font-bold text-purple-600 bg-purple-50 px-2 py-1 rounded">资源共享</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">共享优质教育资源</h3>
                  <p className="text-gray-600 text-sm">共享波尔国际商学的全球教育资源网络，为师生提供更多发展机会。</p>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-deep-purple sticky top-24">
              <h3 className="text-xl font-bold text-gray-900 mb-4">立即预约</h3>
              <p className="text-gray-600 mb-6 text-sm">
                诚邀您参加高校合作专场沙龙，共同探讨产教融合新模式。
              </p>
              <Link to="/register" className="block w-full bg-secondary text-white text-center font-bold py-3 rounded-lg hover:bg-secondary-dark transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 mb-4">
                预约合作沙龙
              </Link>
              <div className="text-center">
                <p className="text-sm text-gray-500 mb-2">或直接联系我们</p>
                <p className="font-bold text-primary">info@cngoat.com</p>
              </div>
            </div>

            <div className="bg-purple-50 p-6 rounded-xl border border-purple-100">
              <h3 className="text-lg font-bold text-deep-purple mb-3">为什么选择我们？</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-secondary mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                  <span>丰富的校企合作经验</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-secondary mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                  <span>全球化的教育资源网络</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-secondary mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                  <span>专业的职业规划指导团队</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default University;
