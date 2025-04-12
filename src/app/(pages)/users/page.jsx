"use client";
import { useState } from "react";
import UserTable from "./UserTable";
import { Search } from "lucide-react";
const Page = () => {
  const [search, setSearch] = useState();

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-center items-center">
        <div className="max-w-md mx-auto ">
          <div className="relative top-12 flex gap-5">
            <Search size={40} color="#fff" />
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              id="default-search"
              className="block  w-[400px] p-6 h-[40px] ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
        </div>
      </div>

      <UserTable />
    </div>
  );
};

export default Page;
