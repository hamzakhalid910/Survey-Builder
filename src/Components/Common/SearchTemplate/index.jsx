import React from "react";
import SearchIcon from "../../../Icons Svg Components/SearchIcon";
import "./style.scss";

export function SearchTemplates() {
  return (
    <div className="search-templates-container">
      <form action="">
        <div className="search-input-wrapper">
          <div className="search-icon">
            <SearchIcon />
          </div>
          <input
            className="search-input"
            type="text"
            placeholder="Search Templates"
          />
        </div>
      </form>
    </div>
  );
}
