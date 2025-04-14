
import Button from "@/app/components/inputs/Button";
import SearchInput from "@/app/components/inputs/SearchInput";
import TableUsers from "./Table";

export default function Page() {
  return (
    <div className="min-h-screen bg-[#0A1B3D] p-5 w-full">
      <div className="relative top-24 container w-full md:right-8">
        {/* btn */}
        <Button label={'اضافة باقة'}/>
    <SearchInput value={'ايحث عن باقتك..'}/>

        <div className="bg-[#2d323f] relative top-24 rounded overflow-hidden">
     
     {/* الجدول */}
<TableUsers/>

        </div>
      </div>
    </div>
  );
}
