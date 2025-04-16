"use client"
import {
    PieChart, Pie, Cell,
 XAxis, YAxis, CartesianGrid, Tooltip,
    LineChart, Line,
  } from 'recharts';

const Charts = () => {
    const COLORS = ['#4ADE80', '#F87171', '#4F9DFF'];
    const subscriptionsStatus = [
        { name: 'نشطة', value: 700 },
        { name: 'منتهية', value: 300 },
        { name: 'موقوفة', value: 200 },
      ];
    
     
      const revenueMonthly = [
        { month: 'يناير', revenue: 1000 },
        { month: 'فبراير', revenue: 1500 },
        { month: 'مارس', revenue: 1800 },
        { month: 'أبريل', revenue: 2500 },
        { month: 'مايو', revenue: 3700 },
      ];
    
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] relative top-12 sm:flex justify-evenly'>
    
    {/* رسم بياني دائري لحالة الاشتراكات */}
    <div className="bg-white/10 p-6 rounded-2xl w-[300px]  shadow">
      <h3 className="text-xl font-semibold mb-4">حالة الاشتراكات</h3>
      <PieChart width={400} height={250}>
        <Pie
          data={subscriptionsStatus}
          cx="50%"
          cy="50%"
          outerRadius={80}
          dataKey="value"
          label
        >
          {subscriptionsStatus.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </div>

 

    {/* رسم بياني خطي للإيرادات الشهرية */}
    <div className="bg-white/10 p-6 md:w-[500px] rounded-2xl shadow">
      <h3 className="text-xl font-semibold mb-4">الإيرادات الشهرية</h3>
      <LineChart width={500} height={300} data={revenueMonthly}>
        <CartesianGrid strokeDasharray="3 3" stroke="#ffffff30" />
        <XAxis dataKey="month" stroke="#fff" />
        <YAxis stroke="#fff" />
        <Tooltip />
        <Line type="monotone" dataKey="revenue" stroke="#4ADE80" strokeWidth={3} />
      </LineChart>
    </div>
</div>
  )
}

export default Charts