
import Image from "next/image";
import src from "../../../../public/img/logo.png";
import { motion } from "framer-motion";
import "./Sidebar.css";
import ULlinkes from "./ULlinkes";

const Sidebar = ({ isSidebarOpen }) => {
 
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
      <ULlinkes/>
      
    </motion.div>
  );
};

export default Sidebar;
