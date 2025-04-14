export default function Button({label}) {
    return (
   <div className="mt- 5 ">
             <button className="bg-[#001976] w-[200px] h-[40px] text-white px-4 py-2 rounded hover:bg-[#0A1B3D]">
               {label}
             </button>
           </div>
    );
  }
  