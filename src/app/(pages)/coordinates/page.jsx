"use client"
import { BadgeDollarSign, BookMarked, Users } from 'lucide-react';
import Charts from './Charts';

  
  export default function Page() {
 
  
    const stats = {
      users: 1200,
      documents: 3400,
      revenue: 12500,
    };
  

    return (
        <div className="min-h-screen container mx-auto bg-[#141758] relative top-24 text-white p-6 space-y-8">
        {/* البطاقات العلوية */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          <div className="bg-white/10 w-full max-w-[320px] h-[100px] p-4 rounded-2xl shadow text-center flex flex-col justify-center">
            <h2 className="text-lg font-semibold flex flex-col items-center">
              <Users className="mb-1" />
              <span>عدد المستخدمين</span>
            </h2>
            <p className="text-2xl font-bold mt-2">{stats.users}</p>
          </div>
    
          <div className="bg-white/10 w-full max-w-[320px] h-[100px] p-4 rounded-2xl shadow text-center flex flex-col justify-center">
            <h2 className="text-lg font-semibold flex flex-col items-center">
              <BookMarked className="mb-1" />
              <span>الوثائق المرفوعة</span>
            </h2>
            <p className="text-2xl font-bold mt-2">{stats.documents}</p>
          </div>
    
          <div className="bg-white/10 w-full max-w-[320px] h-[100px] p-4 rounded-2xl shadow text-center flex flex-col justify-center">
            <h2 className="text-lg font-semibold flex flex-col items-center">
              <BadgeDollarSign className="mb-1" />
              <span>الإيرادات</span>
            </h2>
            <p className="text-2xl font-bold mt-2">{stats.revenue}</p>
          </div>
        </div>
    
        {/* الرسوم البيانية */}
        <Charts />
      </div>
    );
  }
  