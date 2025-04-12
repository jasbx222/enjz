"use client";

import Image from "next/image";
import React from "react";
import src from "../../../../public/img/logo.png";
import { Box, ChartArea, Home, Notebook, Settings, Users } from "lucide-react";

import Linkes from "./Linkes";
import { motion } from "framer-motion"; // استيراد framer-motion
import './Sidebar.css'
const Sidebar = ({ isSidebarOpen }) => {
  return (
    <motion.div
      className="sidebar fixed z-40 top-0 bottom-0 lg:right-0 p-2 w-[300px] overflow-y-auto text-center bg-[#001976]"
      initial={{ x: '100%' }}
      animate={{ x: isSidebarOpen ? 0 : '100%' }}
      exit={{ x: '100%' }}
      transition={{
        type: "spring", 
        stiffness: 500, 
        damping: 30,
        duration: 0.4
      }}
    >
      <div className="flex img items-center justify-center relative  top-[20px]">
        <Image src={src} width={200} height={200} alt="logo" />
      </div>
      <ul className="navbar block relative top-[20px]  nav-link">
      <Linkes
          label={"الصفحة الرئيسية "}
          href={"/home"}
          icon={<Home size={30} />}
        />
        <Linkes
          label={"ادارة المستخدمين"}
          href={"/users"}
          icon={<Users size={30} />}
        />
     
        <Linkes
          label={"ادارة المحتوى"}
          href={"/"}
          icon={<Notebook size={30} />}
        />
        <Linkes label={"ادارة الباقات"} href={"/"} icon={<Box size={30} />} />
        <Linkes
          label={"احصائيات النظام"}
          href={"/"}
          icon={<ChartArea size={30} />}
        />
        <Linkes
          label={"اعدادات النظام"}
          href={"/"}
          icon={<Settings size={30} />}
        />
      </ul>
    </motion.div>
  );
};

export default Sidebar;
