
import { TableU } from "./TableU";
const UserTable = () => {
const statusColors = {
  "مفعل": "text-green-400",
  "غير مفعل": "text-red-500",
  "معلق": "text-yellow-400",
};

  return (
    <div className="overflow-x-auto  container relative top-24 sm:right-5  w-[100%] mt-10 rounded  shadow-lg">
     <TableU statusColors={statusColors}/>
    </div>
  );
};

export default UserTable;
