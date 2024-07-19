import React from "react";
import Header from "../../Components/Common/Header";
import SurveyTemplates from "../../Components/Common/SurveyTemplates";
import { SearchTemplates } from "../../Components/Common/SearchTemplate";
import ListGridView from "../../Components/Common/ListGridView";
import { search } from "slick/finder";

export default function QuickTemplates({
  updateListGrid,
  listGrid,
  handleSearchInput,
  searchInput,
}) {
  return (
    <div>
      <Header />

      <div className="templates-section">
        <h1 className="section-title">Explore Templates Bank</h1>
        <SearchTemplates handleSearchInput={handleSearchInput} />
        <ListGridView updateListGrid={updateListGrid} />
      </div>

      <SurveyTemplates searchInput={searchInput} listGrid={listGrid} />
    </div>
  );
}
