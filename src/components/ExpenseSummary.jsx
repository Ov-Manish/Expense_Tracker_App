import React , {useState , useMemo} from 'react'
import Doughnut from './Doughnut'
import Bars from './Bars'
import Week from './Week';


export const  weeksInMonths = (year, month, expenses) => {
let monthWeeks = [];
let weekNumber = 1;
let weekSum = 0;

let lastDate = new Date(year, month + 1, 0).getDate(); // last day of month

for (let day = 1; day <= lastDate; day++) {
  // Sum all expenses for this particular day
  const dailySum = expenses.filter(exp => new Date(exp.dte).getDate() === day && new Date(exp.dte).getMonth() === month && new Date(exp.dte).getFullYear() === year)
    .reduce((acc, curr) => acc + curr.amt, 0);

  weekSum += dailySum;

  let currentDate = new Date(year, month, day);

  // End of week (Saturday) or last day of month
  if (currentDate.getDay() === 6 || day === lastDate) {
    monthWeeks.push({
      name: `week ${weekNumber}`,
      value: weekSum // sum of a perticular day the money you spent on that day 
    });
    // console.log("WEEK SUM FROM SUMMARY : ",weekSum);
    weekNumber++; //incrementing week number (in october there are almost 5 weeks )
    weekSum = 0; // reseting values to 0 for next week calculations
  }
}

return monthWeeks; // returning the array
};
const ExpenseSummary = ({name,amount,category,date , expenses , setExpenses , userInputObject, setUserInputObject}) => {
  // Weeks In Month Method : 
    const [year, setYear] = useState(new Date().getFullYear());
    const [month, setMonth] = useState(new Date().getMonth());

  



const weeks = useMemo(() => weeksInMonths(year, month, expenses), [year, month, expenses]);

const allCategory = (expenses) => {
  const categoryMap = {};

  for (let i = 0; i < expenses.length; i++) {
    const { cat, amt } = expenses[i];

    if (!categoryMap[cat]) {
      categoryMap[cat] = 0;
    }

    categoryMap[cat] += amt; // sum all expenses in the same category
  }

  // convert object to array for Doughnut chart
  const CategorySpent = Object.entries(categoryMap).map(([name, value]) => ({
    name,
    value
  }));

  return CategorySpent;
};

  const categories = useMemo(() => allCategory(expenses, userInputObject), [expenses, userInputObject]);

  return (
    <div className='w-full flex gap-5 p-4'>
{
  useMemo(() => (
      <div className='w-full flex gap-5 p-4'>
      <Bars expenses={expenses} weeks={weeks}/>
      <Doughnut expenses={expenses} categories={categories}/>
      
    </div>
  )
    , [weeks , expenses,categories])
}
    </div>
  )
}

export default ExpenseSummary