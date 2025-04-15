
import {  Pen, Trash2 } from 'lucide-react';


export const Table= ({filterquestions}) => {
 
  return (
<div className="bg-[#13294B] relative top-24  rounded-lg overflow-x-auto shadow-lg">
        <table className="min-w-full border-separate" style={{ borderSpacing: '0 8px' }}>
          <thead>
            <tr className="bg-[#13294B] text-gray-300">
              <th className="py-3 px-4 text-right">#</th>
              <th className="py-3 px-4 text-right">العنوان</th>
              <th className="py-3 px-4 text-right"> الجواب</th>
              <th className="py-3 px-4 text-right">تاريخ الإنشاء</th>
              <th className="py-3 px-4 text-center">الإجراءات</th>
            </tr>
          </thead>
          <tbody>
            {filterquestions.length > 0 ? (
              filterquestions.map((q, index) => (
                <tr
                  key={q.id}
                  className="bg-[#0A1B3D] hover:bg-[#0f2a50] transition-colors"
                >
                  <td className="py-3 px-4 text-right">{index + 1}</td>
                  <td className="py-3 px-4 text-right">{q.title}</td>
                  <td className="py-3 px-4 text-right">{q.answer}</td>
                  <td className="py-3 px-4 text-right text-sm text-gray-400">
                    {q.createdAt} 
                  </td>
                  <td className="py-3 px-4 text-center flex items-center justify-center gap-2">
                    {/* أزرار الإجراءات للمستخدمين */}
                    <button
                      title="تعديل"
                      className="bg-blue-600 h-[40px] w-[40px] flex justify-center  items-center hover:bg-blue-700 text-white px-3 py-1 rounded-md text-base"
                    >
                      <Pen/>
                    </button>
                    <button
                      title="حذف"
                      className="bg-red-600 h-[40px] w-[40px] flex justify-center  items-center hover:bg-red-700 text-white px-3 py-1 rounded-md text-base"
                    >
                  <Trash2 />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="py-4 text-center text-gray-400">
                  لا توجد بيانات لعرضها.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
  );
};
