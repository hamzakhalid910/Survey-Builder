import React from "react";
import { SearchIcon } from "../Icons Svg Components/SearchIcon";

export function SearchTemplates() {
  return (
    <div>
      <form action="">
        <div className="relative">
          <div className="absolute left-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
            <SearchIcon />
          </div>
          <input
            className="border-2 border-black rounded-md w-full pl-10" // Adjust padding to fit the icon
            type="text"
            placeholder="Search Templates"
          />
        </div>
      </form>
    </div>
  );
}
