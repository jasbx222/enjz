'use client';

import { Menu, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { motion } from "framer-motion";
import { getToken } from "@/app/lib/tokens/getToken";

const MenuBtn = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const fetchToken = async () => {
      const storedToken = await getToken('token');
      setToken(storedToken);
    };

    fetchToken();
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.key.toLowerCase() === 'o') {
        e.preventDefault();
        setIsSidebarOpen(true);
      } else if (e.ctrlKey && e.key.toLowerCase() === 'c') {
        e.preventDefault();
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      {isSidebarOpen ? (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.2 }}
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
          transition={{ duration: 0.2 }}
        >
          <Menu
            onClick={toggleSidebar}
            className="z-50 fixed right-[20px] top-[20px]"
            size={40}
            color="#fff"
          />
        </motion.div>
      )}

      {isSidebarOpen && token && <Sidebar isSidebarOpen={isSidebarOpen} />}
    </div>
  );
};

export default MenuBtn;
