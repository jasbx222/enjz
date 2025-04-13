'use client';

import { CarTaxiFront, FileWarning, IdCard, User2, UserCheck, Users } from "lucide-react";

export default function Card() {
  const stats = [
    { label: 'مجموع المستخدمين', value: 15, icon:<Users/>},
    { label: 'مجموع الباقات', value: 69, icon: <IdCard/> },
    { label: 'مستخدمين  متوقفين', value: 1, icon:<FileWarning/> },
    { label: 'مجموع الموظفين', value: 2, icon:<User2/> },
    { label: 'مجموع العملاء', value: 5, icon:<UserCheck/>},
  ];


  return (
    <div dir="rtl" className="min-h-screen container  relative lg:right-8 bg-[] text-white p-4">
      {/* الشريط العلوي للإحصائيات */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-6">
        {stats.map((item, idx) => (
          <div
            key={idx}
            className="bg-[#1b4180]  relative top-5 rounded-lg py-4 px-2 flex flex-col items-center border border-gray-700"
          >
            <div className="text-3xl mb-1">{item.icon}</div>
            <div className="text-sm text-gray-300">{item.label}</div>
            <div className="text-lg font-bold">{item.value}</div>
          </div>
        ))}
      </div>

     
    </div>
  );
}
