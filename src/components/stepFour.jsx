import { useState } from "react";

export const StepFour = () => {
  return (
    <div className="w-[480px]  bg-white border rounded-x1 p-8">
      <img className="w-[60px] h-[60px]" src="pinecone-logo.png" />
      <h2 className="text-[26px] text-foreground font-semibold">
        You're All Set! 🔥
      </h2>
      <p className="text-[18px] whitespace-nowrap text-[#8E8E8E]">
        We have received your submission. Thank you.
      </p>
    </div>
  );
};
