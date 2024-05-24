import React from "react";
import { useState } from "react";
import SignUpSVG from "../Svg Components/SignUpSVG";
import SurveyBuilderSVG from "../Svg Components/SurveyBuilderSVG";
import UserIconSVG from "../Icons Svg Components/UserIcon";
import EmailIcon from "../Icons Svg Components/EmailIcon";
import PasswordIcon from "../Icons Svg Components/PasswordIcon";
import HelloThereSVG from "../Svg Components/HelloThereSVG";

function SignUp() {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    checkbox: false,
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const inputValue = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: inputValue });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.password.length < 8) {
      console.log("Password length is short");
      return;
    }
    if (formData.checkbox === false) {
      console.log("Checkbox is not checked");
      return;
    }
    console.log(formData); // Print form data to console
    // You can perform further actions with the form data here
  };

  return (
    <>
      <div className="md:flex md:flex-row w-full h-screen  ">
        <div className=" w-[100%] md:w-[50%] h-screen flex items-center justify-center border-2 ">
          <div className="-2 w-[70%]">
            <h1 className="flex font-semibold text-2xl ">Hello There!</h1>
            <h1 className="flex mt-4">
              Enter you info to Sign Up!{" "}
              <span>
                <HelloThereSVG />{" "}
              </span>
            </h1>

            <h1>
              Already have an account? <span>SignIn</span>
            </h1>
            <form className=" mt-5 text-sm" onSubmit={handleSubmit}>
              <label className="font-semibold text-[#363636] block" htmlFor="">
                User name:
              </label>
              <div className="relative w-full">
                <input
                  className="w-[100%] h-[8%]  p-2 pl-8 border-2 rounded-md border-[#CEE1FC]"
                  type="text"
                  value={formData.userName}
                  name="userName"
                  placeholder="Enter your Full Name"
                  onChange={handleChange}
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <UserIconSVG />
                </div>
              </div>

              {/* Email Input */}
              <label
                className="font-semibold text-[#363636] mt-4 block"
                htmlFor=""
              >
                Email:
              </label>

              <div className="relative w-full">
                <input
                  className="w-[100%] h-[8%]  p-2 pl-8 border-2 rounded-md border-[#CEE1FC]"
                  type="email"
                  name="email"
                  value={formData.email}
                  placeholder="Enter your business email"
                  onChange={handleChange}
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <EmailIcon />
                </div>
              </div>

              <label
                className="font-semibold text-[#363636]  mt-4 block"
                htmlFor=""
              >
                Password:
              </label>

              <div className="relative w-full">
                <input
                  className="w-[100%] h-[8%] pl-8 p-2 border-2 rounded-md border-[#CEE1FC]"
                  type="password"
                  name="password"
                  value={formData.password}
                  placeholder="Password"
                  onChange={handleChange}
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <PasswordIcon />
                </div>
              </div>
              <p className="text-[#828282]">
                Your password must have 8 characters
              </p>

              {/* Checkbox */}
              <div className="flex  mt-4">
                <div className="w-[4%] mt-0.5 ">
                  <input
                    className=""
                    type="checkbox"
                    name="checkbox"
                    value={formData.checkbox}
                    onChange={handleChange}
                  />
                </div>
                <div className=" w-[100%] md:w-[70%] flex items-center">
                  <span className=" text-[#828282]">
                    By creating an account, you agree to the{" "}
                    <span className="text-[#3498DB]">Terms & Conditions</span>{" "}
                    and our{" "}
                    <span className="text-[#3498DB]">Privacy Policy</span>
                  </span>
                </div>
              </div>

              <div className="flex justify-center items-center mt-10">
                <button
                  className="w-[70%] py-3 px-10 justify-center items-center rounded-md text-white font-bold text-lg  bg-[#3498DB] block"
                  type="submit"
                >
                  Sign Up
                </button>
                {/* <SurveyBuilderSVG /> */}
              </div>
            </form>
          </div>
        </div>
        <div className="w-[100%] md:w-[50%] h-screen bg-[#E2EDFD] relative">
          <SignUpSVG className="relative">
            <div className="absolute inset-0 z-[10%]">
              <SurveyBuilderSVG />
            </div>
          </SignUpSVG>
        </div>
      </div>
    </>
  );
}

export default SignUp;
