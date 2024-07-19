import React, { useState } from "react";
import Header from "../../Components/Common/Header/index";
import NewSurvey from "../../Components/NewSurvey";
import StartSurveying from "../../Components/StartSurveying";
import { SearchTemplates } from "../../Components/Common/SearchTemplate";
import SurveyTemplates from "../../Components/Common/SurveyTemplates";
import "./style.scss"; // Import SCSS file for Dashboard styles
import SvgIconRenderer from "../../Icons Svg Components/index";
import ListGridView from "../../Components/Common/ListGridView/index";
function Dashboard({ updateListGrid, listGrid, handleSearchInput, searchInput }) {
  return (
    <>
      <div className="dashboard-container">
        <Header />
        <NewSurvey />
        <StartSurveying />

        <div className="templates-section">
          <h1 className="section-title">Explore Templates Bank</h1>
          <SearchTemplates handleSearchInput={handleSearchInput} />
          <ListGridView updateListGrid={updateListGrid} />
        </div>

        <SurveyTemplates listGrid={listGrid} searchInput={searchInput} />
      </div>
    </>
  );
}

export default Dashboard;
