import React from "react";
import { DashboardLogoSVG } from "../Svg Components/DashboardLogoSVG";
import { User } from "../Separate Components/User";
import { Language } from "../Separate Components/Language";
import { NotificationSVG } from "../Svg Components/NotificationsSVG";

function Header() {
  return (
    <div className=" flex flex-row w-full h-[20%] bg-[#E9F4FE]">

      <div className="ml-[8%] border-2 w-[10%] z-10">
        <DashboardLogoSVG />
      </div>
      <div className="flex w-[32%] ml-[4%] space-x-4 px-[4%] items-center">
        <a className="font-bold" href="/dashboard">
          Dashboard
        </a>
        <a className="font-semibold" href="">
          My Surveys
        </a>
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
