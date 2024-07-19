import React, { useState } from "react";
import SearchIcon from "../../../Icons Svg Components/SearchIcon";
import "./style.scss";
import SvgIconRenderer from "../../../Icons Svg Components";

export function SearchTemplates({ handleSearchInput }) {
  
  const handlechange = (e) => {
    handleSearchInput(e.target.value);
  };


  return (
    <div className="search-templates-container">
      <form action="">
        <div className="search-input-wrapper">
          <div className="search-icon">
            <SvgIconRenderer type="SearchIcon" />
          </div>
          <input
            className="search-input"
            type="text"
            placeholder="Search Templates"
            onChange={handlechange}
          />
        </div>
      </form>
    </div>
  );
}
