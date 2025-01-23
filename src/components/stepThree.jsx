import { useState } from "react";

export const StepThree = () => {
  // const [firstName, setFirstName] = useState('');

  const [formValue, setFormValue] = useState({});
  const [errors, setErrors] = useState({});
  const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
 
    // Зураг оруулахын тулд дараах хуудсаас оруулсан  https://medium.com/@raedswan121/how-to-upload-image-and-preview-it-using-reactjs-43b27c751255

  const onSubmit = () => {
    console.log(formValue);

    // if (!formValue.firstName || formValue.firstName.length === 0) {
    //   setErrors((prev) => ({ ...prev, firstName: "Заавал нэр орууна уу?" }));
    // } else {
    //   setErrors((prev) => ({ ...prev, firstName: "" }));
    // }
    // if (!formValue.secondName || formValue.secondName?.length === 0) {
    //   setErrors((prev) => ({ ...prev, secondName: "Заавал нэр орууна уу?" }));
    // } else {
    //   setErrors((prev) => ({ ...prev, secondName: "" }));
    // }

    if (!formValue.dateOfBirthName || formValue.dateOfBirthName.length === 0) {
        setErrors((prev) => ({ ...prev, dateOfBirthName: "Та төрсөн он,сар, өдрөө оруулна уу?" }));
      } else if (!formValue.today-formValue.dateOfBirthName > 18) !== true) {
        setErrors((prev) => ({ ...prev, dateOfBirthName: "Та 18 ба түүнээс дээш настай байх ёстой." }));
      } else {
        setErrors((prev) => ({ ...prev, dateOfBirthName: "" }));
      }

    // setErrors({})

    // console.log("working");
  };

  //    console.log(errors);

  const onEmailNameChange = (e) =>
    setFormValue({ ...formValue, firstName: e.target.value });

  const onPhoneNumberNameChange = (e) =>
    setFormValue({ ...formValue, secondName: e.target.value });

  const onPasswordChange = (e) =>
    setFormValue({ ...formValue, password: e.target.value });

  const onConfirmPasswordChange = (e) =>
    setFormValue({ ...formValue, confirmPassword: e.target.value });

  const onDateOfBirthNameChange = (e) =>
    setFormValue({ ...formValue, DateOfBirthName: e.target.value });

  const onProfileImageNameChange = (e) => {
    console.log (e.target.files[0])                                       // Зурганд зориулсан onChange
    // setFormValue({ ...formValue, profileImageName: e.target.value });
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
          Continue 3/3{" "}
        </button>
      </div>
    </div>
  );
};
