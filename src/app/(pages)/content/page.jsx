"use client";

import Button from "@/app/components/inputs/Button";
import SearchInput from "@/app/components/inputs/SearchInput";
import { Pen, Trash2 } from "lucide-react";

export default function Page() {
  return (
    <div className="min-h-screen bg-[#0A1B3D] p-5 w-full">
      <div className="relative top-24 container w-full md:right-8">
     <Button label={'ابحث عن سؤال'}/>
    <SearchInput  value={'ابحث عن سؤال'}/>

        <div className="bg-[#13294B] relative top-24 rounded overflow-hidden">
          <table className="w-full text-right">
            <thead className="text-gray-300 border-b border-gray-700">
              <tr className="px-4 py-3">
                <th className="p-3">#</th>
                <th className="p-3">العنوان</th>
                <th className="p-3">تم الإنشاء</th>
                <th className="p-3">إجراءات</th>
              </tr>
            </thead>
            <tbody className="text-white">
              <tr className="border border-gray-700 bg-[#0A1B3D] hover:bg-[#0f2a50]">
                <td className="p-3 border border-gray-500">1</td>
                <td className="p-3 border border-gray-500">كيف يمكنني تسجيل الدخول؟</td>
                <td className="p-3 *: border border-gray-500">2023-12-06 | 11:27 ص</td>
                <td className="p-3 border border-gray-500">
                  <div className="flex gap-2 justify-end">
                    <button className="bg-red-600 p-2 rounded hover:bg-red-700">
                      <Trash2 />
                    </button>
                    <button className="bg-indigo-600 p-2 rounded hover:bg-indigo-700">
                      <Pen />
                    </button>
                  </div>
                </td>
              </tr>

              <tr className="border border-gray-700 bg-[#0A1B3D] hover:bg-[#0f2a50]">
                <td className="p-3 border border-gray-500">2</td>
                <td className="p-3 border border-gray-500">كيف يمكنني إنشاء حساب؟</td>
                <td className="p-3 border border-gray-500">2023-12-06 | 11:27 ص</td>
                <td className="p-3 border border-gray-500">
                  <div className="flex gap-2 justify-end">
                    <button className="bg-red-600 p-2 rounded hover:bg-red-700">
                      <Trash2 />
                    </button>
                    <button className="bg-indigo-600 p-2 rounded hover:bg-indigo-700">
                      <Pen />
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
