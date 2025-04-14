import Link from "next/link";

export default function Button({ label, link }) {
  return (
    <div className="mt- 5 ">
      <button className="bg-[#001976] w-[200px] h-[40px] text-white px-4 py-2 rounded hover:bg-[#0A1B3D]">
        <Link href={`${link}`}>{label}</Link>
      </button>
    </div>
  );
}
