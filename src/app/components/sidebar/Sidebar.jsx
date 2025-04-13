"use client";

import Image from "next/image";
import React, { useState } from "react";
import src from "../../../../public/img/logo.png";
import {
  Box,
  ChartArea,
  HelpCircle,
  Home,
  Notebook,
  PlusCircle,
  Settings,
  Slash,
  SquareChevronDown,
  Users,
  X,
} from "lucide-react";

import Linkes from "./Linkes";
import { motion } from "framer-motion";
import "./Sidebar.css";
const Sidebar = ({ isSidebarOpen }) => {
  const [show, setShow] = useState(false);
  const HandleShow = () => {
    setShow(!show);
  };
  return (
    <motion.div
      className="sidebar fixed z-40 top-0 bottom-0 lg:right-0 p-2 w-[300px] overflow-y-auto text-center bg-[#001976]"
      initial={{ x: "100%" }}
      animate={{ x: isSidebarOpen ? 0 : "200%" }}
      exit={{ x: "100%" }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 30,
        duration: 0.4,
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
          href={"/content"}
          icon={<Notebook size={30} />}
        />
        <Linkes label={"ادارة الباقات"} href={"/"} icon={<Box size={30} />} />
        <Linkes
          label={"احصائيات النظام"}
          href={"/"}
          icon={<ChartArea size={30} />}
        />
        <button
          onClick={HandleShow}
          className="font-bold  nav-link flex   text-2xl btn-primary hover-link
    w-[210px]
    "
        >
         <SquareChevronDown size={30} />
        </button>

        {show ? (
          <div
            className="h-auto w-[250px] z-40   rounded-2xl  absolute bottom-0
 right-3
     bg-[#072fbd]    pb-5 block gap-5"
          >
            <button className=" relative right-28 bottom-2 z-50 text-white text-2xl" onClick={HandleShow}><X/></button>
            <Linkes label={" اضافة موظف"} href={"/سس"} icon={<PlusCircle />} />

            <Linkes label={"الدعم الفني"} href={"/شس"} icon={<HelpCircle />} />

         
          </div>
        ) : (
          ""
        )}
      </ul>
    </motion.div>
  );
};

export default Sidebar;
