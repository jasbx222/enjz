import { ShieldAlert } from "lucide-react";
const users = [
  {
    name: "محمد الأحمدي",
    email: "mohammed@example.com",
    status: "مفعل",
  },
  {
    name: "ريم سعيد",
    email: "reem@example.com",
    status: "معلق",
  },
  {
    name: "فاطمة الجابري",
    email: "fatima@example.com",
    status: "غير مفعل",
  },
  {
    name: "محمد الأحمدي",
    email: "mohammed@example.com",
    status: "مفعل",
  },
  {
    name: "ريم سعيد",
    email: "reem@example.com",
    status: "معلق",
  },
];
export const TableU = ({ statusColors }) => {
  return (
    <table className="w-full text-sm text-center rtl table-auto border-separate border-spacing-y-4">
      <thead className="text-white bg-gradient-to-r from-[#001976] to-[#004aad] text-lg">
        <tr>
          <th className="py-4 px-6 ">الاسم</th>
          <th className="py-4 px-6 ">البريد الإلكتروني</th>
          <th className="py-4 px-6">الحالة</th>
          <th className="py-4 px-6">تعديل</th>
          <th className="py-4 px-6 ">إيقاف</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, idx) => (
          <tr
            key={idx}
            className="bg-gradient-to-r from-[#001976] to-[#004aad] text-white rounded-3xl shadow-md"
          >
            <td className="py-4 px-6 font-bold text-lg">{user.name}</td>
            <td className="py-4 px-6 text-white/90 text-xl">{user.email}</td>
            <td
              className={`py-4 px-6font-semibold text-xl ${
                statusColors[user.status]
              }`}
            >
              {user.status}
            </td>
            <td className="py-4 px-6">
              <button className="bg-white  w-[80px] h-[30px]  text-[#001976] rounded-3xl px-5 py-2 font-semibold text-sm hover:bg-yellow-500 hover:text-black transition-all duration-300 shadow-lg">
                تعديل الحالة
              </button>
            </td>
            <td className="py-4 px-6">
              <button className="bg-red-600 w-fit md:w-[200px] h-[30px] text-white rounded-3xl px-5 py-2 flex items-center justify-center gap-2 text-sm hover:bg-red-700 transition-all duration-300 shadow-lg">
                <ShieldAlert size={20} />
                إيقاف مع تنبيه
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
