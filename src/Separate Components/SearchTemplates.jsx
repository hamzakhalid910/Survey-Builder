import React from "react";
import { SearchIcon } from "../Icons Svg Components/SearchIcon";

export function SearchTemplates() {
  return (
    <div className="w-[90%] pl-[2%]">
      <form action="">
        <div className="relative">
          <div className="absolute left-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
            <SearchIcon />
          </div>
          <input
            className="border border-[#00000066] rounded-md w-[100%] pl-8 py-1" // Adjust padding to fit the icon
            type="text"
            placeholder="Search Templates"
          />
        </div>
      </form>
    </div>
  );
}
