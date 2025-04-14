import { Pen, Trash2 } from "lucide-react"
const data =[
  
    
      {
        cardNumber: 1,
        title: "استضافة متقدمة",
        createdAt: "2024-01-15 | 09:12 ص",
        capacity: "100 G",
        price: "750 $",
        status: "active",
        actions: ["delete", "edit"]
      },
      {
        cardNumber: 2,
        title: "باقة الشركات",
        createdAt: "2023-11-22 | 03:45 م",
        capacity: "250 G",
        price: "1200 $",
        status: "pending",
        actions: ["delete", "edit"]
      },
      {
        cardNumber: 3,
        title: "نسخة تجريبية",
        createdAt: "2025-02-10 | 10:00 ص",
        capacity: "10 G",
        price: "0 $",
        status: "expired",
        actions: ["delete", "edit"]
      },
      {
        cardNumber: 4,
        title: "خطة مطور",
        createdAt: "2024-07-01 | 01:30 م",
        capacity: "500 G",
        price: "1500 $",
        status: "active",
        actions: ["delete", "edit"]
      }
    
    
  
  
]
const statusColor={
  "active":'text-green-400'
}
const TableUsers = () => {
  return (
    <table className="w-full text-right">
    <thead className="text-gray-300 border-b border-gray-700">
      <tr className="px-4 py-3 bg-[#13294B] hover:bg-[#0f2a50]">
        <th className="p-3">رقم البطاقة</th>
        <th className="p-3">العنوان</th>
        <th className="p-3">تم الإنشاء</th>
        <th className="p-3">السعة </th>
        <th className="p-3">السعر </th>
        <th className="p-3">الحالة </th>
        <th className="p-3">إجراءات</th>
      </tr>
    </thead>
    <tbody className="text-white">
 {
  data &&
  data.map((item)=>(
    <tr key={item.cardNumber} className="border-b border-gray-700 bg-[#0A1B3D] hover:bg-[#0f2a50]">
    <td className="p-3 border border-gray-500">{item.cardNumber}</td>
    <td className="p-3  border border-gray-500">{item.title}</td>
    <td className="p-3 border border-gray-500">{item.createdAt}</td>
    <td className="p-3 border border-gray-500">{item.capacity}</td>
    <td className="p-3 border border-gray-500">{item.price}</td>
    <td className={`${item.status==="active"?"text-green-400":"text-red-400"} border border-gray-500`}>{item.status}</td>
    <td className="p-3 border border-gray-500">
      <div className="flex gap-2 justify-end">
        <button className="bg-red-600 p-2 rounded hover:bg-red-700">
          <Trash2 />
        </button>
        <button className="bg-indigo-600 p-2 rounded hover:bg-indigo-700">
          <Pen />
        </button>
      </div>
    </td>
  </tr>
  ))
 }
    </tbody>
  </table>
  )
}

export default TableUsers