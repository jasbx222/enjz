'use client';

import React, { useState } from 'react';
import { ShieldAlert, UserCheck, UserX } from "lucide-react";

const statusColors = {
  "مفعل": "text-green-400",
  "غير مفعل": "text-gray-400",
  "معلق": "text-yellow-400",
};

const UserCard = ({ name, email, status, avatar, onChangeStatus, onSuspend }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [reason, setReason] = useState('');



  const handleClosePopup = () => {
    setShowPopup(false);
    setReason('');
  };  const handleSuspendClick = () => {
    setShowPopup(true);
  };

  const handleSubmitReason = () => {
    alert(`سبب الإيقاف: ${reason}`);
    setShowPopup(false);
    setReason('');
  };

  return (
    <div>
      <div className="bg-gradient-to-r from-[#001976] to-[#004aad] w-[320px] h-[250px] text-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center gap-5">
        {/* معلومات المستخدم */}
        <div className="flex-1 w-full relative top-[20px]">
          <h2 className="text-2xl font-extrabold text-white text-center tracking-wide">{name}</h2>
          <p className="text-sm text-white/90 text-center mt-1">{email}</p>
          <p className={`mt-2 text-sm font-medium ${statusColors[status]} text-center`}>
            الحالة: {status}
          </p>
        </div>
    
        {/* الأزرار */}
        <div className="flex flex-col gap-5 w-full  justify-center items-center">
          <button
            onClick={onChangeStatus}
            className="flex-1 bg-white h-[40px] w-[120px] relative bottom-4 text-[#001976] py-3 px-8 rounded-3xl text-xl font-semibold transform transition-all duration-300 hover:bg-yellow-500 hover:text-black hover:scale-105 shadow-2xl hover:shadow-xl"
          >
            تعديل الحالة
          </button>
       
          <button
            onClick={handleSuspendClick}
            className="flex-1 bg-red-600 h-[40px]  w-[150px] relative bottom-4 hover:bg-red-700 text-white py-3 px-8 rounded-3xl text-xl font-semibold flex items-center justify-center gap-3 transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-xl"
          >
            <ShieldAlert size={20} />
            إيقاف مع تنبيه
          </button>
        </div>
      </div>

      {/* نافذة البوب-أب */}
      {showPopup && (
        <div className="fixed inset-0 bg-[#0A1B3D] bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-[450px] p-8 rounded-3xl shadow-xl transform transition-all duration-300 ease-in-out">
            <h2 className="text-2xl font-semibold text-center mb-6">سبب الإيقاف</h2>
            <textarea
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              placeholder="أدخل السبب هنا..."
              rows="8"
              className="w-full p-4 rounded-3xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-6 text-lg"
            />
            <div className="flex justify-between">
              <button
                onClick={handleClosePopup}
                className="bg-gray-300  h-[40px] w-[120px] relative  text-black py-3 px-8 rounded-3xl font-semibold hover:bg-gray-400 transition-all duration-200 text-lg"
              >
                إغلاق
              </button>
              <button
                onClick={handleSubmitReason}
                className="bg-red-600 h-[40px] w-[120px] relative  text-white py-3 px-8 rounded-3xl font-semibold hover:bg-red-700 transition-all duration-200 text-lg"
              >
                إرسال
              </button>
            </div>
          </div>
        </div>      )}
    </div>
  );
};

export default UserCard;
