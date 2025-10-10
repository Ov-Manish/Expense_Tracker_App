import React ,{useState}from 'react'
import "./index.css"

import ExpenseForm from './components/ExpenseForm'
import ExpenseList from './components/ExpenseList'
import ExpenseSummary from './components/ExpenseSummary'
import Week from './components/Week'
import Bars from './components/Bars'

const App = () => {

  const [name, setName] = useState("")
  const [amount, setAmount] = useState(0.0);
  const [categories, setCategories] = useState(["Shopping" , "Food" , "Travel" , "Utilities" , "Clothes" ,"Jewellery" , "Electronics" , "Household" , "Personal"]);
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("")
  const [location, setLocation] = useState("")
  const [date, setDate] = useState("");
  const [storedData, setStoredData] = useState([])
  const [expenses, setExpenses] = useState([]);


// Inputs from user
    const [userInputObject, setUserInputObject] = useState({
          name : "",
          desc : "",
          loc : "",
          amt : 0.0,
          cat : "",
          dte : "",
          img : ""
      })

  

 
// Create form fields for name, amount, category, and date.
// On submit: validate inputs, add a new expense object to the state array.
// Clear the form after submission.

// Weeks Calculations

  return (
    <>
    <div className='bg-zinc-200 w-full flex items-center flex-col gap-5 ' >
    <h1 className='text-3xl text-center text-8xl font-bold mb-4 p-4'>Add New Expenses</h1>
      <ExpenseForm formDataValue={{name,amount,category,date,setName,setAmount,setCategory,setDate,categories,setCategories , description , setDescription , location ,setLocation , userInputObject , setUserInputObject , expenses , setExpenses}}  />

       <h1 className='mt-4 text-8xl font-bold'>Expense Visualization :</h1>
      <ExpenseSummary userInputObject={userInputObject} setUserInputObject={setUserInputObject} expenses={expenses} setExpenses={setExpenses} amount={amount} category={category} />

       <h1 className='mt-5 ml-1 font-bold text-8xl text-black text-center'>Expense List</h1>
      <ExpenseList expenses={expenses} />

      
    </div>
    </>
  )
}

export default App