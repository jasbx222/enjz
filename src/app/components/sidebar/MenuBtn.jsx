"use client";

import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { motion } from "framer-motion"; // استيراد framer-motion

const MenuBtn = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      {/* الأيقونة التي تتحول بشكل سموثي سريع */}
      {isSidebarOpen ? (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.2 }} // سرعة الأنيميشن
        >
          <X
            onClick={toggleSidebar}
            className="z-50 fixed right-[20px] top-[20px]"
            size={40}
            color="#fff"
          />
        </motion.div>
      ) : (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.2 }} // سرعة الأنيميشن
        >
          <Menu
            onClick={toggleSidebar}
            className="z-50 fixed right-[20px] top-[20px]"
            size={40}
            color="#fff"
          />
        </motion.div>
      )}

      {/* الأنيميشن للـ Sidebar */}
      <Sidebar isSidebarOpen={isSidebarOpen} />
    </div>
  );
};

export default MenuBtn;
