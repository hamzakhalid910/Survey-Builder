import React from "react";
import StartFromScratch from "../../Svg Components/StartFromScratch";
import QuickTemplateSVG from "../../Svg Components/QuickTemplateSVG";
import BuildWithAiSVG from "../../Svg Components/BuildWithAiSVG";
import { useNavigate } from "react-router-dom";
import "./style.scss";

function StartSurveying() {
  const navigate = useNavigate();

  return (
    <div className="survey-container">
      {/* Start From Scratch Button */}
      <div className="survey-option survey-option-scratch">
        <button
          className="survey-button"
          onClick={() => {
            navigate("/createsurvey");
          }}
        >
          <div className="survey-header">
            <h1 className="survey-title">Start from scratch</h1>
            <div className="survey-icon">
              <StartFromScratch />
            </div>
          </div>
          <h2 className="survey-description">
            Begin with a blank page, or copy and paste a survey you’ve written.
          </h2>
        </button>
      </div>

      {/* Use a Quick Template Button */}
      <div className="survey-option survey-option-template">
        <button className="survey-button">
          <div className="survey-header">
            <h1 className="survey-title">Use a quick template</h1>
            <div className="survey-icon">
              <QuickTemplateSVG />
            </div>
          </div>
          <h2 className="survey-description">
            Use a template we’ve picked for you to create and send surveys
            faster.
          </h2>
        </button>
      </div>

      {/* Build With AI */}
      <div className="survey-option survey-option-ai">
        <button className="survey-button">
          <div className="survey-header">
            <h1 className="survey-title">Build with AI</h1>
            <div className="survey-icon">
              <BuildWithAiSVG />
            </div>
          </div>
          <h2 className="survey-description">
            Type a short prompt. AI will create a tailored survey just for you.
          </h2>
        </button>
      </div>
    </div>
  );
}

export default StartSurveying;
