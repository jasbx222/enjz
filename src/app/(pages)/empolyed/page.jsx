"use client";

import { useState } from "react";
import SearchInput from "@/app/components/inputs/SearchInput";
import Button from "@/app/components/inputs/Button";
import { Table } from "./Table";
const empolyeds = [
  {
    id: 1,
    name: "jassim mohamed",
  email:'jassim@gmail.com',
  phone: "012287855",
  permision: "admin",
    createdAt: "2025-04-13",
  },
];

export default function Page() {
  const [search, setSearch] = useState("");

  const filterempolyeds = empolyeds.filter((em) =>
    em.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      dir="rtl"
      className="min-h-screen bg-[#0A1B3D] conatiner    w-[100%]   text-white"
    >
      <div className=" relative top-24 lg:right-6">
        <Button  link={'/empolyed/add_new/'} label={"اضافة موظف "} />

        <SearchInput
          value={"ابحث عن موظف .."}
          search={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <Table filterempolyeds={filterempolyeds} />
      </div>
    </div>
  );
}
