import React from "react";
import { NewSurveyButton } from "../Common/NewSurveyButton";

function NewSurvey() {
  return (
    <div className="flex  mx-[8%] h-[15%] ">
      <h1 className="w-[80%]  pt-[3%] pb-[2%] font-semibold">
        How would you best describe your surveying and forms expertise?
      </h1>

      <div className="flex w-[20%] flex-grow items-center justify-end">
        <NewSurveyButton />
      </div>
    </div>
  );
}

export default NewSurvey;
