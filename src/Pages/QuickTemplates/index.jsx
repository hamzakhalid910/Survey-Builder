import React from "react";
import Header from "../../Components/Common/Header";
import SurveyTemplates from "../../Components/Common/SurveyTemplates";
import { SearchTemplates } from "../../Components/Common/SearchTemplate";
import ListGridView from "../../Components/Common/ListGridView";

export default function QuickTemplates({updateListGrid,listGrid}) {
  return (
    <div>
      <Header />

      <div className="templates-section">
        <h1 className="section-title">Explore Templates Bank</h1>
        <SearchTemplates />
        <ListGridView  updateListGrid={updateListGrid}/>
      </div>

      <SurveyTemplates listGrid={listGrid} />
    </div>
  );
}
