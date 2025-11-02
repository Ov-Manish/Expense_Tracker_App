import React, { useState } from "react";
import "./index.css";

import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import ExpenseSummary from "./components/ExpenseSummary";
import Week from "./components/Week";
import Bars from "./components/Bars";

const App = () => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0.0);
  const [categories, setCategories] = useState([
    "Shopping",
    "Food",
    "Travel",
    "Utilities",
    "Clothes",
    "Jewellery",
    "Electronics",
    "Household",
    "Personal",
  ]);
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [storedData, setStoredData] = useState([]);
  const [expenses, setExpenses] = useState([]);

  const [userInputObject, setUserInputObject] = useState({
    name: "",
    desc: "",
    loc: "",
    amt: 0.0,
    cat: "",
    dte: "",
    img: "",
  });

  return (
    <>
      <div className="bg-zinc-200 w-full min-h-screen flex flex-col items-center gap-8 px-4 sm:px-6 lg:px-10 py-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 p-4">
          Expense Tracker Application
        </h1>

        <ExpenseForm
          formDataValue={{
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
            userInputObject,
            setUserInputObject,
            expenses,
            setExpenses,
          }}
        />

        <h1 className="mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center">
          Expense Visualization :
        </h1>

        <ExpenseSummary
          userInputObject={userInputObject}
          setUserInputObject={setUserInputObject}
          expenses={expenses}
          setExpenses={setExpenses}
          amount={amount}
          category={category}
        />

        <h1 className="mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center">
          Expense List
        </h1>

        <ExpenseList expenses={expenses} />
      </div>
    </>
  );
};

export default App;
