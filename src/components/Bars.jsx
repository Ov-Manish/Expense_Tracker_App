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
  ResponsiveContainer
} from "recharts";


// const data = [
//   { name: "Food", value: 25 },
//   { name: "Shopping", value: 645 },
//   { name: "Travel", value: 645 },
//   { name: "Utilities", value: 645 },
//   { name: "Other", value: 322 },
//   { name: "Othies", value: 105 },
//   { name: "Travel (Small)", value: 210 },
//   { name: "Travel (Medium)", value: 322.5 }
// ];

const COLORS = [
  "#82ca9d", "#8884d8", "#FFBB28", "#FF8042", "#FF4444", "#AA66CC", "#33B5E5"
];
const Bars  = ({weeks})=> {

  //  console.log("Weeks Value ",weeks);
   
   
  
  
  return (
    <div className="w-[50%] shadow-2xl bg-white rounded-[20px]  flex justify-center items-cente flex-col">
      <h2 style={{ textAlign: "center" }}>Expense Summary</h2>
      <ResponsiveContainer>
        <BarChart data={weeks} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />   {/* Categories at bottom */}
          <YAxis />                  {/* Values on left */}
          <Tooltip />                {/* Hover details */}
          <Legend />                 {/* Show label for bars */}
           <Bar dataKey="value">
            {weeks.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Bars;