import React from "react";
import Header from "../../Components/Common/Header/index";
import ListGridView from "../../Separate Components/ListGridView";
import NewSurvey from "../../Components/NewSurvey";
import StartSurveying from "../../Components/StartSurveying";
import { SearchTemplates } from "../../Components/Common/SearchTemplate";
import SurveyTemplates from "../../Components/Common/SurveyTemplates";
import "./style.scss"; // Import SCSS file for Dashboard styles
import SvgRenderer from "../../Svg Components";

function Dashboard() {
  return (
    <>
      
      <div className="dashboard-container">
        <Header />
        <NewSurvey />
        <StartSurveying />

        <div className="templates-section">
          <h1 className="section-title">Explore Templates Bank</h1>
          <SearchTemplates />
          <ListGridView />
        </div>

        <SurveyTemplates />
      </div>
    </>
  );
}

export default Dashboard;
