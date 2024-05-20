import React, { useState } from "react";
import { DropDownSVG } from "../Svg Components/DropDownSVG";
import { SearchTemplates } from "./SearchTemplates";

//User Object
const userObject = {
  user1: "Hamza Khalid",
  user2: "mysticDragon",
  user3: "cosmicVoyager",
  user4: "pixelPioneer",
  user5: "shadowNinja",
};

//Drop Down Options
function DropDownMenu() {
  return (
    <div className="absolute mt-6 ml-2 bg-white w-32 px-4 py-4 rounded-sm shadow-lg z-10">
      <ul className="text-sm text-[#828282]">
        <li className="mt-1">
          <a className="" href="/account">
            My Account
          </a>
        </li>
        <li className="mt-1">
          <a href="/contact">Contact Us</a>
        </li>
        <li className="mt-1">
          <a href="/account">Need Help?</a>
        </li>
        <li className="mt-1">
          <a href="/login">Sign out</a>
        </li>
      </ul>
    </div>
  );
}

//User Function to Render
export function User() {
  const [showDropDown, setShowDropDown] = useState(false);

  const toggleDropDown = () => {
    setShowDropDown(!showDropDown);
  };

  return (
    <>
      <div className="flex">
        <h1 className="font-semibold">{userObject.user1}</h1>
        <button className="ml-1" onClick={toggleDropDown}>
          <DropDownSVG />
        </button>
        {showDropDown && <DropDownMenu />}
      </div>

      <SearchTemplates />
    </>
  );
}
