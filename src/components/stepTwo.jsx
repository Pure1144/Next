import { useState } from "react";

export const StepTwo = ({setStep}) => {
  // const [firstName, setFirstName] = useState('');

  const [formValue, setFormValue] = useState({});
  const [errors, setErrors] = useState({});

  const onSubmit = () => {
    console.log(formValue);

    if (!formValue.mailName || formValue.mailName.length === 0) {
      setErrors((prev) => ({ ...prev, mailName: "Майл хаягаа оруулна уу?" }));
    } else if (validateEmail(formValue.mailName) !== true) {
      setErrors((prev) => ({ ...prev, mailName: "Зөв майл хаяг оруулна уу?" }));
    } else {
      setErrors((prev) => ({ ...prev, mailName: "" }));
    } //validate mail шалгах функц

    function validateEmail(email) {
      var re = /\S+@\S+\.\S+/;

      return re.test(email);
    } //https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript -эндээс татаж  оруулсан.

    if (!formValue.phoneNumberName || formValue.phoneNumberName?.length === 0) {
      setErrors((prev) => ({
        ...prev,
        phoneNumberName: "Утасны дугаараа орууна уу?",
      }));
    } else if (
      !formValue.phoneNumberName ||
      formValue.phoneNumberName?.length < 8
    ) {
      setErrors((prev) => ({
        ...prev,
        phoneNumberName: "Зөв утасны дугаараа орууна уу?",
      }));
    } else {
      setErrors((prev) => ({ ...prev, phoneNumberName: "" })); //validate утасны дугаар шалгах функц
    }

    if (!formValue.password || formValue.password?.length === 0) {
      setErrors((prev) => ({ ...prev, password: "Нууц үгээ орууна уу?" }));
    }

  
    
    else if (validatePassword(formValue.password) !== true) {
      setErrors((prev) => ({
        ...prev,
        password: "Нууц үг нь нэгээс багагүй тоо,том, жижиг үсэг,тусгай тэмдэгт агуулсан 8-аас багагүй урттай байна.",
      }));
    } else {
      setErrors((prev) => ({ ...prev, password: "" }));
    }

    function validatePassword(password) {
      var re = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;
      return re.test(password);
    }

    

    if (!formValue.confirmPassword || formValue.confirmPassword.length === 0) {
      setErrors((prev) => ({
        ...prev,
        confirmPassword: "Нууц үгээ давтаж орууна уу?",
      }));

    } 
    else if (formValue.confirmPassword !== formValue.password){
        setErrors((prev) => ({
            ...prev,
            confirmPassword: "Таны пасспорт таарахгүй байна.", 
        }));
    }
    
    else {
      setErrors((prev) => ({ ...prev, confirmPassword: "" }));
    }
    setStep(3) 
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
