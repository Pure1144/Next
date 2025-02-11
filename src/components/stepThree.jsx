import { useState, useEffect } from "react";
import { use } from "../../public/Create Next App_files/node_modules_next_dist_compiled_107ce8._";

export const StepThree = ({ setStep }) => {
  const [formValue, setFormValue] = useState({});
  const [errors, setErrors] = useState({});

  const onSubmit = () => {
    let nextStep = false;
    const date = formValue.date;
    const curdate = new Date();
    const year = curDate.getFullYear();
    const month = curDate.getMonth();
    const day = curDate.getDay();
    const minDate = [year - 18, month + 1, day].join("-");
    const maxDate = [year, month + 1, day].join("-");
    console.log(minDate);
    console.log(date);

    if (!formValue.date) {
      setErrors((prev) => ({
        ...prev,
        date: "Та төрсөн он,сар, өдрөө оруулна уу?",
      }));
      nextStep = false;
    } else if (date > maxDate) {
      setErrors((prev) => ({
        ...prev,
        date: "Төрсөн он одоогийн онооноос өмнө байх ёстой.",
      }));
      nextStep = false;
    } else if (date > minDate) {
      setErrors((prev) => ({
        ...prev,
        date: "Та 18 ба түүнээс дээш настай байх ёстой.",
      }));
      nextStep = false;
    } else {
      setErrors((prev) => ({ ...prev, date: "" }));
      nextStep = true;
    }

    if (formValue.profilePicture === null) {
      setErrors((prev) => ({
        ...prev,
        profileImage: "Профайл зургаа оруулна уу?",
      }));
      nextStep = false;
    } else {
      setErrors((prev) => ({
        ...prev,
        profileImage: "",
      }));
      nextStep = true;
    }
    if (nextStep) {
      setStep(4);
    }
  };

  const backStep = () => {
    setStep(2);
  };

  const onDateChange = (e) => {

    setFormValue({ ...formValue, date: e.target.value });
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  };
  const imageOnChange = (e) => {
    const file = e.target.files[0];
    var reader = new FileReader();
    reader.onloadend = function () {
      setFormValue((prev) => ({ ...prev, profilePicture: reader.result }));
    };
    reader.readAsDataURL(file);
  };

  // Зураг оруулахын тулд дараах хуудсаас оруулсан  https://medium.com/@raedswan121/how-to-upload-image-and-preview-it-using-reactjs-43b27c751255

  const close = () => {
    setFormValue({ ...formValue, profilePicture: null });
  };
  useEffect(() => {
    onSubmit();
  }, []);
  return (
    <>
      <div className="w-[480px] h-[655px] p-8 bg-white rounded-lg flex-col justify-between items-start inline-flex">
        <div className="flex-col justify-start items-start flex">
          <div className="h-[129px] flex-col justify-start items-start gap-2px flex">
            <img className="w-[60px] h-[60px]" src="pinecone-logo.png" />
            <div className="self stretch text-[#202124] text-[26px] font-semi-bold">
              Join Us! 😎
            </div>
            {/* <h2 className="text-[26px] text-foreground font-semibold"></h2> */}
            <p className="text-[18px] whitespace-nowrap text-[#8E8E8E]">
              Please provide all current information accurately.
            </p>
          </div>

          <div className="w-[416px] h-[358px] fle col justify-between items-start inline-flex mt-10">
            <input
              id="date"
              text="Date of birth"
              type="date"
              onChange={onDateChange}
              // className="id=dateOfBirthName w-full border py-3 px-2 rounded-xl"
              placeholder="yyyy.mm.dd"
            />
            {errors.date ? (
              <p className="text-red-500">{errors.date}</p>
            ) : (
              <></>
            )}
            <label>
              Profile image<span className="text-red-500">*</span>{" "}
            </label>{" "}
            {formValue.profilePicture ? (
              <div className="relative w-full h-[230px] flex-col justify-center items-center inline-flex h-[180px] w-[416px]">
                <img src={formValue.profilePicture} />
                <button
                  onClick={close}
                  className="absolute top-2 right-2 h-6 w-6 p-1.5 bg-[#202124] rounded-full flex justify-center items-center z-10"
                >
                  <img
                    src="close.png"
                    className="h-full object-contain"
                    alt="Close"
                  />
                </button>
              </div>
            ) : (
              <label
                htmlFor="files"
                className="relative w-full h-[230px] flex-col justify-center items-center inline-flex h-[180px] w-[416px] bg-[#7e7e7f]"
              >
                <input
                  id="files"
                  onChange={imageOnChange}
                  type="file"
                  className="invisible"
                  name="profileImage"
                  accept="image/*"
                />
                <img
                  src="image-min.webp"
                  className="w-[32px] h-[32px] p-2 bg-whiterounded-full justify-start items-center gap-2.5 inline-flex"
                />
              </label>
            )}
          </div>
          {errors.profileImage ? (
            <p className="text-[#e14942]">errors.profileImage</p>
          ) : (
            <></>
          )}
        </div>
        <div className="flex w-full gap-[8px]">
          <button
            onClick={backStep}
            img={<img src="chevron_left.webp" />}
            className="w-[128px] h-11 px-3 py-2.5 bg-white justify-center items-center gap-1 inline-flex text-[#FFF]"
            text="back"
          />
          <button
            onClick={onSubmit}
            text="Continue 3?3"
            img={<img src="chevron_left.webp" />}
            className="w-[280px] h-11 px-3 py-2.5 bg-[#121316] justify-center items-center gap-1 inline-flex text-[#FFF]"
          />
        </div>
      </div>
    </>
  );
};
