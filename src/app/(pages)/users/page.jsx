"use client"
import React from "react";
import UserCard from "./UserCard"; // عدّل المسار حسب مكان الملف

const Page = () => {
  const users = [
    {
      name: "محمد الأحمدي",
      email: "mohammed@example.com",
      status: "مفعل",
    },
    {
      name: "ريم سعيد",
      email: "reem@example.com",
      status: "معلق",
    },
    {
      name: "فاطمة الجابري",
      email: "fatima@example.com",
      status: "مفعل",
    },
    {
      name: "يوسف الجهني",
      email: "yousef@example.com",
      status: "معلق",
    },
    {
      name: "علي الشمري",
      email: "ali@example.com",
      status: "مفعل",
    },
    {
      name: "نور القحطاني",
      email: "noor@example.com",
      status: "معلق",
    },
    {
      name: "هند السعيد",
      email: "hind@example.com",
      status: "مفعل",
    },
    {
      name: "سلمان الفهد",
      email: "salman@example.com",
      status: "معلق",
    },
    {
      name: "مريم عبد الله",
      email: "mariam@example.com",
      status: "مفعل",
    },
    {
      name: "راشد العتيبي",
      email: "rashid@example.com",
      status: "معلق",
    },
    {
      name: "أماني الجهني",
      email: "amani@example.com",
      status: "مفعل",
    },
    {
      name: "طلال النعيمي",
      email: "talal@example.com",
      status: "معلق",
    },
    {
      name: "سارة الفهد",
      email: "sarah@example.com",
      status: "مفعل",
    },
    {
      name: "عبد الله القرشي",
      email: "abdullah@example.com",
      status: "معلق",
    },
    {
      name: "محمود الحربي",
      email: "mahmoud@example.com",
      status: "مفعل",
    },
    {
      name: "جواهر التميمي",
      email: "jawaher@example.com",
      status: "معلق",
    },
    {
      name: "إبراهيم العتيبي",
      email: "ibrahim@example.com",
      status: "مفعل",
    },
    {
      name: "نوف الزهراني",
      email: "nouf@example.com",
      status: "معلق",
    },
    {
      name: "فهد العنزي",
      email: "fahd@example.com",
      status: "مفعل",
    },
    {
      name: "أحمد الرفاعي",
      email: "ahmed.r@example.com",
      status: "معلق",
    },
    {
      name: "سلوى القحطاني",
      email: "salwa@example.com",
      status: "مفعل",
    },
];


  const handleStatusChange = (name) => {
    alert(`تم تعديل حالة ${name}`);
  };

  const handleSuspend = (name) => {
    alert(`تم إيقاف ${name} مع إرسال تنبيه له`);
  };

  return (
<div className="flex flex-col relative top-24 md:flex-row sm:flex-row md:flex-wrap sm:flex-wrap gap-6 items-center justify-center px-4 md:px-10 lg:px-20 mt-24">
  {users.map((user, idx) => (
    <UserCard
      key={idx}
      name={user.name}
      email={user.email}
      status={user.status}
      onChangeStatus={() => handleStatusChange(user.name)}
      onSuspend={() => handleSuspend(user.name)}
    />
  ))}
</div>

  );
};

export default Page;
