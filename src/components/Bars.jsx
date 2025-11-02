import React, { useEffect } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const COLORS = [
  "#82ca9d",
  "#8884d8",
  "#FFBB28",
  "#FF8042",
  "#FF4444",
  "#AA66CC",
  "#33B5E5",
];

const Bars = ({ weeks }) => {
  return (
    <div className="w-full sm:w-[90%] md:w-[70%] lg:w-[50%] shadow-2xl bg-white rounded-2xl flex flex-col justify-center items-center p-4 sm:p-6 md:p-8 my-6">
      <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-bold mb-4">
        Expense Summary
      </h2>

      {/* Responsive chart container */}
      <div className="w-full h-[300px] sm:h-[400px] md:h-[500px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={weeks}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value">
              {weeks.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Bars;
