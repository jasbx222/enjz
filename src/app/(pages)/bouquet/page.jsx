"use client";
import { useState } from "react";

export default function Page() {
  const [plans, setPlans] = useState([
  
  ]);

  const toggleStatus = (id) => {
    setPlans(
      plans.map((plan) =>
        plan.id === id ? { ...plan, active: !plan.active } : plan
      )
    );
  };

  const deletePlan = (id) => {
    setPlans(plans.filter((plan) => plan.id !== id));
  };

  return (
    <div className="min-h-screen  py-10 conatier w-[100%] relative top-24 px-4 flex justify-center">
      <div className="w-full max-w-6xl text-right">
        <h1 className="text-3xl font-bold text-[#141758] mb-8">
          إدارة الباقات
        </h1>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse  text-white rounded-xl shadow text-sm md:text-base">
            <thead className="bg-[#141758] text-white">
              <tr>
                <th className="p-4">اسم الباقة</th>
                <th className="p-4">السعر</th>
                <th className="p-4">السعة</th>
                <th className="p-4">الميزات</th>
                <th className="p-4">الحالة</th>
                <th className="p-4 text-center">الإجراءات</th>
              </tr>
            </thead>
            <tbody>
              {plans.map((plan) => (
                <tr key={plan.id} className="border-t text-right">
                  <td className="p-4">{plan.name}</td>
                  <td className="p-4">{plan.price} ريال</td>
                  <td className="p-4">{plan.storage}</td>
                  <td className="p-4">{plan.features}</td>
                  <td className="p-4">
                    <span
                      className={`px-3 py-1  rounded-full text-white text-sm `}
                    >
                      {plan.active ? "نشطة" : "موقوفة"}
                    </span>
                  </td>
                  <td className="p-4  flex justify-around gap-5 space-x-reverse">
                    <button
                      onClick={() => toggleStatus(plan.id)}
                      className="bg-yellow-500 w-[90px] text-white px-3 py-1 rounded hover:bg-yellow-600"
                    >
                      {plan.active ? "إيقاف" : "تفعيل"}
                    </button>
                    <button
                      onClick={() => deletePlan(plan.id)}
                      className="bg-red-600 text-white   w-[90px] px-3 py-1 rounded hover:bg-red-700"
                    >
                      حذف
                    </button>
                  </td>
                </tr>
              ))}
              {plans.length === 0 && (
                <tr>
                  <td colSpan="6" className="text-center p-6 text-gray-500">
                    لا توجد باقات حالياً
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
