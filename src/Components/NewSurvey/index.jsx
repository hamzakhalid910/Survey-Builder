import React from "react";
import { NewSurveyButton } from "../Common/NewSurveyButton";
import "./style.scss";

function NewSurvey() {
  return (
    <div className="new-survey-container">
      <h1 className="survey-title">
        How would you best describe your surveying and forms expertise?
      </h1>

      <div className="button-container">
        <NewSurveyButton />
      </div>
    </div>
  );
}

export default NewSurvey;
