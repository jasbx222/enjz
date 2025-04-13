import { FileWarning, HelpCircle, NutOffIcon, PlusCircle } from "lucide-react";
import { X } from "lucide-react";
import Linkes from "./Linkes";

const Setting = ({x}) => {
  return (
    <div className="h-auto w-[250px] z-40   rounded-2xl  absolute bottom-0 right-3 bg-[#475174]  pb-5 block gap-5">
      <button
        className=" relative right-28 bottom-2 z-50 text-white text-2xl"
        onClick={x}
      >
        <X />
      </button>
      <Linkes
        label={" اضافة موظف"}
        href={"/سس"}
        icon={<PlusCircle size={20} />}
      />
      <Linkes
        label={"الدعم الفني"}
        href={"/شس"}
        icon={<HelpCircle size={20} />}
      />
      <Linkes
        label={"التنبيهات"}
        href={"/شس"}
        icon={<NutOffIcon size={20} />}
      />
      <Linkes
        label={"الشروط والاحكام"}
        href={"/شس"}
        icon={<FileWarning size={20} />}
      />
    </div>
  );
};

export default Setting;
