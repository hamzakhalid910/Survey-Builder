import React, { useState, useEffect } from "react";
import DropDown from "../../Icons Svg Components/DropDownIcon";
import Search from "../../Icons Svg Components/SearchIconPlain";
import "./style.scss";

const CustomDropdown = ({ options, value, onChange, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState(value || "");
  const [hoveredOption, setHoveredOption] = useState(null);

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
        className="block w-full px-7 py-2 border-[1.5px] border-[#CEE1FC] rounded-lg focus:outline-none"
        onClick={handleArrowClick}
      />
      <div className="absolute inset-y-0 left-2 flex items-center pr-2">
        <Search />
      </div>
      <div
        className="absolute inset-y-0 right-0 flex items-center pr-6 cursor-pointer"
        onClick={handleArrowClick}
      >
        <DropDown isOpen={isOpen} />
      </div>
      {isOpen && (
        <div className="absolute z-10 w-full max-h-60 overflow-y-auto bg-white border rounded-md mt-1">
          {filteredOptions.map((option) => (
            <div
              key={option}
              onClick={() => handleOptionClick(option)}
              className={`px-4 py-2 cursor-pointer ${
                hoveredOption === option
                  ? "bg-[#E0E0E0] text-primary"
                  : "hover:bg-[#E0E0E0] text-paragraph"
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
