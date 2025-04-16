import { useState } from 'react'
import Linkes from './Linkes'
import Home from '@/app/page'
import { Box, ChartArea, Notebook, SquareChevronDown, Users } from 'lucide-react'
import Setting from "./Setting";
const ULlinkes = () => {
     const [show, setShow] = useState(false);
      const HandleShow = () => {
        setShow(!show);
      };
  return (
<ul className="navbar block relative top-[20px]  nav-link">
        <Linkes
          label={"الصفحة الرئيسية "}
          href={"/home"}
          icon={<Home size={20} />}
        />
        <Linkes
          label={"ادارة المستخدمين"}
          href={"/users"}
          icon={<Users size={20} />}
        />

        <Linkes
          label={"ادارة المحتوى"}
          href={"/content"}
          icon={<Notebook size={20} />}
        />
        <Linkes
          label={"ادارة الباقات"}
          href={"/bouquet"}
          icon={<Box size={30} />}
        />
        <Linkes
          label={"احصائيات النظام"}
          href={"/coordinates"}
          icon={<ChartArea size={20} />}
        />
        <button
          onClick={HandleShow}
          className="font-bold  nav-link flex   text-2xl btn-primary hover-link  w-[210px] "
        >
          <SquareChevronDown size={20} />
        </button>

        {show ? <Setting  x={HandleShow}/> : ""}
      </ul>
  )
}

export default ULlinkes