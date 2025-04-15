'use client';

import { useState } from 'react';
import SearchInput from '@/app/components/inputs/SearchInput';
import Button from '@/app/components/inputs/Button';
import { Table } from './Table';
const PaQ = [
  {
    id: 1,
    name: 'new one',
    size: '50  G',
    status: 'نشطة',
    createdAt: '2025-04-13',
    price: '15000',
  },
 
];

export default function Page() {
  const [search, setSearch] = useState('');


  const filterpaq = PaQ.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div dir="rtl" className="min-h-screen bg-[#0A1B3D] conatiner    w-[100%]   text-white">
   <div className=' relative top-24 lg:right-4'>
 <Button label={'اضافة باقة '}/>

 <SearchInput value={'ابحث عن باقة ..'} search={search} onChange={(e)=>setSearch(e.target.value)}/>
  
      <Table filterpaq={filterpaq}/>
   </div>
    </div>
  );
}
