import React, { useState, useEffect } from "react";
import DropDown from "../../Icons Svg Components/DropDownIcon";
import Search from "../../Icons Svg Components/SearchIconPlain";
import "./style.scss"; // Import the SCSS file

const CustomDropdown = ({ options, value, onChange, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState(value || "");
  const [hoveredOption, setHoveredOption] = useState(null);

  useEffect(() => {
    setSearchTerm(value);
  }, [value]);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleOptionClick = (option) => {
    console.log("Selected option:", option);
    onChange(option);
    setIsOpen(false);
  };

  const handleArrowClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="custom-dropdown--parent">
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder={placeholder}
        className="custom-dropdown--input"
      />
      <div className="custom-dropdown--search-icon">
        <Search />
      </div>
      <div className="custom-dropdown--arrow-icon" onClick={handleArrowClick}>
        <DropDown isOpen={isOpen} />
      </div>

      {isOpen && (
        <div className="custom-dropdown--options">
          {options.map((option) => (
            <div
              key={option}
              onClick={() => handleOptionClick(option)}
              className={`custom-dropdown--option ${
                hoveredOption === option ? "hovered" : ""
              }`}
              onMouseEnter={() => setHoveredOption(option)}
              onMouseLeave={() => setHoveredOption(null)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
