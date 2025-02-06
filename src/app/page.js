"use client";
import { StepOne } from "@/components/stepOne";
import { StepTwo } from "@/components/stepTwo";
import { StepThree } from "@/components/stepThree";
import { StepFour } from "@/components/stepFour";
import { useState } from "react";
// import Image from "next/image";

export default function Home() {
  const [step, setStep] = useState(1)
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-[#f4f4f4]">
      { step ==1 ? <StepOne setStep={setStep}/>:<></>}
      { step ==2 ? <StepTwo setStep={setStep}/>:<></>}
      { step ==3 ? <StepThree setStep={setStep}/>:<></>}
      { step ==4 ? <StepFour />  :<></>}
      
      {/* <StepOne />
       <StepTwo /> 
      <StepThree />
      <StepFour />  */}
    </div>
  );
}
