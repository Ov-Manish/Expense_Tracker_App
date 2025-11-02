import React, { useState, useEffect } from "react";

const ExpenseForm = ({ formDataValue }) => {
  const {
    name,
    amount,
    category,
    date,
    setName,
    setAmount,
    setCategory,
    setDate,
    categories,
    setCategories,
    description,
    setDescription,
    location,
    setLocation,
    expenses,
    setExpenses,
    userInputObject,
    setUserInputObject,
  } = formDataValue;

  const [yes, setYes] = useState(false);

  const handleInputObject = () => {
    const newExpense = {
      name: name,
      desc: description,
      loc: location,
      amt: Number(amount),
      cat: category,
      dte: date,
      img: "/icons8-dollar-sign-40.png",
    };

    if (
      newExpense.name === "" ||
      newExpense.desc === "" ||
      newExpense.loc === "" ||
      newExpense.amt === "" ||
      newExpense.cat === "" ||
      newExpense.dte === ""
    ) {
      return;
    }

    setUserInputObject(newExpense);
    setExpenses((prev) => [...prev, newExpense]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  return (
    <>
      <div className="bg-white w-full flex flex-col gap-5 rounded-2xl shadow-2xl overflow-hidden">
        {/* Content Container */}
        <div className="flex flex-col md:flex-row w-full p-4">
          {/* Left Side */}
          <div className="px-4 py-6 flex flex-col w-full md:w-1/2 justify-center items-center">
            {/* Description section */}
            <div className="w-full flex flex-col gap-3">
              <p className="text-base md:text-lg font-medium">
                What did you spend on?
              </p>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                type="text"
                placeholder="Title..."
              />
              <input
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                type="text"
                placeholder="Description..."
              />
              <input
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                type="text"
                placeholder="Location..."
              />
            </div>

            <div className="mt-5 w-full">
              <h1 className="text-2xl md:text-3xl font-bold">Amount $:</h1>
              <input
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="p-3 mt-2 text-green-500 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-green-400"
                type="text"
                placeholder="$ amount..."
              />
            </div>
          </div>

          {/* Right Side */}
          <div className="flex flex-col w-full md:w-1/2 items-center justify-start mt-5 md:mt-0 md:ml-5">
            <h1 className="font-bold text-xl md:text-2xl mb-3">Category</h1>
            <div className="flex flex-col w-full justify-center items-center gap-3 px-4">
              <select
                onChange={(e) => handleCategory(e)}
                className="w-full border-2 px-4 py-3 rounded-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-green-400"
              >
                <option value="Select Category" selected disabled>
                  Select Category
                </option>
                {categories.map((option, idx) => (
                  <option key={idx} value={option}>
                    {option}
                  </option>
                ))}
              </select>

              <input
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="py-3 w-full px-4 border rounded-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-green-400"
                type="date"
              />
            </div>

            <div className="flex flex-wrap justify-center md:justify-start w-full m-4 gap-3">
              {expenses.map((exp, idx) => (
                <div key={idx} className="bg-green-400 rounded-xl py-2 px-4">
                  <h1 className="text-center font-bold text-lg md:text-xl">
                    {exp.cat}
                  </h1>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 p-4">
          <button className="font-semibold rounded-md bg-white border-2 border-black py-3 px-10 w-full md:w-auto text-black hover:bg-gray-100 transition">
            Cancel
          </button>
          <button
            onClick={(e) => {
              setYes(!yes);
              handleInputObject(e);
            }}
            className="font-bold rounded-md bg-green-500 text-white py-3 px-8 w-full md:w-auto hover:bg-green-600 transition"
          >
            Add Expense
          </button>
        </div>
      </div>
    </>
  );
};

export default ExpenseForm;
