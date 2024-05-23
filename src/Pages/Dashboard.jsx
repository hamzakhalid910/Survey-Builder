import React from "react";
import Header from "../Components/Header";
import StartSurveying from "../Separate Components/StartSurveying";
import { SearchTemplates } from "../Separate Components/SearchTemplates";
import ListGridView from "../Separate Components/ListGridView";
import SurveyTemplates from "../Components/SurveyTemplates";
import { NewSurveyButton } from "../Components/Common/NewSurveyButton";

function Dashboard() {
  return (
    <>
      <div className="h-screen">
        <div className="h-[13%]">
          <Header />
        </div>

        {/* New Survey Div */}
        <div className="flex  mx-[8%] h-[15%] ">
          <h1 className="w-[80%]  pt-[3%] pb-[2%] font-semibold">
            How would you best describe your surveying and forms expertise?
          </h1>

          <div className="flex w-[20%] flex-grow items-center justify-end">
            <NewSurveyButton />
          </div>
        </div>

        {/* Start Surveying */}
        <div className="mx-[8%] h-[27%]">
          <StartSurveying />
        </div>

        <div className="flex mx-[8%] h-[12%] ">
          <h1 className="w-[60%]  pt-[2.5%] pb-[1.5%] font-semibold text-[#3498DB]">
            Explore Templates Bank
          </h1>

          <div className="flex items-center w-[25%] ">
            <SearchTemplates />
          </div>

          <div className="flex w-[15%] justify-end items-center">
            <ListGridView />
          </div>
        </div>

        {/* Survey Templates Div */}
        <div className="mx-[8%]">
          <SurveyTemplates />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
