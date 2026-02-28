import React from 'react';
import Brochure from './pages/Brochure';
import CareerBrochure from './pages/CareerBrochure';
import HkEduBrochure from './pages/HkEduBrochure';

export default function App() {
  // 1. 獲取主機名稱 (專給「正式上線」的子網域使用)
  const hostname = window.location.hostname;
  
  // 2. 獲取網址參數 (專給「StackBlitz 預覽」的秘密通道)
  const searchParams = new URLSearchParams(window.location.search);
  const preview = searchParams.get('preview');

  // 3. 雙管齊下的判斷邏輯
  if (hostname.startsWith('career') || preview === 'career') {
    return <CareerBrochure />;
  } 
  else if (hostname.startsWith('hk-edu') || hostname.startsWith('hkedu') || preview === 'hk-edu') {
    return <HkEduBrochure />;
  } 
  else {
    return <Brochure />;
  }
}