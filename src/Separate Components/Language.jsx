import React, { useState } from "react";
import { DropDownSVG } from "../Svg Components/DropDownSVG";

const languages = [
  "English",
  "Australia",
  "Chinese",
  "German",
  "French",
  "Italian",
  "South Korean",
  "Russian",
  "Portuguese",
];

function DropDownMenu() {
  return (
    <div className="absolute mt-6 ml-[-0.4%] bg-white w-32 px-4 py-4 rounded-sm shadow-lg z-10">
      {languages.map((language, index) => (
        <option key={index} value={language.toLowerCase().replace(" ", "_")}>
          {language}
        </option>
      ))}
    </div>
  );
}

export function Language() {
  const [showDropDown, setShowDropDown] = useState(false);

  const toggleDropDown = () => {
    setShowDropDown(!showDropDown);
  };

  return (
    <>
      <div className="flex w-full border-2">
        <h1 className="w-full">English</h1>
        <button className="ml-1" onClick={toggleDropDown}>
          <DropDownSVG />
        </button>
        {showDropDown && <DropDownMenu />}
      </div>
    </>
  );
}
