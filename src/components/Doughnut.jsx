import React from "react";
import {
  Bar,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend
} from "recharts";

//  You have to change it  use original data
// const data = [
//   { name: "Food", value: 1009 },
//   { name: "Shopping", value: 645 },
//   { name: "Travel", value: 645 },
//   { name: "Utilities", value: 645 },
//   { name: "Other", value: 322 },
//   { name: "Othies", value: 105 },
//   { name: "Travel (Small)", value: 210 },
//   { name: "Travel (Medium)", value: 322.5 }
// ];

const COLORS = [
  "#82ca9d", "#8884d8", "#FFBB28", "#FF8042", "#FF4444", "#AA66CC", "#33B5E5", "#0099CC"
];
const Doughnut = ({categories}) =>{

  //  You have to change it  use original data
  
  // console.log(" Category : ",categories);
  
  const dataAvailable = (categories) =>{
    if (!categories) {
      const data = [
  { name: "Food", value: 1009 },
  { name: "Shopping", value: 645 },
  { name: "Travel", value: 645 },
  { name: "Utilities", value: 645 },
  { name: "Other", value: 322 },
  { name: "Othies", value: 105 },
  { name: "Travel (Small)", value: 210 },
  { name: "Travel (Medium)", value: 322.5 }
];
  return data;
 }

 return categories;
 }

 const data = dataAvailable(categories)

  const total = categories.reduce((acc, item) => acc + item.value, 0);

  return (
    
    <div className="w-[50%] shadow-2xl bg-white rounded-[20px]  flex justify-center items-center flex-col  ">
      <h2 className=" py-4 text-2xl font-bold">Total Spent: ${total.toFixed(2)}</h2>
      <PieChart className="" width={700} height={500}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={100}
          outerRadius={160}
          fill="#8884d8"
          paddingAngle={3}
          dataKey="value"
          label={({ name, value }) => `${name}: $${value}`}  // 👈 custom label
        >
          {data.map((entry, index) => (
            <Cell className="cursor-pointer font-bold text" key={`cell-${index}`} fill={COLORS[index % COLORS.length]}  />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
}

export default Doughnut;