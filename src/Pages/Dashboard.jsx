import React from "react";
import Header from "../Components/Header";
import StartSurveying from "../Separate Components/StartSurveying";
import { SearchTemplates } from "../Separate Components/SearchTemplates";
import ListGridView from "../Separate Components/ListGridView";
import SurveyTemplates from "../Components/SurveyTemplates";
import { NewSurveyButton } from "../Comon Components/NewSurveyButton";

function Dashboard() {
  return (
    <>
      <div className="border">
        <Header />
      </div>

      <div className="mx-[8%]">
        {/* New Survey Div */}
        <div className="flex border-2">
          <h1 className="w-[80%] border-2  pt-[4%] pb-[3%] font-semibold">
            How would you best describe your surveying and forms expertise?
          </h1>
          <div className="flex w-[20%] flex-grow items-center justify-end">
            <NewSurveyButton />
          </div>
        </div>

        {/* Start Surveying */}
        <div className="">
          <StartSurveying />
        </div>

        <div className="flex border-2 ">
          <h1 className="w-[60%] border-2 pt-[3%] pb-[2%] font-semibold text-[#3498DB]">
            Explore Templates Bank
          </h1>

          <div className="flex border-2 items-center w-[25%]">
            <SearchTemplates />
          </div>

          <div className="flex w-[15%] justify-end items-center border-2">
            <ListGridView />
          </div>
        </div>

        {/* Survey Templates Div */}
        <div className="">
          <SurveyTemplates />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
