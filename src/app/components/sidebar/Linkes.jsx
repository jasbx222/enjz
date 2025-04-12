"use client"
import Link from "next/link";
import {  usePathname } from "next/navigation";
const Linkes = ({ label, href, icon }) => {
const path= usePathname()
const isActive=path===href;

  return (
    <li className={`font-bold ${isActive ?"bg-white text-gray-900":''} nav-link flex   text-2xl btn-primary hover-link`}>
      <Link href={href}>{label} </Link>
      {icon}
    </li>
  );
};

export default Linkes;
