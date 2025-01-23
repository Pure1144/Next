"use client";
import { StepOne } from "@/components/stepOne";
import { StepTwo } from "@/components/stepTwo";
import { StepThree } from "@/components/stepThree";
import { StepFour } from "@/components/stepFour";
// import Image from "next/image";

export default function Home() {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-[#f4f4f4]">
      {/* <StepOne /> */}
      {/* <StepTwo /> */}
      <StepThree />
      {/* <StepFour />  */}
    </div>
  );
}
