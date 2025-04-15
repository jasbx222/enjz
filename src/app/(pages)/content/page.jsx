'use client';

import { useState } from 'react';
import SearchInput from '@/app/components/inputs/SearchInput';
import Button from '@/app/components/inputs/Button';
import { Table } from './Table';
const questions = [
  {
    id: 1,
    title: 'how to login',
    answer: 'login',
    createdAt: '2025-04-13',
  },



];

export default function Page() {
  const [search, setSearch] = useState('');

  // فلترة المستخدمين بناءً على البحث
  const filterquestions = questions.filter((q) =>
    q.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div dir="rtl" className="min-h-screen bg-[#0A1B3D] conatiner    w-[100%]   text-white">
   <div className=' relative top-24 lg:right-4'>
 <Button label={'اضافة جواب '}/>

 <SearchInput value={'ابحث عن سؤال او جواب ..'} search={search} onChange={(e)=>setSearch(e.target.value)}/>
  
      {/* جدول المستخدمين */}
      <Table filterquestions={filterquestions}/>
   </div>
    </div>
  );
}
