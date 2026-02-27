import React, { useState } from 'react';
import {
  CheckCircle,
  Mail,
  Phone,
  BookOpen,
  Award,
  TrendingUp,
  Users,
  Globe,
} from 'lucide-react';

export default function Brochure() {
  const partnerType = import.meta.env.VITE_PARTNER_TYPE || 'university';

  // --- 頁面內容設定 (完全保留您原本的文字) ---
  const getPageContent = () => {
    switch (partnerType) {
      case 'travel':
        return {
          heroPrefix: '旅行社',
          heroImage:
            'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
          audienceTitle: '旅行社合作伙伴',
          audiences: [
            {
              title: '高端定制游负责人',
              desc: '寻求高附加值旅游产品与差异化路线',
            },
            {
              title: '研学旅行机构创始人',
              desc: '结合国际教育资源，打造深度研学项目',
            },
            { title: '出境游业务总监', desc: '拓展海外名企参访与高校交流渠道' },
            {
              title: '高端客户关系经理',
              desc: '为高净值家庭提供增值教育与背景提升服务',
            },
          ],
          coreValues: [
            {
              title: '赋能旅游产品升级',
              desc: '引入波尔国际商学实战体系，打破同质化竞争，提升客单价。',
            },
            {
              title: '独家海外参访资源',
              desc: '共享全球500强企业与顶尖高校的深度参访渠道。',
            },
            {
              title: '提升品牌溢价',
              desc: '借助国际化教育IP，打造高端研学旅行标杆品牌。',
            },
            {
              title: '长效客户转化',
              desc: '从单次旅游向长期教育规划延伸，提升客户终身价值。',
            },
          ],
          benefits: [
            {
              title: '丰富研学路线',
              tag: '产品升级',
              desc: '结合商业素养，打造独具特色的海外名企名校研学营。',
              icon: BookOpen,
            },
            {
              title: '提升品牌影响力',
              tag: '品牌赋能',
              desc: '借助波尔国际品牌背书，提升机构在当地市场的知名度与美誉度。',
              icon: Award,
            },
            {
              title: '拓宽利润空间',
              tag: '营收增长',
              desc: '通过高附加值的教育内容，提升整体项目利润率。',
              icon: TrendingUp,
            },
            {
              title: '建立产业生态联盟',
              tag: '生态共建',
              desc: '共享导师与渠道资源，打造跨界合作共同体。',
              icon: Users,
            },
          ],
        };
      case 'university':
        return {
          heroPrefix: '高校',
          heroImage:
            'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
          audienceTitle: '高校合作伙伴',
          audiences: [
            {
              title: '高校就业指导中心',
              desc: '提升学生职场竞争力与名企录用率',
            },
            {
              title: '商学院/经管学院领导',
              desc: '引入前沿商业实战案例与企业导师',
            },
            {
              title: '国际交流处负责人',
              desc: '拓展海外名校交流与联合培养项目',
            },
            {
              title: '创新创业学院导师',
              desc: '为学生创投项目提供商业孵化与指导',
            },
          ],
          coreValues: [
            {
              title: '产学研深度融合',
              desc: '将波尔国际商学企业案例库引入课堂，实现理论与实践接轨。',
            },
            {
              title: '全球名企实习内推',
              desc: '共享500强企业资源，为优秀学生提供专属实习与就业通道。',
            },
            {
              title: '国际化师资共建',
              desc: '引入全球顶尖商学院客座教授与企业高管进行联合授课。',
            },
            {
              title: '提升升学就业率',
              desc: '全面提升学生综合商业素养，助力海外深造与名企入职。',
            },
          ],
          benefits: [
            {
              title: '完善实战课程',
              tag: '教学升级',
              desc: '引入国际化商业素养课程，提升教学质量与竞争力。',
              icon: BookOpen,
            },
            {
              title: '提升学术影响力',
              tag: '品牌赋能',
              desc: '承办高规格国际商业论坛，扩大院校知名度。',
              icon: Award,
            },
            {
              title: '拓展高质量就业',
              tag: '升学就业',
              desc: '为学生提供更多元化的国际名企实习与就业机会。',
              icon: TrendingUp,
            },
            {
              title: '建立名企合作网络',
              tag: '生态共建',
              desc: '打造校企联合培养基地，实现资源互补与协同发展。',
              icon: Users,
            },
          ],
        };
      case 'education':
      default:
        return {
          heroPrefix: '教育机构',
          heroImage:
            'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
          audienceTitle: '目标受众',
          audiences: [
            {
              title: '国际学校校长/负责人',
              desc: '寻求优质国际课程资源与升学通道',
            },
            { title: '培训机构创始人', desc: '拓宽高端产品线与提升品牌竞争力' },
            {
              title: '留学中介机构负责人',
              desc: '为客户提供背景提升与职业规划服务',
            },
            {
              title: '素质教育机构负责人',
              desc: '引入商业素养课程，丰富教学内容',
            },
          ],
          coreValues: [
            {
              title: '获得独家课程授权',
              desc: '引入波尔国际商学成熟的商业素养体系，填补市场空白。',
            },
            {
              title: '建立教育生态联盟',
              desc: '共享师资、生源与渠道资源，打造教育产业共同体。',
            },
            {
              title: '提升品牌影响力',
              desc: '借助波尔国际品牌背书，提升机构在当地市场的知名度与美誉度。',
            },
            {
              title: '拓展升学与就业渠道',
              desc: '为学生提供更多元化的国际升学路径与职业发展机会。',
            },
          ],
          benefits: [
            {
              title: '丰富课程体系',
              tag: '课程升级',
              desc: '引入国际化商业素养课程，提升教学质量与竞争力。',
              icon: BookOpen,
            },
            {
              title: '提升品牌影响力',
              tag: '品牌赋能',
              desc: '借助波尔国际品牌背书，提升机构在当地市场的知名度与美誉度。',
              icon: Award,
            },
            {
              title: '拓展升学与就业渠道',
              tag: '升学就业',
              desc: '为学生提供更多元化的国际升学路径与职业发展机会。',
              icon: TrendingUp,
            },
            {
              title: '建立教育生态联盟',
              tag: '生态共建',
              desc: '共享师资、生源与渠道资源，打造教育产业共同体。',
              icon: Users,
            },
          ],
        };
    }
  };

  const content = getPageContent();

  // --- 表單狀態管理與提交邏輯 ---
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.company || !formData.phone) {
      alert('请填写完整信息再提交！');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const WEBHOOK_URL =
        'https://script.google.com/macros/s/AKfycbzsbfGhQ0CKbaqE49Nm79AY5hnjvIahEA_AUeifW06d7BlsKatQmv_3vaPToFpc61_Klw/exec';

      await fetch(WEBHOOK_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain',
        },
        body: JSON.stringify({
          ...formData,
          partnerType: content.heroPrefix,
        }),
      });

      // 成功後，狀態設為 success，且不再設定 setTimeout 恢復為 idle
      setSubmitStatus('success');
      setFormData({ name: '', company: '', phone: '' });
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
      alert('提交失败，请稍后再试或直接联系我们。');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans flex flex-col">
      {/* --- Hero 主視覺 --- */}
      <div className="relative h-[500px] w-full overflow-hidden bg-[#0d2f4f] shrink-0">
        <img
          src={content.heroImage}
          alt={`${content.heroPrefix} Hero Background`}
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-slate-950/60"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <img
            src="/hero-logo.png"
            alt="波尔国际商学"
            className="h-24 md:h-60 w-auto mb-6 drop-shadow-2xl object-contain"
          />
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-xl leading-tight">
            {content.heroPrefix}沙龙讲座邀请函
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl font-medium drop-shadow-lg">
            探索全球商业机遇 · 赋能新时代教育 · 精英成长与升学规划
          </p>
        </div>
      </div>

      {/* --- 主要內容區塊 --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12 flex-grow">
        {/* 左側：文案介紹 */}
        <div className="lg:col-span-2 space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
              <span className="bg-indigo-100 text-indigo-700 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3 font-bold">
                01
              </span>
              {content.audienceTitle}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {content.audiences.map((item) => (
                <div
                  key={item.title}
                  className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center mb-2">
                    <CheckCircle className="h-5 w-5 text-indigo-500 mr-3 shrink-0" />
                    <span className="font-bold text-gray-800">
                      {item.title}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 pl-8 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
              <span className="bg-indigo-100 text-indigo-700 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3 font-bold">
                02
              </span>
              核心价值
            </h2>
            <div className="space-y-4">
              {content.coreValues.map((value) => (
                <div
                  key={value.title}
                  className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-indigo-500 hover:shadow-md transition-shadow"
                >
                  <h3 className="text-xl font-bold text-slate-800 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{value.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
              <span className="bg-indigo-100 text-indigo-700 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3 font-bold">
                03
              </span>
              活动议程
            </h2>
            <p className="text-gray-500 text-sm mb-4">
              内容仅供参考，具体安排以实际通知为准
            </p>
            <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                        时长
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                        活动内容
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                        描述
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-medium">
                        30分钟
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-bold">
                        签到与茶敘
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        欢迎说词、轻松互动
                      </td>
                    </tr>
                    <tr className="bg-indigo-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-medium">
                        45分钟
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-bold">
                        波尔国际商学介绍
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        教育理念、课程体系、师资力量
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-medium">
                        45分钟
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-bold">
                        未来教育趋势分享
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        国际教育发展方向、人才培养模式
                      </td>
                    </tr>
                    <tr className="bg-indigo-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-medium">
                        45分钟
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-bold">
                        合作模式与案例
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        课程引进、联合办学、师资培训
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-medium">
                        45分钟
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-bold">
                        圆桌讨论
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        如何打造具有竞争力的教育产品
                      </td>
                    </tr>
                    <tr className="bg-yellow-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-medium">
                        30分钟
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-bold">
                        合作洽谈与交流
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        深度对接、资源互换
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
              <span className="bg-indigo-100 text-indigo-700 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3 font-bold">
                04
              </span>
              合作收益
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {content.benefits.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={benefit.title}
                    className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 relative overflow-hidden hover:shadow-md transition-shadow"
                  >
                    <div className="absolute top-4 right-4 bg-yellow-100 text-yellow-800 text-xs font-bold px-2 py-1 rounded">
                      {benefit.tag}
                    </div>
                    <div className="bg-indigo-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-indigo-600" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {benefit.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>
        </div>

        {/* 右側：預約表單 */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl shadow-xl p-8 sticky top-8 border border-gray-100">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-slate-900">
                立即预约沙龙
              </h3>
              <p className="text-gray-500 text-sm mt-2">
                名额有限，请填写信息预留席位
              </p>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  姓名 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  disabled={submitStatus === 'success'}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none disabled:bg-gray-50"
                  placeholder="请输入您的姓名"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  机构名称 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  required
                  disabled={submitStatus === 'success'}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none disabled:bg-gray-50"
                  placeholder="请输入机构名称"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  联系电话 <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  disabled={submitStatus === 'success'}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none disabled:bg-gray-50"
                  placeholder="请输入手机号码"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || submitStatus === 'success'}
                className={`w-full font-bold py-3 rounded-lg transition-all duration-300 shadow-md mt-4 ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed text-white'
                    : submitStatus === 'success'
                    ? 'bg-green-500 text-white cursor-default'
                    : 'bg-yellow-500 hover:bg-yellow-600 text-slate-900'
                }`}
              >
                {isSubmitting
                  ? '提交中...'
                  : submitStatus === 'success'
                  ? '✓ 预约成功'
                  : '提交预约'}
              </button>
            </form>

            {/* 成功後在按鈕下方顯示二維碼區塊 */}
            {submitStatus === 'success' && (
              <div className="mt-6 p-5 bg-green-50 border border-green-100 rounded-xl text-center transform transition-all duration-500 opacity-100 translate-y-0">
                <p className="text-sm text-green-700 font-medium mb-3">
                  🎉
                  感谢您的预约！请扫描下方二维码，添加官方助理获取沙龙详细资料：
                </p>
                {/* 替換為您的真實二維碼圖片網址 */}
                <img
                  src="wecom partner qrcode.png"
                  alt="添加官方助理"
                  className="w-32 h-32 mx-auto rounded-lg shadow-sm border border-green-200"
                />
              </div>
            )}

            <div className="mt-8 pt-6 border-t border-gray-100 space-y-3">
              <div className="flex items-center text-sm text-gray-600">
                <Mail className="h-4 w-4 mr-3 text-indigo-500" />
                info@cngoat.com
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Phone className="h-4 w-4 mr-3 text-indigo-500" />
                +86 131 7211 1948
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- 頁尾 (依照官方要求修正名稱) --- */}
      <footer className="bg-slate-900 text-white pt-12 pb-8 border-t border-slate-800 shrink-0 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="col-span-1 md:col-span-1">
              <h3 className="text-2xl font-bold text-white mb-4">
                波尔国际商学
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                致力于为青年提供国际化商业教育，连接全球教育资源，赋能未来领袖。
              </p>
            </div>
            <div className="col-span-1 md:col-span-1">
              <h4 className="text-lg font-semibold text-yellow-400 mb-4 tracking-wide">
                快速链接
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    首页
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    关于我们
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    联系我们
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-1 md:col-span-1">
              <h4 className="text-lg font-semibold text-yellow-400 mb-4 tracking-wide">
                联系方式
              </h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li className="flex items-center">
                  <Mail className="h-4 w-4 mr-3 text-yellow-400" />{' '}
                  info@cngoat.com
                </li>
                <li className="flex items-center">
                  <Phone className="h-4 w-4 mr-3 text-yellow-400" /> +86 131
                  7211 1948
                </li>
                <li className="flex items-center">
                  <Globe className="h-4 w-4 mr-3 text-yellow-400" />
                  <a
                    href="https://www.cngoat.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 text-sm hover:underline"
                  >
                    www.cngoat.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
            <p>
              &copy; {new Date().getFullYear()} 波尔国际商学 (CNGOAT). All
              rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
