'use client';

import { useState } from 'react';
import { TableU } from './TableU';
import SearchInput from '@/app/components/inputs/SearchInput';
import Button from '@/app/components/inputs/Button';
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
 <Button label={'اضافة مستخدم '}/>
     
        <SearchInput value={'ابحث عن مستخدم ..'} search={search} onChange={(e)=>setSearch(e.target.value)}/>

        
     
      {/* جدول المستخدمين */}
      <TableU filteredUsers={filteredUsers}/>
   </div>
    </div>
  );
}
