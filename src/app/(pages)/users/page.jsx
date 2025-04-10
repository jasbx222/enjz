"use client"
import React from "react";
import UserCard from "./UserCard"; // عدّل المسار حسب مكان الملف

const Page = () => {
  const users = [
    {
      name: "أحمد الزهراني",
      email: "ahmed@example.com",
      status: "مفعل",
    },
    {
      name: "سارة العلي",
      email: "sara@example.com",
      status: "معلق",
    },
    {
      name: "سارة العلي",
      email: "sara@example.com",
      status: "معلق",
    },
    {
      name: "سارة العلي",
      email: "sara@example.com",
      status: "معلق",
    },
    {
      name: "سارة العلي",
      email: "sara@example.com",
      status: "معلق",
    },
    {
      name: "سارة العلي",
      email: "sara@example.com",
      status: "معلق",
    },
    {
      name: "سارة العلي",
      email: "sara@example.com",
      status: "معلق",
    },
    {
      name: "سارة العلي",
      email: "sara@example.com",
      status: "معلق",
    },
    {
      name: "سارة العلي",
      email: "sara@example.com",
      status: "معلق",
    },
    {
      name: "سارة العلي",
      email: "sara@example.com",
      status: "معلق",
    },
    {
      name: "سارة العلي",
      email: "sara@example.com",
      status: "معلق",
    },
    {
      name: "سارة العلي",
      email: "sara@example.com",
      status: "معلق",
    },
    {
      name: "سارة العلي",
      email: "sara@example.com",
      status: "معلق",
    },
    {
      name: "سارة العلي",
      email: "sara@example.com",
      status: "معلق",
    },
    {
      name: "سارة العلي",
      email: "sara@example.com",
      status: "معلق",
    },
    {
      name: "سارة العلي",
      email: "sara@example.com",
      status: "معلق",
    },
    {
      name: "سارة العلي",
      email: "sara@example.com",
      status: "معلق",
    },
    {
      name: "سارة العلي",
      email: "sara@example.com",
      status: "معلق",
    },
    {
      name: "سارة العلي",
      email: "sara@example.com",
      status: "معلق",
    },
    {
      name: "سارة العلي",
      email: "sara@example.com",
      status: "معلق",
    },
    {
      name: "سارة العلي",
      email: "sara@example.com",
      status: "معلق",
    },
    {
      name: "سارة العلي",
      email: "sara@example.com",
      status: "معلق",
    },
    {
      name: "سارة العلي",
      email: "sara@example.com",
      status: "معلق",
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
