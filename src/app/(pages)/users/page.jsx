"use server"
import { SearchInput } from "./SearchInput";
import UserTable from "./UserTable";

const Page = () => {
  return (
    <div className="container mx-auto w-[100%] p-4">
      <SearchInput />
      <UserTable />
    </div>
  );
};

export default Page;
