import React, { useState } from "react";
import { DropDownSVG } from "../Svg Components/DropDownSVG";

const languages = [
  {
    language: "English",
    flag: "https://cdn.britannica.com/79/4479-050-6EF87027/flag-Stars-and-Stripes-May-1-1795.jpg",
  }, // USA flag
  {
    language: "Australia",
    flag: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Flag_of_Australia.svg",
  },
  {
    language: "Chinese",
    flag: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg",
  },
  {
    language: "German",
    flag: "https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg",
  },
  {
    language: "French",
    flag: "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg",
  },
  {
    language: "Italian",
    flag: "https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg",
  },

  {
    language: "Russian",
    flag: "https://upload.wikimedia.org/wikipedia/en/f/f3/Flag_of_Russia.svg",
  },
  {
    language: "Portuguese",
    flag: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg",
  },
];

export function Language() {
  const [selectedLanguage, setSelectedLangauge] = useState("En");
  const [selectedFlag, setSelectedFlag] = useState(
    "https://cdn.britannica.com/79/4479-050-6EF87027/flag-Stars-and-Stripes-May-1-1795.jpg"
  );

  const [showDropDown, setShowDropDown] = useState(false);

  const toggleDropDown = () => {
    setShowDropDown(!showDropDown);
  };

  const handleLanguageChange = (language, flag) => {
    setShowDropDown(!showDropDown);
    setSelectedLangauge(language.slice(0, 2));
    setSelectedFlag(flag);
    console.log(flag);
    console.log(`${language} selected`);
  };

  return (
    <>
      <div className="flex w-full border-2 ">
        <div className="flex w-[80%] border">
          {/* Flag Div */}
          <div className="w-[20%] flex justify-center items-center">
            <img className="w-5 h-5 rounded-full" src={selectedFlag} alt="" />
          </div>

          <h1 className=" flex w-[40%] font-semibold border pl-2">
            {selectedLanguage}
          </h1>
        </div>

        <div className="flex">
          <button className="ml-1 w-[0%]" onClick={toggleDropDown}>
            <DropDownSVG />
          </button>
        </div>
        {showDropDown && (
          <div className="absolute mt-6 ml-[-0.4%] bg-white w-[10%] px-4 py-4 rounded-sm shadow-lg z-10">
            {languages.map((languageObj, index) => (
              <button
                className="flex items-center text-sm border mb-1 text-[#828282] w-[100%]" // Use flexbox to align flag and language
                key={index}
                value={languageObj.language} // Set the value to the language name
                onClick={() =>
                  handleLanguageChange(languageObj.language, languageObj.flag)
                } // Pass the language name to the handler
              >
                <img
                  className="border h-5 w-5 rounded-full"
                  src={languageObj.flag}
                  alt={languageObj.language}
                />{" "}
                <span
                  className={
                    selectedLanguage === languageObj.language.slice(0, 2)
                      ? "text-primary pl-2"
                      : "pl-2"
                  }
                >
                  {languageObj.language}
                </span>{" "}
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
