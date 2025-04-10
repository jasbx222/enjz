import Image from "next/image";
import React from "react";
import src from "../../../../public/img/logo.png";
import "./Sidebar.css";
import { Box, ChartArea, Notebook, Settings, Users } from "lucide-react";
import Linkes from "./Linkes";
const Sidebar = () => {
  return (
    <div>
      <div className="sidebar fixed z-40 top-0 bottom-0 lg:right-0 p-2 w-[300px] overflow-y-auto text-center bg-[#001976]">
        <div className="flex img items-center justify-center relative top-[20px]">
          {" "}
          <Image src={src} width={200} height={200} alt="logo" />
        </div>
        <ul className="navbar block  relative top-[20px] gap-24">
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
      </div>
    </div>
  );
};

export default Sidebar;
