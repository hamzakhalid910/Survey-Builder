import React from "react";
import "./style.scss"; // Import the SCSS file
import { useNavigate } from "react-router-dom";
import { SurveyDashboard } from "../../../Pages";

export function NewSurveyButton() {
  const navigate = useNavigate();
  return (
    <button
      className="new-survey-button-parent"
      onClick={() => {
        navigate("/createsurvey");
      }}
    >
      New Survey
    </button>
  );
}
