"use client"
import { Search } from "lucide-react";
import { useState } from "react";
export const SearchInput = () => {
  const [search, setSearch] = useState();
  return (
    <div className="flex justify-center relative top-5 items-center">
      <div className="max-w-md mx-auto ">
        <div className="relative top-12 flex gap-5">
    
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            id="default-search"
            className="block  w-[300px] p-6 h-[40px] ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>
    </div>
  );
};
