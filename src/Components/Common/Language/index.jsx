import React, { useState } from "react";
import DropDownSVG from "../../../Svg Components/DropDownSVG";
import "./style.scss";

const languages = [
  {
    language: "English",
    flag: "https://cdn.britannica.com/79/4479-050-6EF87027/flag-Stars-and-Stripes-May-1-1795.jpg",
  },
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

function Language() {
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
      <div className="language-container-parent">
        <div className="language-selected-child2">
          <div className="flag-container">
            <img className="flag" src={selectedFlag} alt="" />
          </div>
          <h1 className="selected-language">{selectedLanguage}</h1>
        </div>

        <div className="dropdown-toggle">
          <button className="dropdown-button" onClick={toggleDropDown}>
            <DropDownSVG />
          </button>
        </div>
        {showDropDown && (
          <div className="dropdown-menu">
            {languages.map((languageObj, index) => (
              <button
                className="dropdown-item"
                key={index}
                value={languageObj.language}
                onClick={() =>
                  handleLanguageChange(languageObj.language, languageObj.flag)
                }
              >
                <img
                  className="dropdown-flag"
                  src={languageObj.flag}
                  alt={languageObj.language}
                />
                <span
                  className={
                    selectedLanguage === languageObj.language.slice(0, 2)
                      ? "dropdown-language active"
                      : "dropdown-language"
                  }
                >
                  {languageObj.language}
                </span>
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Language;
