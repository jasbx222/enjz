// app/layout.js أو app/layout.tsx
import { Noto_Naskh_Arabic } from 'next/font/google';
import "./globals.css";
import MenuBtn from "./components/sidebar/MenuBtn";

const notoNaskhArabic = Noto_Naskh_Arabic({
  subsets: ['arabic'],  // تأكد من استخدام مجموعة الحروف العربية
  weight: '400',        // يمكنك اختيار الوزن المناسب
  style: 'normal',      // أو 'italic' إذا كنت بحاجة
});

export const metadata = {
  title: "انجز",
  description: "انجز داش بورد"
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      
      <body className={`${notoNaskhArabic.className} bg-[#141758]`}>

        <header  className=' flex justify-between items-center'>
        <MenuBtn />
     
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
