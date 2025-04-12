"use client"
import React from "react";
import UserCard from "./UserCard"; 
import swal from 'sweetalert';
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
      name: "ريم سعيد",
      email: "reem@example.com",
      status: "معلق",
    },
    {
      name: "ريم سعيد",
      email: "reem@example.com",
      status: "معلق",
    },
    {
      name: "ريم سعيد",
      email: "reem@example.com",
      status: "معلق",
    },
 
];


  const handleStatusChange = () => {
 swal({
  title:'تم تعديل الحالة بنجاح',
  icon:'success',
  buttons:'حسنا',
  dangerMode:false
 })
  };

  const handleSuspend = (name) => {
  swal({
    title:`${name}تم ايقاف حساب `,
    
  })
  };

  return (
<div

className="flex  container bg-[#] h-[100%]  relative top-24 flex-col   md:flex-row  md:flex-wrap sm:flex-wrap gap-6 items-center justify-center px-4 md:px-10 lg:px-20 mt-24">
 
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
