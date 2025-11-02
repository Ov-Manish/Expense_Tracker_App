import React from "react";
import {
  PieChart,
  Pie,
  Cell,
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
  "#0099CC",
];

const Doughnut = ({ categories }) => {
  const dataAvailable = (categories) => {
    if (!categories) {
      const data = [
        { name: "Food", value: 1009 },
        { name: "Shopping", value: 645 },
        { name: "Travel", value: 645 },
        { name: "Utilities", value: 645 },
        { name: "Other", value: 322 },
        { name: "Othies", value: 105 },
        { name: "Travel (Small)", value: 210 },
        { name: "Travel (Medium)", value: 322.5 },
      ];
      return data;
    }

    return categories;
  };

  const data = dataAvailable(categories);
  const total = categories.reduce((acc, item) => acc + item.value, 0);

  return (
    <div className="w-full sm:w-[90%] md:w-[70%] lg:w-[50%] shadow-2xl bg-white rounded-2xl flex flex-col justify-center items-center p-4 sm:p-6 md:p-8 my-6">
      <h2 className="py-2 sm:py-4 text-xl sm:text-2xl md:text-3xl font-bold text-center">
        Total Spent: ${total.toFixed(2)}
      </h2>

      {/* Responsive chart container */}
      <div className="w-full h-[300px] sm:h-[400px] md:h-[500px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius="40%"
              outerRadius="70%"
              fill="#8884d8"
              paddingAngle={3}
              dataKey="value"
              label={({ name, value }) => `${name}: $${value}`}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  className="cursor-pointer"
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend layout="horizontal" verticalAlign="bottom" align="center" />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Doughnut;
