import React from "react";
import ResetIcon from "../Icons Svg Components/ResetIcon";
import { EmailIcon } from "../Icons Svg Components/EmailIcon";

function ResetPassword() {
  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Left Panel */}
      <div className="w-full lg:w-1/2 bg-white flex justify-center items-center p-4 lg:p-0">
        <div className="w-full max-w-md mb-20">
          <h1 className="text-2xl font-medium font-Lato">
            Reset Your Password
          </h1>
          <p className="font-Lato text-xs mt-4">
            Enter the email address associated with your account and we will
            send you a link to reset your password
          </p>
          <p className="font-Lato font-medium text-sm mt-4">Email:</p>
          <form>
            <div className="relative">
              <div className="absolute top-2 left-3">
                <EmailIcon />
              </div>
              <input
                type="email"
                className="w-full h-10 border-2 border-[#CEE1FC] rounded-lg mt-2 pl-10 pr-2 text-xs"
                placeholder="Enter your business email"
              />
            </div>
            <button className="w-full lg:w-[50%] h-10 bg-[#3498DB] text-white rounded-lg mt-6">
              Continue
            </button>
            <p className="text-xs font-medium text-[#3498DB] mt-6 text-center lg:text-left">
              Back to Sign in
            </p>
          </form>
        </div>
      </div>

      {/* Right Panel */}
      <div className="w-full lg:w-1/2 bg-custom-gradient flex justify-center items-center relative">
        <div className="flex flex-col items-center">
          <img
            src={icon}
            alt="Description of image"
            className=" lg:w-26 lg:h-32 mb-8 lg:mb-20"
          />
          <ResetIcon className="w-16 lg:w-24" />
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
