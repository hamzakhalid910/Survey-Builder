import React, { useState } from "react";
import DropDownSVG from "../../../Svg Components/DropDownSVG";
import './style.scss';
import SvgRenderer from "../../../Svg Components";

// User Object
const userObject = {
  user1: "Hamza Khalid",
  user2: "mysticDragon",
  user3: "cosmicVoyager",
  user4: "pixelPioneer",
  user5: "shadowNinja",
};

// Drop Down Options
function DropDownMenu() {
  return (
    <div className="drop-down-menu">
      <ul className="drop-down-list">
        <li className="list-item">
          <a className="link" href="/account">
            My Account
          </a>
        </li>
        <li className="list-item">
          <a className="link" href="/contact">Contact Us</a>
        </li>
        <li className="list-item">
          <a className="link" href="/account">Need Help?</a>
        </li>
        <li className="list-item">
          <a className="link" href="/login">Sign out</a>
        </li>
      </ul>
    </div>
  );
}

// User Function to Render
export function User() {
  const [showDropDown, setShowDropDown] = useState(false);

  const toggleDropDown = () => {
    setShowDropDown(!showDropDown);
  };

  return (
    <div className="user-container">
      <h1 className="user-name">{userObject.user1}</h1>
      <button className="dropdown-button " onClick={toggleDropDown}>
        <SvgRenderer type='dropDown' color="#1F77B2"/>
      </button>
      {showDropDown && <DropDownMenu />}
    </div>
  );
}

export default User;
