'use client';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const data = [
    { name: 'يناير', uv: 400, pv: 240, amt: 2400 },
    { name: 'فبراير', uv: 300, pv: 139, amt: 2210 },
    { name: 'مارس', uv: 200, pv: 980, amt: 2290 },
    { name: 'أبريل', uv: 278, pv: 390, amt: 2000 },
    { name: 'مايو', uv: 189, pv: 480, amt: 2181 },
  ];
const Chart = () => {
  return (
    <div className="w-full h-[300px]  relative top-12 right-56">
      <ResponsiveContainer width="80%" height="80%">
        <LineChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
