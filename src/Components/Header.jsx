import React, { useState } from "react";
import { DashboardLogoSVG } from "../Svg Components/DashboardLogoSVG";
import { User } from "../Separate Components/User";
import { Language } from "../Separate Components/Language";
import { NotificationSVG } from "../Svg Components/NotificationsSVG";
import { useNavigate } from "react-router-dom";

function Header() {
  const [activeLink, setActiveLink] = useState(location.pathname);
  const navigate = useNavigate();
  const handleSetActiveLink = () => {
    navigate(`/${link}`);
    setActiveLink(link);
  };

  return (
    <div className=" flex flex-row w-full h-[20%] bg-[#E9F4FE]">
      <div className="ml-[8%] border-2 w-[10%] h-[20%] z-10 p-2">
        {/* <DashboardLogoSVG /> */}
        <img className="" src="src\Images\Group 7.png" alt="Builder Logo" />
      </div>
      <div className="flex w-[32%] ml-[4%] space-x-4 px-[4%] items-center">
        <button
          className={` ${
            activeLink === "/dashboard"
              ? "text-[#3498DB] font-semibold underline"
              : "text-[#828282]"
          }`}
          onClick={() => handleSetActiveLink("/dashboard")}
        >
          Dashboard
        </button>

        <button
          className={` ${
            activeLink === "/createsurvey"
              ? "text-[#3498DB] font-semibold underline"
              : "text-[#828282]"
          }`}
          onClick={() => handleSetActiveLink("/createsurvey")}
        >
          My Surveys
        </button>
      </div>

      {/* Upgrade Plan Button */}
      <div className="flex w-[17%] border justify-center items-center">
        <button className="text-[#3498DB] border border-[#3498DB]  rounded-lg p-2 font-semibold">
          Upgrade Plan
        </button>
      </div>

      {/* Notifications */}
      <div className="flex w-[3%] border items-center justify-center">
        <button
          onClick={() => {
            console.log("Notifications");
          }}
        >
          <NotificationSVG />
        </button>
      </div>

      {/* Language */}
      <div className="flex w-[10%] border items-center">
        <Language />
      </div>

      {/* User */}
      <div className="flex w-[12%] mr-[8%] border  items-center justify-end px-1 ">
        <User />
      </div>
    </div>
  );
}

export default Header;
