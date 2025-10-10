 From ExpenseList.jsx
 
 {/* <div className='flex  items-center gap-2'>
        <h1  className=' ml-1 cursor-pointer px-2  rounded-[50px] border-2 border-blue-400 bg-blue-100 text-blue-500 font-semibold '>All</h1>
        <button onClick={(e)=>{
          handleWeekFileter();
        }} className=' ml-1 cursor-pointer px-2  rounded-[50px] border-2 border-zinc-400 bg-blue-100 text-zinc-600 font-semibold '>Week</button>
        <button className=' ml-1 cursor-pointer px-2  rounded-[50px] border-2 border-zinc-400 bg-blue-100 text-zinc-600 font-semibold '>Monthly</button>
    </div> 
    */}



From ExpenseForm.jsx: 

    // useEffect(() => {
    //     console.log("Name : ",name);
    //     console.log("Amount : ",amount);
    //     console.log("Description : ",description);
    //     console.log("Location : ",location);
    //     console.log("Selected Category : ",category);
    //     console.log("Date : ",date);
    // }, [yes])


From ExpenseSummary.jsx : 

  // console.log("EXENSESSSS  ==== > ",expenses);
    

    // useMemo(()=>{console.log("Expenses : " , expenses);},[])
  
  

    // const weeksInMonths = (year, month)=>{ 
    //   let monthWeeks = [];//weeks in a month
    //   let startingDate  = new Date(year , month , 1).getDate(); // first date fo the month
    //   let lastDate  = new Date(year , month + 1 , 0).getDate() // last date of the month
    //   let weekNumber = 1 ;

    //   console.log("Last Date : ",lastDate);
    //   console.log("Last Amount : ",amount);

    //   for (let day = 1; day <= lastDate; day++) {
    //     let singleWeek = []; //single week
    //     startingDate = new Date(year , month , day)
    //     singleWeek.push(day)

    //     if (startingDate.getDay() === 6 || day === lastDate) {
    //       monthWeeks.push({
    //         name : `week ${weekNumber}`,
    //         value : amount
    //       })
    //       singleWeek = [];
    //       weekNumber++;
    //     } 
    //   }
    //   return monthWeeks

    // }

  // console.log("Date in String  : ",expenses.dte);
  
  // console.log("Expense Value for Sumary component : ",expenses);


  ===============

  
  // Date Where did you Spent the money in a Month 
  
  // the of Writing this method causing me the Input Violation related input time taking so long 
  // const allCategory = (expenses)=>{
  //   const CategorySpent = [];
  //   let totalCost = 0
  //   // console.log("Expese array : ",expenses);

  //   // const catObject  = expenses;

  //   for (let i = 0; i < expenses.length; i++) {
  //     if (expenses[i].cat == userInputObject.cat) {
  //       totalCost = expenses.reduce((acc , exp) => acc + exp.amt , 0 ) 
        
  //     }

  //     CategorySpent.push({
  //       name : expenses[i].cat,
  //       value : expenses[i].amt
  //     })
      
  //   }

  //   return CategorySpent;

  // }

  // this way of Writing the method causing the another violation of input chanes taking too much time

//   const allCategory = (expenses, userInputObject) => {
//   const CategorySpent = [];

//   // calculate total for the selected category once
//   const totalCost = expenses
//     .filter(exp => exp.cat === userInputObject.cat)
//     .reduce((acc, exp) => acc + exp.amt, 0);

//   // push each expense normally
//   for (let i = 0; i < expenses.length; i++) {
//     CategorySpent.push({
//       name: expenses[i].cat,
//       value: expenses[i].amt
//     });
//   }

//   console.log("Total for selected category:", totalCost);

//   return CategorySpent;
// };


// const allCategory = (expenses, userInputObject) => {
//   const CategorySpent = [];
//   let totalCost = 0;

//   for (let i = 0; i < expenses.length; i++) {
//     const { cat, amt } = expenses[i];

//     // build category array
//     CategorySpent.push({
//       name: cat,
//       value: amt
//     });

//     // calculate selected category total at the same time
//     if (cat === userInputObject.cat) {
//       totalCost += amt;
//     }
//   }

//   // console.log("Total for selected category:", totalCost);

//   return CategorySpent;
// };