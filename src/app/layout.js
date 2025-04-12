import { Noto_Kufi_Arabic } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/sidebar/Sidebar";
import MenuBtn from "./components/sidebar/MenuBtn";

const noto_Kufi_Arabic  = Noto_Kufi_Arabic({
 subsets:['latin']
});

export const metadata = {
  title: "انجز ",
  description: 'انجز داش بورد '
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body  className="bg-[#141758] ">
        <MenuBtn/>
        <main>{children}</main>
      </body>
    </html>
  );
}
