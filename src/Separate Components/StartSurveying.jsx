import React from "react";
import { StartFromScratch } from "../Svg Components/StartFromScratch";
import { QuickTemplateSVG } from "../Svg Components/QuickTemplateSVG";
import { BuildWithAiSVG } from "../Svg Components/BuildWithAiSVG";
import { useNavigate } from "react-router-dom";

function StartSurveying() {
  const navigate = useNavigate();

  return (
    <div className="flex w-full h-full space-x-[6%] ">
      {/* Start From Scratch Button */}
      <div className="flex w-[33%] bg-[#D3EFF880] border  rounded-md content-start">
        <button
          className="block text-start px-8 py-10 "
          onClick={() => {
            navigate("/createsurvey");
          }}
        >
          <div className="flex">
            <h1 className="font-semibold w-[70%] ">
              Start from scratch
            </h1>
            <div className="items-end justify-end flex w-[30%]">
              <StartFromScratch />
            </div>
          </div>
          <h2 className="text-[#828282] pt-4">
            Begin with a blank page, or copy and paste a survey you’ve written.
          </h2>
        </button>
      </div>

      {/* Use a Quick Template Button */}
      <div className="flex w-[33%] bg-[#EAE9FB80] border rounded-md content-start">
        <button className="block text-start p-8">
          <div className="flex">
            <h1 className="font-semibold w-[70%]">
              Use a quick template
            </h1>
            <div className="w-[30%]  items-end justify-end flex">
              <QuickTemplateSVG />
            </div>
          </div>
          <h2 className="text-[#828282] pt-4">
            Use a template we’ve picked for you to create and send surveys
            faster.
          </h2>
        </button>
      </div>

      {/* Build Qith AI */}
      <div className="flex w-[33%] bg-[#F4E1FE80] border rounded-md content-start">
        <button className="block text-start p-8">
          <div className="flex">
            <h1 className="font-semibold w-[70%] ">Build with AI </h1>
            <div className="w-[30%] items-end justify-end flex">
              <BuildWithAiSVG />
            </div>
          </div>
          <h2 className="text-[#828282] pt-4">
            Type a short prompt. AI will create a tailored survey just for you.
          </h2>
        </button>
      </div>
    </div>
  );
}

export default StartSurveying;
