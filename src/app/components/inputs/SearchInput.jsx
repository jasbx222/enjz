
export default function SearchInput ({
  value,
  onChange,
  search
}) {
 
  return (
    <div className="mb-4 flex container justify-center relative bottom-8 top-12">
    <input
      type="text"
      placeholder={value}
      value={search}

      onChange={onChange}
      className="w-[100%] text-center text-white h-[50px]  bg-[#13294B] border border-gray-500 rounded-md px-4 py-2 focus:outline-none focus:border-[#00C49F] text-sm placeholder-gray-300"
    />
  </div>

  );
};
