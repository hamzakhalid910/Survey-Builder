import React from "react";
import Header from "../Components/Common/Header/index";
import StartSurveying from "../Separate Components/StartSurveying";
import { SearchTemplates } from "../Separate Components/SearchTemplates";
import ListGridView from "../Separate Components/ListGridView";
import SurveyTemplates from "../Components/SurveyTemplates";
import { NewSurveyButton } from "../Components/Common/NewSurveyButton";
import NewSurvey from "../Components/NewSurvey";

function Dashboard() {
  return (
    <>
      <div>
        <Header />
        <NewSurvey />

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
