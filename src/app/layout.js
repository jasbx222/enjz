import "./globals.css";
import MenuBtn from "./components/sidebar/MenuBtn";


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
