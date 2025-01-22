import { useState } from "react";

export const StepTwo = () => {
  // const [firstName, setFirstName] = useState('');

  const [formValue, setFormValue] = useState({});
  const [errors, setErrors] = useState({});

  const onSubmit = () => {
    console.log(formValue);

    if (!formValue.mailName || formValue.mailName.length === 0) {
      setErrors((prev) => ({ ...prev, mailName: "Майл хаягаа оруулна уу?" }));
    } else {
      setErrors((prev) => ({ ...prev, mailName: "" }));
    }

 


const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};






    if (!formValue.phoneNumberName || formValue.phoneNumberName?.length === 0) {
      setErrors((prev) => ({
        ...prev,
        phoneNumberName: "Утасны дугаараа орууна уу?",
      }));
    } else {
      setErrors((prev) => ({ ...prev, phoneNumberName: "" }));
    }
    if (!formValue.password || formValue.password?.length === 0) {
      setErrors((prev) => ({ ...prev, password: "Нууц үгээ орууна уу?" }));
    } else {
      setErrors((prev) => ({ ...prev, password: "" }));
    }
    if (!formValue.confirmPassword || formValue.confirmPassword?.length === 0) {
      setErrors((prev) => ({
        ...prev,
        confirmPassword: "Нууц үгээ давтаж орууна уу?",
      }));
    } else {
      setErrors((prev) => ({ ...prev, confirmPassword: "" }));
    }
  };

  // setErrors({})

  // console.log("working");

  //    console.log(errors);

  const onMailNameChange = (e) =>
    setFormValue({ ...formValue, mailName: e.target.value });

  const onPhoneNumberNameChange = (e) =>
    setFormValue({ ...formValue, phoneNumberName: e.target.value });

  const onPasswordChange = (e) =>
    setFormValue({ ...formValue, password: e.target.value });

  const onConfirmPasswordChange = (e) =>
    setFormValue({ ...formValue, confirmPassword: e.target.value });

  //    const onBackChange = (e) =>
  //     setFormValue({...formValue, back: e.target.value});

  return (
    <div className="w-[480px]  bg-white border rounded-x1 p-8">
      <img className="w-[60px] h-[60px]" src="pinecone-logo.png" />
      <h2 className="text-[26px] text-foreground font-semibold">Join Us! 😎</h2>
      <p className="text-[18px] whitespace-nowrap text-[#8E8E8E]">
        Please provide all current information accurately.
      </p>

      <div className="flex flex-col mt-10">
        <label htmlFor="mailName">
          Email <span className="text-red-500">*</span>
        </label>

        <input
          id="mailName"
          onChange={onMailNameChange}
          className="id=mailName w-full border py-3 px-2 rounded-xl"
          placeholder="purevdorj@enlight.mn"
        />

        {errors.mailName ? (
          <p className="text-red-500">{errors.mailName}</p>
        ) : (
          <></>
        )}
      </div>

      <div className="flex flex-col mt-10">
        <label htmlFor="phoneNumberName">
          Phone number <span className="text-red-500">*</span>
        </label>

        <input
          id="phoneNumberName"
          onChange={onPhoneNumberNameChange}
          className="id=phoneNumberName w-full border py-3 px-2 rounded-xl"
          placeholder="976-98101144"
        />

        {errors.phoneNumberName ? (
          <p className="text-red-500">{errors.phoneNumberName}</p>
        ) : (
          <></>
        )}
      </div>

      <div className="flex flex-col mt-10">
        <label htmlFor="password">
          Password <span className="text-red-500">*</span>
        </label>

        <input
          id="password"
          onChange={onPasswordChange}
          className="id=password w-full border py-3 px-2 rounded-xl"
          placeholder="********"
        />

        {errors.password ? (
          <p className="text-red-500">{errors.password}</p>
        ) : (
          <></>
        )}
      </div>

      <div className="flex flex-col mt-10">
        <label htmlFor="confirmPassword">
          confirmPassword <span className="text-red-500">*</span>
        </label>

        <input
          id="confirmPassword"
          onChange={onConfirmPasswordChange}
          className="id=confirmPassword w-full border py-3 px-2 rounded-xl"
          placeholder="********"
        />

        {errors.confirmPassword ? (
          <p className="text-red-500">{errors.confirmPassword}</p>
        ) : (
          <></>
        )}
      </div>

      <div className="flex space-between">
        <button
          onClick={onSubmit}
          className="border w-[128px] h-[44px] bg-white text-black h-16 mt-10 rounded-xl font text-xl"
        >
          Back
        </button>

        <button
          onClick={onSubmit}
          className="border w-[280px] h-[44px] bg-black text-white h-16 mt-10 rounded-xl font text-xl"
        >
          {" "}
          Continue 2/3{" "}
        </button>
      </div>
    </div>
  );
};
