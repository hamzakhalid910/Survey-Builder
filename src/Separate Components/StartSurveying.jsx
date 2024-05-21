import React from "react";
import { StartFromScratch } from "../Svg Components/StartFromScratch";
import { QuickTemplateSVG } from "../Svg Components/QuickTemplateSVG";
import { BuildWithAiSVG } from "../Svg Components/BuildWithAiSVG";

function StartSurveying() {
  return (
    <div className="flex w-full h-[30%] space-x-[6%]  border-2 ">
      <div className="flex w-[33%] bg-[#D3EFF880] p-4 border-2 rounded-md content-start">
        <button className="block text-start">
          <div className="flex">
            <h1 className="font-semibold w-[70%] border-2">
              Start from scratch
            </h1>
            <div className="w-[30%] border pl-[15%]">
              <StartFromScratch />
            </div>
          </div>
          <h2 className="text-[#828282] pt-4">
            Begin with a blank page, or copy and paste a survey you’ve written.
          </h2>
        </button>
      </div>

      <div className="flex w-[33%] bg-[#EAE9FB80] p-4 border-2 rounded-md content-start">
        <button className="block text-start">
          <div className="flex">
            <h1 className="font-semibold w-[70%] border-2">
              Use a quick template
            </h1>
            <div className="w-[30%] border pl-[15%]">
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
      <div className="flex w-[33%] bg-[#F4E1FE80] p-4 border-2 rounded-md content-start">
        <button className="block text-start">
          <div className="flex">
            <h1 className="font-semibold w-[70%] border-2">Build with AI </h1>
            <div className="w-[30%] border pl-[15%]">
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
