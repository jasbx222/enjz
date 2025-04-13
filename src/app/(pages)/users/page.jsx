'use client';

import { useState } from 'react';
import { TableU } from './TableU';
const users = [
  {
    id: 1,
    name: 'Ahmed Mohamed',
    email: 'ahmed@gmail.com',
    status: 'متوقف',
    createdAt: '2025-04-13',
    time: '10:47 ص',
  },
  {
    id: 2,
    name: 'Layla Ali',
    email: 'layla@hotmail.com',
    status: 'نشط',
    createdAt: '2025-04-10',
    time: '3:20 م',
  },
  {
    id: 3,
    name: 'Yousef Ibrahim',
    email: 'yousef@yahoo.com',
    status: 'معلق',
    createdAt: '2024-12-06',
    time: '11:15 ص',
  },
  // أضف المزيد من المستخدمين حسب الحاجة
];

export default function Page() {
  const [search, setSearch] = useState('');

  // فلترة المستخدمين بناءً على البحث
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div dir="rtl" className="min-h-screen bg-[#0A1B3D]    w-[100%]  p-6 text-white">
   <div className=' relative top-24 lg:right-6'>
   <button className="bg-[#00C49F] h-[50px] w-[200px] hover:bg-[#00b18d] text-white px-6 py-2 rounded-md text-sm">
          + إضافة مستخدم
        </button>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6">
        <h1 className="text-2xl font-bold relative top-5 mb-4 sm:mb-0">المستخدمين</h1>
        
      </div>

      {/* صندوق البحث */}
      <div className="mb-4 flex justify-center relative bottom-8">
        <input
          type="text"
          placeholder="ابحث عن مستخدم..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-[100%] text-center h-[50px] sm:w-64 bg-[#13294B] border border-gray-500 rounded-md px-4 py-2 focus:outline-none focus:border-[#00C49F] text-sm placeholder-gray-300"
        />
      </div>

      {/* جدول المستخدمين */}
      <TableU filteredUsers={filteredUsers}/>
   </div>
    </div>
  );
}
