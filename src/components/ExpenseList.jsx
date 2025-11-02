import React, { useState, useEffect } from "react";

const ExpenseList = ({ expenses }) => {
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const total = expenses.reduce((sum, exp) => sum + Number(exp.amt), 0);
    setTotalAmount(total);
  }, [expenses]);

  return (
    <div className="p-4 shadow-2xl bg-white w-full mb-4 rounded-xl">
      {/* Header Section */}
      <div className="flex flex-col items-center justify-center mb-6">
        <h1 className="px-6 py-3 mt-3 rounded-md border font-bold text-zinc-800 text-center text-sm sm:text-base md:text-lg">
          Total Money Spent:{" "}
          <span className="text-green-600">${totalAmount}</span>
        </h1>
      </div>

      <h1 className="text-3xl md:text-5xl font-bold text-center md:text-left mb-6">
        All Expenses
      </h1>

      {/* List Section */}
      <div className="flex flex-col gap-4">
        {expenses.map((exp, idx) => (
          <div
            key={idx}
            className="bg-zinc-100 p-3 flex flex-col sm:flex-row sm:items-center gap-4 rounded-lg shadow-sm hover:shadow-md transition"
          >
            {/* Image */}
            <div className="flex-shrink-0 flex justify-center sm:justify-start">
              <img
                src={exp.img}
                alt="expense"
                className="h-12 w-12 sm:h-14 sm:w-14 bg-green-400 rounded-full object-cover"
              />
            </div>

            {/* Expense Details */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full">
              <div className="flex flex-col">
                <h1 className="font-bold text-base sm:text-lg">{exp.name}</h1>
                <p className="text-sm text-gray-600">{exp.desc}</p>
                <h3 className="font-medium text-sm sm:text-base text-gray-700">
                  Location: {exp.loc}
                </h3>
              </div>

              {/* Date & Amount */}
              <div className="flex flex-row sm:flex-row items-center justify-between w-full sm:w-auto mt-2 sm:mt-0">
                <h3 className="text-gray-600 text-sm sm:text-base">
                  {exp.dte}
                </h3>
                <h1 className="ml-auto sm:ml-4 rounded-lg py-2 px-4 bg-red-400 text-white font-semibold text-base sm:text-xl">
                  - ${exp.amt}
                </h1>
              </div>
            </div>
          </div>
        ))}

        {/* When no expenses */}
        {expenses.length === 0 && (
          <p className="text-center text-gray-500 italic mt-4">
            No expenses added yet.
          </p>
        )}
      </div>
    </div>
  );
};

export default ExpenseList;
