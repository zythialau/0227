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

// --- 裝飾用小組件 (借鑒 Home.tsx 的高級質感) ---
function GoldDivider() {
  return (
    <div className="flex items-center justify-center gap-4">
      <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#C9A84C]"></div>
      <div className="w-2 h-2 rotate-45 bg-[#C9A84C]"></div>
      <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#C9A84C]"></div>
    </div>
  );
}

export default function CareerBrochure() {
  const partnerType = import.meta.env.VITE_PARTNER_TYPE || 'uni';

  // --- 頁面內容設定 (完全保留官方文案) ---
  // --- 大学生职业规划专题 内容 ---
  const content = {
    heroPrefix: '大学生职业规划专题',
    heroImage: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    audienceTitle: '适合人群',
    audiences: [
      { title: '在校大学生及硕博生', desc: '探索未来职业方向，打破求职迷茫期，提前布局职场路径。' },
      { title: '应届毕业生', desc: '急需提升面试技巧、简历包装与获取名企敲门砖。' },
      { title: '高校就业指导老师', desc: '寻求优质企业资源库与前沿的实战就业指导体系。' },
      { title: '初入职场青年', desc: '渴望突破职业初期瓶颈，实现跨越式发展与高阶跃升。' },
    ],
    coreValues: [
      { title: '名企视角解码', desc: '从全球500强HR的视角出发，拆解高薪职位的核心能力模型。' },
      { title: '实战能力跃升', desc: '引入波尔国际商学实战案例，填补学术理论与商业实践的鸿沟。' },
      { title: '专属人脉圈层', desc: '链接业界精英导师，搭建高价值的职场初期人脉网络。' },
      { title: '个性化职业锚定', desc: '科学评估个人优势，量身定制长效清晰的职业发展路径。' },
    ],
    benefits: [
      { title: '重塑求职思维', tag: '认知升级', desc: '打破传统求职信息差，掌握大厂录用的底层逻辑。', icon: BookOpen },
      { title: '斩获内推机遇', tag: '资源赋能', desc: '表现优异者将有机会获得波尔专属名企实习与全职内推名额。', icon: TrendingUp },
      { title: '提升面试胜率', tag: '实战演练', desc: '沉浸式面试模拟与复盘，全面提升临场应变与表达能力。', icon: Award },
      { title: '获取专属指导', tag: '长期陪伴', desc: '加入波尔校友网络，获取长期的职业发展诊断与咨询。', icon: Users },
    ],
    agenda: [
      { time: '10分钟', title: '破冰与导入', desc: '聚焦当下就业大环境，打破信息茧房，引发职业规划深度思考。' },
      { time: '20分钟', title: '板块一：破局与定位', desc: '大学生如何避免随波逐流？科学锚定个人职业发展方向。' },
      { time: '40分钟', title: '板块二：核心竞争力构建', desc: '深度解码名企用人标准，在校期间如何打造高含金量背景。' },
      { time: '40分钟', title: '板块三：波尔实战赋能', desc: '波尔国际商学如何助力青年学子实现从校园到名企的跃升。' },
      { time: '30分钟', title: '板块四：Q&A 专家答疑', desc: '直击求职痛点，专家导师现场提供一对一的职业诊断与建议。' },
      { time: '40分钟', title: '交流联谊 & 资源对接', desc: '建立优质职场人脉，与导师及优秀同侪深度交流。' },
    ]
  };

  // --- 表單狀態管理 ---
  const [formData, setFormData] = useState({ name: '', company: '', phone: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

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
      const WEBHOOK_URL = 'https://script.google.com/macros/s/AKfycbzsbfGhQ0CKbaqE49Nm79AY5hnjvIahEA_AUeifW06d7BlsKatQmv_3vaPToFpc61_Klw/exec';
      await fetch(WEBHOOK_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain' },
        body: JSON.stringify({ ...formData, partnerType: content.heroPrefix }),
      });
      setSubmitStatus('success');
      setFormData({ name: '', company: '', phone: '' });
    } catch (error) {
      setSubmitStatus('error');
      alert('提交失败，请稍后再试或直接联系我们。');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans flex flex-col">
      {/* --- Hero 主視覺 --- */}
      <div className="relative h-[500px] w-full overflow-hidden bg-[#0A1628] shrink-0">
        {/* 👇 1. 降低圖片透明度 (opacity-40)，讓背景變暗、退到視覺後方 */}
        <img
          src={content.heroImage}
          alt={`${content.heroPrefix} Hero Background`}
          className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity"
        />
        {/* 👇 2. 全面加深遮罩：從上到下都使用深海藍，確保所有白色文字(包含副標題)都清晰銳利 */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628]/70 via-[#0A1628]/80 to-[#0A1628]"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <img src="/hero-logo.png" alt="波尔国际商学" className="h-24 md:h-40 w-auto mb-8 drop-shadow-2xl object-contain" />
          
          <p className="text-[#C9A84C] tracking-[0.4em] text-sm md:text-base font-bold mb-4 uppercase drop-shadow-md">
            GOAT International Business
          </p>
          
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#F5F0E8] mb-6 drop-shadow-xl leading-tight">
            {content.heroPrefix}沙龙讲座邀请函
          </h1>
          <GoldDivider />
          {/* 👇 3. 確保副標題顏色夠亮 (text-[#F5F0E8])，在暗背景上非常清晰 */}
          <p className="text-lg md:text-xl text-[#F5F0E8] mt-6 max-w-3xl font-light tracking-wide drop-shadow-lg">
            探索全球商业机遇 · 赋能新时代教育 · 精英成长与升学规划
          </p>
        </div>
      </div>

      {/* --- 全新植入：為什麼選擇波爾 (Our Mission) --- */}
      <section className="bg-[#0A1628] py-20 px-4 relative overflow-hidden shrink-0 border-t border-[#C9A84C]/20">
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <p className="text-[#C9A84C] tracking-[0.3em] text-sm mb-4 font-semibold uppercase">Our Mission</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#F5F0E8] mb-8">为什么选择波尔？</h2>
          <GoldDivider />
          
          <div className="mt-10 space-y-6 text-[#F5F0E8]/80 text-sm md:text-base leading-relaxed text-left md:text-center max-w-3xl mx-auto font-light">
            <p>
            当前跨境教育市场上，不少研学项目名不副实——学生被安排参观学校或旅游景点，由销售人员充当“讲师”，高昂费用换来的只是一场拍照打卡。
            </p>
            <p>
              <span className="text-[#C9A84C] font-medium">波尔国际商学</span>，由扎根香港的专业团队创立，坚持「专业导师全程执教」模式，确保每一位走进课堂的导师都是真正的教育工作者，而非销售人员。
            </p>
            <p className="text-lg mt-8">
              我们的使命是：<span className="text-[#C9A84C] font-medium block md:inline mt-2 md:mt-0">传递真实准确的资讯，提供专业可靠的咨询服务，帮助学生建立健康的观念。</span>
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-12 border-t border-[#C9A84C]/10">
            {[
              { value: '100%', label: '香港本土团队' },
              { value: '专业', label: '教师输出模式' },
              { value: '真实', label: '资讯无水分' },
              { value: '全链', label: '研学→升学→就业' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-[#C9A84C] mb-3">{stat.value}</p>
                <p className="text-[#F5F0E8]/60 text-sm tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 主要內容區塊 --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid grid-cols-1 lg:grid-cols-3 gap-12 flex-grow">
        
        {/* 左側：文案介紹 */}
        <div className="lg:col-span-2 space-y-16">
          <section>
            <h2 className="text-2xl font-bold text-[#0A1628] mb-8 flex items-center">
              <span className="bg-[#0A1628] text-[#C9A84C] w-8 h-8 rounded-sm flex items-center justify-center text-sm mr-4 font-bold">01</span>
              {content.audienceTitle}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {content.audiences.map((item) => (
                <div key={item.title} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-3">
                    <CheckCircle className="h-5 w-5 text-[#C9A84C] mr-3 shrink-0" />
                    <span className="font-bold text-[#0A1628]">{item.title}</span>
                  </div>
                  <p className="text-sm text-gray-500 pl-8 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0A1628] mb-8 flex items-center">
              <span className="bg-[#0A1628] text-[#C9A84C] w-8 h-8 rounded-sm flex items-center justify-center text-sm mr-4 font-bold">02</span>
              核心价值
            </h2>
            <div className="space-y-4">
              {content.coreValues.map((value) => (
                <div key={value.title} className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#C9A84C] hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-bold text-[#0A1628] mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0A1628] mb-8 flex items-center">
              <span className="bg-[#0A1628] text-[#C9A84C] w-8 h-8 rounded-sm flex items-center justify-center text-sm mr-4 font-bold">
                03
              </span>
              活动议程
            </h2>
            
            <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-[#0A1628]">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-bold text-[#C9A84C] uppercase tracking-wider w-24">时长</th>
                      <th className="px-6 py-4 text-left text-xs font-bold text-[#C9A84C] uppercase tracking-wider">活动内容</th>
                      <th className="px-6 py-4 text-left text-xs font-bold text-[#C9A84C] uppercase tracking-wider">描述</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-100">
                    {content.agenda.map((item, index) => (
                      <tr key={index} className={index % 2 === 1 ? "bg-slate-50 hover:bg-gray-100" : "hover:bg-gray-50"}>
                        <td className="px-6 py-4 text-sm text-gray-500 font-medium">{item.time}</td>
                        <td className="px-6 py-4 text-sm text-[#0A1628] font-bold">{item.title}</td>
                        <td className="px-6 py-4 text-sm text-gray-500 leading-relaxed">{item.desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <p className="text-gray-400 text-xs mt-3 text-right">备注：以上时长为参考安排，具体以活动当日通知为准。</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0A1628] mb-8 flex items-center">
              <span className="bg-[#0A1628] text-[#C9A84C] w-8 h-8 rounded-sm flex items-center justify-center text-sm mr-4 font-bold">04</span>
              合作收益
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {content.benefits.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <div key={benefit.title} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 relative overflow-hidden hover:shadow-md transition-shadow group">
                    <div className="absolute top-0 right-0 bg-[#0A1628] text-[#C9A84C] text-xs font-bold px-3 py-1.5 rounded-bl-lg">
                      {benefit.tag}
                    </div>
                    <div className="bg-slate-50 w-12 h-12 rounded-sm flex items-center justify-center mb-5 group-hover:bg-[#0A1628] transition-colors">
                      <Icon className="h-6 w-6 text-[#C9A84C]" />
                    </div>
                    <h3 className="text-lg font-bold text-[#0A1628] mb-3">{benefit.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{benefit.desc}</p>
                  </div>
                );
              })}
            </div>
          </section>
        </div>

        {/* 右側：預約表單 */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-xl p-8 sticky top-8 border border-gray-100">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-[#0A1628] mb-2">立即预约沙龙</h3>
              <p className="text-gray-500 text-sm">名额有限，请填写信息预留席位</p>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">姓名 *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  disabled={submitStatus === 'success'}
                  className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C] outline-none transition-all disabled:bg-gray-50 text-sm"
                  placeholder="请输入您的姓名"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">机构名称 *</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  required
                  disabled={submitStatus === 'success'}
                  className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C] outline-none transition-all disabled:bg-gray-50 text-sm"
                  placeholder="请输入机构名称"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">联系电话 *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  disabled={submitStatus === 'success'}
                  className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C] outline-none transition-all disabled:bg-gray-50 text-sm"
                  placeholder="请输入手机号码"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || submitStatus === 'success'}
                className={`w-full font-bold py-4 rounded-sm transition-all duration-500 mt-6 tracking-widest ${
                  isSubmitting
                    ? 'bg-gray-200 cursor-not-allowed text-gray-500'
                    : submitStatus === 'success'
                    ? 'bg-[#C9A84C] text-[#0A1628] cursor-default shadow-[0_0_20px_rgba(201,168,76,0.4)]' 
                    : 'bg-[#0A1628] hover:bg-[#14294a] text-[#C9A84C] shadow-md'
                }`}
              >
                {isSubmitting ? '提交中...' : submitStatus === 'success' ? '✓ 预约已确认' : '提交预约'}
              </button>
            </form>

            {/* 成功後在按鈕下方顯示 VIP 二維碼區塊 */}
            {submitStatus === 'success' && (
              <div className="mt-6 p-6 bg-gradient-to-b from-[#C9A84C]/10 to-transparent border border-[#C9A84C]/30 rounded-sm text-center transform transition-all duration-500 opacity-100 translate-y-0 relative overflow-hidden">
                {/* 裝飾性金屬小角落 */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#C9A84C]/60" />
                <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#C9A84C]/60" />
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#C9A84C]/60" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#C9A84C]/60" />

                <p className="text-sm text-[#0A1628] font-bold mb-4 leading-relaxed tracking-wide">
                  感谢您的预约！<br/>请扫描下方二维码，与我们详细洽谈：
                </p>
                <div className="inline-block p-1.5 bg-white border border-[#C9A84C]/40 rounded-sm shadow-sm">
                  <img 
                    src="/wecom-partner-qr.png" 
                    alt="与我们洽谈" 
                    className="w-28 h-28 mx-auto"
                  />
                </div>
              </div>
            )}

            <div className="mt-8 pt-6 border-t border-gray-100 space-y-4">
              <div className="flex items-center text-sm text-gray-600">
                <Mail className="h-4 w-4 mr-4 text-[#C9A84C]" />
                info@cngoat.com
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Phone className="h-4 w-4 mr-4 text-[#C9A84C]" />
                +86 131 7211 1948
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- 頁尾 (遵循官方名稱) --- */}
      <footer className="bg-[#0A1628] text-white pt-16 pb-8 border-t border-[#C9A84C]/20 shrink-0 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            <div className="col-span-1">
              <h3 className="text-2xl font-bold text-[#F5F0E8] mb-4">波尔国际商学</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                致力于为青年提供国际化商业教育，连接全球教育资源，赋能未来领袖。
              </p>
            </div>
            <div className="col-span-1 md:pl-12">
              <h4 className="text-sm font-bold text-[#C9A84C] mb-6 tracking-widest uppercase">快速链接</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">首页</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">关于我们</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">联系我们</a></li>
              </ul>
            </div>
            <div className="col-span-1">
              <h4 className="text-sm font-bold text-[#C9A84C] mb-6 tracking-widest uppercase">联系方式</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li className="flex items-center"><Mail className="h-4 w-4 mr-4 text-[#C9A84C]" /> info@cngoat.com</li>
                <li className="flex items-center"><Phone className="h-4 w-4 mr-4 text-[#C9A84C]" /> +86 131 7211 1948</li>
                <li className="flex items-center">
                  <Globe className="h-4 w-4 mr-4 text-[#C9A84C]" />
                  <a href="https://www.cngoat.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    www.cngoat.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-16 pt-8 text-center text-gray-500 text-xs tracking-wider">
            <p>&copy; {new Date().getFullYear()} 波尔国际商学 . All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}