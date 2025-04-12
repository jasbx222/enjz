'use client';
import {  DeleteIcon } from 'lucide-react';
import { useState } from 'react';

export default function Page() {
  const [faqs, setFaqs] = useState([
    { id: 1, question: 'ما هي مدة الاشتراك؟', answer: 'مدة الاشتراك شهر واحد قابل للتجديد.' },
    { id: 2, question: 'هل يمكن ترقية الباقة؟', answer: 'نعم، يمكنك ترقية الباقة من خلال صفحة الاشتراكات.' },
  ]);

  const [newQuestion, setNewQuestion] = useState('');
  const [newAnswer, setNewAnswer] = useState('');

  const addFAQ = () => {
    if (!newQuestion.trim() || !newAnswer.trim()) return;
    const newFaq = {
      id: Date.now(),
      question: newQuestion,
      answer: newAnswer,
    };
    setFaqs([newFaq, ...faqs]);
    setNewQuestion('');
    setNewAnswer('');
  };

  const deleteFAQ = (id) => {
    setFaqs(faqs.filter(faq => faq.id !== id));
  };

  return (
    <div dir="rtl" className="min-h-screen relative   md:right-12 container w-[100%] top-24 py-12 px-6 flex justify-center">
      <div className="w-full max-w-6xl space-y-8">
        {/* العنوان */}
        <h1 className="text-4xl font-bold text-white text-right">إدارة الأسئلة الشائعة</h1>

        {/* نموذج الإضافة */}
        <div className="bg-gray-700 h-[200px] rounded-lg shadow-md p-8 border border-gray-600 space-y-6">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="السؤال"
              value={newQuestion}
              onChange={(e) => setNewQuestion(e.target.value)}
              className="p-5 border relative top-5 h-[50px] border-gray-500 rounded-lg text-center text-xl text-white bg-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <input
              type="text"
              placeholder="الإجابة"
              value={newAnswer}
              onChange={(e) => setNewAnswer(e.target.value)}
              className="p-5 border relative top-5 h-[50px] border-gray-500 rounded-lg text-center text-xl text-white bg-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div className="text-center relative top-12">
            <button
              onClick={addFAQ}
              className="bg-blue-500 h-[50px] w-[200px] text-white px-8 py-4 rounded-lg hover:bg-blue-600 transition duration-300 text-xl"
            >
              إضافة
            </button>
          </div>
        </div>

        {/* جدول الأسئلة */}
        <div className="bg-gray-600 relative top-24 rounded-lg shadow-md border border-gray-600 overflow-x-auto">
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
                  <td colSpan="3" className="px-6 md:px-10 py-6 text-center text-gray-500 text-xl">
                    لا توجد أسئلة حالياً
                  </td>
                </tr>
              ) : (
                faqs.map((faq) => (
                  <tr key={faq.id} className="border-b hover:bg-gray-600 transition duration-300">
                    <td className="px-6 md:px-10 py-6">{faq.question}</td>
                    <td className="px-6 md:px-10 py-6">{faq.answer}</td>
                    <td className="px-6 md:px-10 py-6 text-center">
                      <button
                        onClick={() => deleteFAQ(faq.id)}
                        className="text-red-500 hover:underline text-xl transition duration-300"
                      >
                        <DeleteIcon/>
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
