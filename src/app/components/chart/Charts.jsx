"use client";

import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
} from "recharts";
const data  = [
    { subject: "Math", A: 120, B: 110, fullMark: 150 },
    { subject: "Chinese", A: 98, B: 130, fullMark: 150 },
    { subject: "English", A: 86, B: 130, fullMark: 150 },
    { subject: "Geography", A: 99, B: 100, fullMark: 150 },
    { subject: "Physics", A: 85, B: 90, fullMark: 150 },
    { subject: "History", A: 65, B: 85, fullMark: 150 },
  ];
const Chart1 = () => {
  return (
    <RadarChart className="relative  right-10" outerRadius={150} width={500} height={300} data={data}>
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis angle={30} domain={[0, 150]} />
      <Radar
        name="Mike"
        dataKey="A"
        stroke="#FFD700 "
        fill="#FFD700 "
        fillOpacity={0.6}
      />
      <Radar
        name="Lily"
        dataKey="B"
        stroke="#fff"
        fill="#fff"
        fillOpacity={0.6}
      />
      <Legend />
    </RadarChart>
  );
};

export default Chart1;
