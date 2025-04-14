"use client";

import Button from "@/app/components/inputs/Button";
import SearchInput from "@/app/components/inputs/SearchInput";
import { Pen, Trash2 } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen bg-[#0A1B3D] p-5 w-full ">
      <div className="relative top-24 container w-full md:right-8">
     <Button label={'اضافة موظف'} link={'/empolyed/add_new/'}/>
    <SearchInput  value={'ابحث عن موظف'}/>

        <div className="bg-[#13294B] relative top-24 rounded overflow-x-auto">
          <table className="w-full text-right">
            <thead className="text-gray-300 border border-gray-700">
              <tr className="px-4 py-3">
                <th className="p-3 ">#</th>
                <th className="p-3">الاسم</th>
                <th className="p-3">الايميل </th>
                <th className="p-3">رقم الهاتف </th>
                <th className="p-3">العنوان</th>
                <th className="p-3">إجراءات</th>
              </tr>
            </thead>
            <tbody className="text-white">
              

              <tr className="border border-gray-700 bg-[#0A1B3D] hover:bg-[#0f2a50]">
                <td className="p-3 border border-gray-500">1</td>
                <td className="p-3 border border-gray-500">جاسم محمد   </td>
                <td className="p-3  border border-gray-500">jassim@skmsm.com</td>
                <td className="p-3 border border-gray-500">02525812004145</td>
                <td className="p-3 border border-gray-500">baghdad</td>
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
