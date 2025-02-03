import { useState } from "react";

export const StepThree = ({setStep}) => {
  const [formValue, setFormValue] = useState({});
  const [errors, setErrors] = useState({});

  const onSubmit = () => {
     let nextStep = false;
     const date = formValue.date;
     const curdate = new Date();
     const year = curDate.getFullYear();
     const month = curDate.getMonth();
     const day =curDate.getDay();
     const minDate = [year - 18, month + 1, day].join("-");
     const maxDate = [year, month + 1, day].join("-");
     console.log(minDate);
     console.log(date);


     if (!formValue.date) {
        setErrors((prev) => ({ ...prev,
             date: "Та төрсөн он,сар, өдрөө оруулна уу?" 
            }));
            nextStep = false;
        } else if (date > maxDate) {
         setErrors((prev) => ({ ...prev, date: "Төрсөн он одоогийн онооноос өмнө байх ёстой.",
          }));
          nextStep = false;
        } else if (date > minDate) {
            setErrors((prev) => ({ ...prev, date: "Та 18 ба түүнээс дээш настай байх ёстой.",
             }));
             nextStep = false;
        } else  {
             setErrors((prev) => ({ ...prev, date: "",
                 }));
                 nextStep = true;
        }
  
   if (formValue.profilePicture === null) {
    setErrors((prev)=>({
        ...prev,
        profileImage:"Профайл зургаа оруулна уу?",
    }));
    nextStep = false;
    } else {
    setErrors((prev)=>({
        ...prev,
        profileImage:"",}));
    nextStep = true;
   }
   if (nextStep) {
    setStep(4);
   }
};

const backStep = () =>{
    setStep(2);
};




function onDateOfBirthNameChange(e) {
        setFormValue({...formValue, date: e.target.value});
         };
         const imageOnChange = (e) => {
            const file = e.target.file[0];
            var reader = new FileReader();
            reader.onloadend = function (){
                setFormValue((prev)=>({...prev,profilePicture: reader.result}))
            };
            reader.readAsDataURL(file);
         }
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    };
 
    // Зураг оруулахын тулд дараах хуудсаас оруулсан  https://medium.com/@raedswan121/how-to-upload-image-and-preview-it-using-reactjs-43b27c751255

    const close = () =>{
        setFormValue({...formValue, profilePicture: null});
    };

    return (
        <div className="w-[480px]  bg-white border rounded-x1 p-8">
          <img className="w-[60px] h-[60px]" src="pinecone-logo.png" />
          <h2 className="text-[26px] text-foreground font-semibold">Join Us! 😎</h2>
          <p className="text-[18px] whitespace-nowrap text-[#8E8E8E]">
            Please provide all current information accurately.
          </p>
     
          <div className="flex flex-col mt-10">
            <label htmlFor="EmailName">
              Date of birth <span className="text-red-500">*</span>
            </label>
     
            <input
              id="dateOfBirthName"
              type="date"
              onChange={onDateOfBirthNameChange}
              className="id=dateOfBirthName w-full border py-3 px-2 rounded-xl"
              placeholder="yyyy.mm.dd"
            />
     
            {errors.dateOfBirthName ? (
              <p className="text-red-500">{errors.dateOfBirthName}</p>
            ) : (
              <></>
            )}
          </div>
     
          <label  htmlFor="profileImageName">
              Profile image<span className="text-red-500">*</span>
            </label>
     
          <div className="flex flex-col items-center justify-center gap-y-2 cursor-pointer bg-gray-100 h-[240px] border rounded-md border-solid">
          {/* <input hidden="" type="file" name="profileImage"></input> */}
            
     
            {/* <label htmlFor="profileImageName">upload</label>     
            <input                                            //зурган зориулж label нэмсэн.
              type="file"                                     //зурган зориулсан төрөл
              id="profileImageName"
              onChange={onProfileImageNameChange}            //зураг оруулж ирэх
              className="id=profileImageName w-full  h-[180px] font-bold text-black border py-3 px-2 rounded-xl hidden"
              placeholder="Browse or Drop Image"
            /> */}
     
                     <input type="file" onChange={handleChange} />                   
                     <img src={file} />
     
                   
     
            {errors.profileImageName ? (
              <p className="text-red-500">{errors.profileImageName}</p>
            ) : (
              <></>
            )}
          </div>
     
          <div className="flex space-between">
            <button
            onClick={onBack}
              className="border w-[128px] h-[44px] bg-white text-black h-16 mt-10 rounded-xl font text-xl"
            >
              Back
            </button>
     
            <button
              onClick={onSubmit}
              className="border w-[280px] h-[44px] bg-black text-white h-16 mt-10 rounded-xl font text-xl"
     
            >
              {" "}
              Continue 3/3{" "}
            </button>
          </div>
        </div>
      );

     