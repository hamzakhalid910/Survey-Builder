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

export function Language() {
  const [selectedLanguage, setSelectedLangauge] = useState("English");
  const [showDropDown, setShowDropDown] = useState(false);

  const toggleDropDown = () => {
    setShowDropDown(!showDropDown);
  };

  const handleLanguageChange = (language) => {
    setShowDropDown(!showDropDown);
    setSelectedLangauge(language);
    console.log(`${language} selected`);
  };

  return (
    <>
      <div className="flex w-full border-2 ">
        <div className="w-[80%]">
          <h1 className="">{selectedLanguage}</h1>
        </div>
        <div>
          <button className="ml-1 w-[20%]" onClick={toggleDropDown}>
            <DropDownSVG />
          </button>
        </div>
        {showDropDown && (
          <div className="absolute mt-6 ml-[-0.4%] bg-white w-[10%] px-4 py-4 rounded-sm shadow-lg z-10">
            {languages.map((language, index) => (
              <button
                className="block"
                key={index}
                value={language}
                onClick={() => handleLanguageChange(language)}
              >
                {language}
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
