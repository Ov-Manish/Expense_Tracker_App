import React , {useState,useEffect} from 'react'

const ExpenseForm = ({formDataValue}) => {

    const {name,amount,category,date,setName,setAmount,setCategory,setDate,categories,setCategories,description,setDescription , location , setLocation , expenses , setExpenses , userInputObject, setUserInputObject} = formDataValue;

//   console.log("FORM DATA => ",formDataValue);
  
    const [yes, setYes] = useState(false)

    
    useEffect(() => {
    //   console.log("Data from Inputs : ",userInputObject);
        
      
    }, [userInputObject])
     
    const handleInputObject = ()=>{
        
          const newExpense = {
            name: name, 
            desc: description,
            loc: location,
            amt: Number(amount),
            cat: category,
            dte: date,
            img: "/icons8-dollar-sign-40.png"
         };

         if ((newExpense.name  == "" || newExpense.desc  == "" || newExpense.loc  == "" || newExpense.amt  == "" || newExpense.cat  == "" || newExpense.dte  == "")) {
            return;
            // setUserInputObject(null)

            // console.log("USER INPUTS FIELD : ",userInputObject);
            
         }

        setUserInputObject(newExpense)

        setExpenses((prev)=> [...prev , newExpense]);
        
    }

    const addExpenses = () =>{
        
        
    }
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        // console.log("Form Submittedd " ,name ,amount,category,date);  
    }
    const handleCategory = (e)=>{
        setCategory(e.target.value)
    }

    
    

  return (
    <>
    
    <div className=' bg-white  w-full  flex flex-col gap-5 rounded-[20px] shadow-2xl overflow-hidden' >

    <div className='flex w-full p-4 '>

        {/* Left Side */}
        <div className='px-4 py-8  flex flex-col w-[50%] justify-center items-center '>
            
            {/* Description section */}
            <div className='w-full flex flex-col gap-2'>
                
                <p className='text-[16px]'>What did you spend on ?</p>
                <input value={name} onChange={(e)=>{setName(e.target.value)}} className='p-3  border-[1px] rounded-[5px] ' type="text" placeholder='title...' />
                <input value={description}  onChange={(e)=>{setDescription(e.target.value)}} className='p-3  border-[1px] rounded-[5px] ' type="text" placeholder='Description...' />
                <input value={location} onChange={(e)=>{setLocation(e.target.value)}} className='p-3  border-[1px] rounded-[5px] ' type="text" placeholder='location...'/>
            </div>
            <div className='mt-4 w-full  '>
                <h1 className='text-3xl font-bold'>Amount $ : </h1>
                <input value={amount} onChange={(e)=>{setAmount(e.target.value)}}  className='p-4 mt-2 text-green-400 border-[1px] rounded-[5px]  w-[100%]' type="text" placeholder='$ amount...' />
            </div>

            
        </div>

        {/* Right Side */}
        <div className=' flex w-[50%] items-center justify-start mt-5 ml-5 flex-col'>
                <h1 className=' font-bold text-2xl mb-3'>Category</h1>
            <div className=' flex flex-col w-full justify-center items-center gap-2 px-4'>

                <select onChange={(e)=>{
                    handleCategory(e)
                }} className="w-[100%] border-2 px-6 py-3 rounded-[5px] cursor-pointer">
                    <option className='text-black' value="Select Category" selected disabled>Select Category</option>
                    {
                        categories.map((option,idx)=>(
                            <option className='text-black' key={idx} value={option}>{option}</option>
                        ))
                    }
                </select>
                <input value={date} onChange={(e)=>{
                        setDate(e.target.value)
                }} className='py-3 w-[100%] px-6   border-[1px] rounded-[5px] cursor-pointer ' type="date" />
            </div>
            <div className='h-[100%] w-full m-6 ml-8 flex '>
                {expenses.map((exp , idx)=>(
                    <div className='flex m-2  '>
                    <div className=' py-2 px-2 h-[30%] bg-green-400 rounded-xl'>
                        <h1 className=' text-center font-bold text-xl'>{exp.cat}
</h1>
                    </div>
                    </div>
                ))}
            </div>
            
        </div>

    </div>
        <div className=' flex justify-between items-center p-3'>
                <button className='font-semibold  rounded-[5px] bg-white border-2 border-black py-3 cursor-pointer px-10   text-black'>Cancel </button>
                <button onClick={(e)=>{setYes(!yes)
                    handleInputObject(e)
                }} className='text-semibold  rounded-[5px] bg-green-500 font-bold border-black py-3 cursor-pointer px-4 mr-5 outline-none  text-white'>  Add Expense</button>
            </div>
    </div>
    
    </>
  )
}

export default ExpenseForm