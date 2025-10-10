import React ,{useState , useEffect} from 'react'

const ExpenseList = ({expenses}) => {

  const [totalAmount, setTotalAmount] = useState(0)
  const [weekFilter, setWeekFilter] = useState(false)
  useEffect(() => {
    const total = expenses.reduce((sum, exp) => sum + Number(exp.amt), 0);
    setTotalAmount(total);
  }, [expenses]);

  // const handleWeekFileter = ()=>{
  //   setWeekFilter(!weekFilter)
  // }
  
  
  return (
    <div className='p-4 shadow-2xl bg-white w-full mb-2' >
      <div className='  h-[70%]'>
      {/* filter buttons */}
      <div className='flex justify-center'>
       
        <h1 className='px-8  py-4 mt-4 mr-2 rounded-[5px] border-1 font-bold text-zinc-800 '>Total Money Spent  : $ {totalAmount} </h1>
      </div>
      <h1 className='text-7xl font-bold'>All List </h1>
      {/* List Section we are gonna use array */}
      <div>
        {
          expenses.map((exp , idx)=>(
            <div >
            <div className=' bg-zinc-200 ml-1 mr-1 p-2 flex  items-center gap-2  rounded-[5px] font-semibold mt-5'>
              <img className=' h-[50px] w-[50px] bg-green-400 rounded-[50%] object-fill ' src={exp.img}></img>
            <div className='w-full flex justify-between items-center'>
            <div className='flex flex-col font-light'>
            <h1 className='font-bold'>{exp.name}</h1>
              <p>{exp.desc}</p>
              <h3 className='font-medium'>location : {exp.loc}</h3>
            </div>
            <h3>{exp.dte}</h3>
            <h1 className=' rounded-xl p-4 bg-red-400 text-2xl mr-4'>- {exp.amt}$</h1>
            </div>
            </div>
             </div>
          ))
        }
      </div>
      </div>
      
    </div>
  )
}

export default ExpenseList