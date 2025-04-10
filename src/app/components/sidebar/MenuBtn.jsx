"use client";

import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import Sidebar from "./Sidebar";

const MenuBtn = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      
      {isSidebarOpen ? (
        <X
          onClick={toggleSidebar}
          className="z-50 fixed right-[250px]"
          size={40}
          color="#fff"
        />
      ) : (
        <Menu
          onClick={toggleSidebar}
          className="z-50 fixed right-[20px]"
          size={40}
          color="#001999"
        />
      )}


      {isSidebarOpen && <Sidebar />}
    </div>
  );
};

export default MenuBtn;
