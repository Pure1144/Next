import  { useState} from "react";

export const StepOne = () => {

    // const [firstName, setFirstName] = useState('');

    const [formValue, setFormValue] = useState({});
    const [errors, setErrors] = useState({});


       const onSubmit =()=>{
        console.log(formValue);
        
        if(!formValue.firstName || formValue.firstName.length === 0) {
            setErrors((prev)=> ({...prev, firstName:"Заавал нэр орууна уу?"})); 
        }else{
            setErrors((prev)=> ({...prev, firstName:""}))};
        if(!formValue.secondName || formValue.secondName?.length === 0) {
            setErrors((prev)=> ({...prev, secondName:"Заавал нэр орууна уу?"})); 
        }else{
            setErrors((prev)=> ({...prev, secondName:""}))};
        if(!formValue.userName || formValue.userName?.length === 0) {
            setErrors((prev)=> ({...prev, userName:"Заавал нэр орууна уу?"})); 
        }else{
        setErrors((prev)=> ({...prev, userName:""}))};
        
           
            
    
        };
        // setErrors({})   

        // console.log("working");
      
        
    //    console.log(errors);
       

       const onFirstNameChange = (e) => 
        setFormValue({...formValue, firstName: e.target.value});

       const onSecondNameChange = (e) => 
        setFormValue({...formValue, secondName: e.target.value});

       const onUserNameChange = (e) => 
        setFormValue({...formValue, userName: e.target.value});
     



    return (
        <div className="w-[480px] h-[655px] bg-white border rounded-x1 p-8">
            <img className="w-[60px] h-[60px]" src="pinecone-logo.png"/>
            <h2 className="text-[26px] text-foreground font-semibold">Join Us! 😎</h2>
            <p className="text-[18px] whitespace-nowrap text-[#8E8E8E]">Please provide all current information accurately.</p>


            <div className="flex flex-col mt-10">   
             <label htmlFor="firstName">
                First Name <span className="text-red-500">*</span>
                </label>

             <input id="firstName"
             onChange={onFirstNameChange}
             className="id=firstName w-full border py-3 px-2 rounded-xl" 
            placeholder="Placeholder"
            />  

             {errors.firstName ? (
                <p className="text-red-500">{errors.firstName}</p> 
             ) : (
             <></>
            )}

             </div>

             <div className="flex flex-col mt-10">   
             <label htmlFor="secondName">
                Second Name <span className="text-red-500">*</span>
                </label>

             <input id="secondName"
             onChange={onSecondNameChange}
             className="id=secondName w-full border py-3 px-2 rounded-xl" 
            placeholder="Placeholder"
            />  

             {errors.secondName ? (
                <p className="text-red-500">{errors.secondName}</p> 
             ) : (
             <></>
            )}

             </div>

             <div className="flex flex-col mt-10">   
             <label htmlFor="userName">
                UserName <span className="text-red-500">*</span>
                </label>

             <input id="userName"
             onChange={onUserNameChange}
             className="id=userName w-full border py-3 px-2 rounded-xl" 
            placeholder="userName"
            />  

             {errors.userName ? (
                <p className="text-red-500">{errors.userName}</p> 
             ) : (
             <></>
            )}

             </div>
             

             <button onClick={onSubmit}
             className="border w-full bg-black text-white h-16 mt-10 rounded-xl font-bold text-xl">Continue 1/3</button>
        </div>
    );
};