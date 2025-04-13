'use client';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LabelList,
  Label,
  ResponsiveContainer,
  Legend,
} from 'recharts';

const data = [
  { name: 'صفحة 1', uv: 4000, pv: 2400 },
  { name: 'صفحة 2', uv: 3000, pv: 1398 },
  { name: 'صفحة 3', uv: 2000, pv: 9800 },
  { name: 'صفحة 4', uv: 2780, pv: 3908 },
  { name: 'صفحة 5', uv: 1890, pv: 4800 },
  { name: 'صفحة 6', uv: 2390, pv: 3800 },
  { name: 'صفحة 7', uv: 3490, pv: 4300 },
];

const BarChartComponent = () => {
  return (
    <div className="w-full   fixed top-80 md:top-64 h-[300px] bg-[#] rounded-lg p-4">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 15, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid stroke="#1C2A4A" strokeDasharray="3 3" />
          <XAxis dataKey="name" stroke="#ffffff">
            <Label
              value="صفحات الموقع"
              offset={-5}
              position="insideBottom"
              style={{ fill: '#ffffff' }}
            />
          </XAxis>
          <YAxis
            stroke="#ffffff"
            label={{
              value: 'زيارات الصفحة',
              angle: -90,
              position: 'insideLeft',
              textAnchor: 'middle',
              style: { fill: '#ffffff' },
            }}
          />
          <Tooltip contentStyle={{ backgroundColor: '#13294B', border: 'none' }} labelStyle={{ color: '#fff' }} />
          <Legend wrapperStyle={{ color: '#ffffff' }} />
          <Bar dataKey="pv" fill="#00C49F">
            <LabelList dataKey="name" position="insideTop" angle={45} fill="#ffffff" />
          </Bar>
          <Bar dataKey="uv" fill="#8884d8">
            <LabelList dataKey="uv" position="top" fill="#ffffff" />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartComponent;
