"use client";

import { DeleteIcon } from "lucide-react";
import { useState } from "react";
export const TableQ = () => {
  const [faqs, setFaqs] = useState([
    {
      id: 1,
      question: "ما هي مدة الاشتراك؟",
      answer: "مدة الاشتراك شهر واحد قابل للتجديد.",
    },
    {
      id: 2,
      question: "هل يمكن ترقية الباقة؟",
      answer: "نعم، يمكنك ترقية الباقة من خلال صفحة الاشتراكات.",
    },
  ]);
  return (
    <div className="bg-gray-600 relative top-72 md:top-24 rounded-lg shadow-md border border-gray-600 overflow-x-auto">
      <table className="min-w-full text-xl text-right text-white">
        <thead className="bg-gradient-to-r from-blue-500 to-blue-700 text-white">
          <tr>
            <th className="px-6 md:px-10 py-6">السؤال</th>
            <th className="px-6 md:px-10 py-6">الإجابة</th>
            <th className="px-6 md:px-10 py-6 text-center">إجراء</th>
          </tr>
        </thead>
        <tbody>
          {faqs.length === 0 ? (
            <tr>
              <td
                colSpan="3"
                className="px-6 md:px-10 py-6 text-center text-gray-200 text-xl"
              >
                لا توجد أسئلة حالياً
              </td>
            </tr>
          ) : (
            faqs.map((faq) => (
              <tr
                key={faq.id}
                className="border-b hover:bg-gray-600 transition duration-300"
              >
                <td className="px-6 md:px-10 py-6">{faq.question}</td>
                <td className="px-6 md:px-10 py-6">{faq.answer}</td>
                <td className="px-6 md:px-10 py-6 text-center">
                  <button className="text-red-500 hover:underline text-xl transition duration-300">
                    <DeleteIcon />
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};
