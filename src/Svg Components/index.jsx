import React from "react";
import DropDownSVG from "./DropDownSVG";
import DashboardLogoSVG from "./DashboardLogoSVG";
import NotificationSVG from "./NotificationsSVG";
import SurveyBuilderSVG from "./SurveyBuilderSVG";

const SvgRenderer = ({ type, color }) => {
  const svgs = {
    dropDown: <DropDownSVG color={color || "black"} />,
    DasboardLogo: <DashboardLogoSVG color={color || "#3498DB"} />,
    Notification: <NotificationSVG color={color || "none"} />,
    SurveyBuilderSVG: <SurveyBuilderSVG color={color || "#1F77B2"} />,
  };

  return svgs[type];
};

export default SvgRenderer;
