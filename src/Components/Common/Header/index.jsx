import React, { useState } from "react";
// import { DashboardLogoSVG } from ".../Svg Components/DashboardLogoSVG";
import User from "../User/index";
import Language from "../Language/index";
import { useNavigate } from "react-router-dom";
import "./style.scss";
import NotificationSVG from "../../../Svg Components/NotificationsSVG";

function Header() {
  const [activeLink, setActiveLink] = useState(location.pathname);
  const navigate = useNavigate();

  const handleSetActiveLink = (link) => {
    navigate(`${link}`);
    setActiveLink(link);
  };

  return (
    <div className="header-parent">
      <div className="logo-container-child1">
        {/* <DashboardLogoSVG /> */}
        <img src="src\Images\Group 7.png" alt="Builder Logo" />
      </div>


      <div className="navigation-child2">
        {/* Dashboard Button */}
        <button
          className={` ${activeLink === "/dashboard" ? "active" : "inactive"}`}
          onClick={() => handleSetActiveLink("/dashboard")}
        >
          Dashboard
        </button>

        {/* MySurveys Button */}
        <button
          className={` ${activeLink === "/mysurveys" ? "active" : "inactive"}`}
          onClick={() => handleSetActiveLink("/mysurveys")}
        >
          My Surveys
        </button>
      </div>

      {/* Upgrade Plan Button */}
      <div className="upgrade-plan-child3">
        <button>Upgrade Plan</button>
      </div>

      {/* Notifications */}
      <div className="notifications-child4">
        <button
          onClick={() => {
            console.log("Notifications");
          }}
        >
          <NotificationSVG />
        </button>
      </div>

      {/* Language */}
      <div className="language-child5">
        <Language />
      </div>

      {/* User */}
      <div className="user-child6">
        <User />
      </div>
    </div>
  );
}

export default Header;