// SurveyTemplates.js
import React from "react";
import "./style.scss";

function SurveyTemplates() {
  const Surveys = [
    {
      SurveyThumbnail:
        "https://via.placeholder.com/150/0000FF/808080?text=Survey+1",
      SurveyTitle: "Customer Satisfaction Survey",
      completionTime: "5 MINS",
    },
    {
      SurveyThumbnail:
        "https://via.placeholder.com/150/FF0000/FFFFFF?text=Survey+2",
      SurveyTitle: "Employee Feedback Survey",
      completionTime: "10 MINS",
    },
    {
      SurveyThumbnail:
        "https://via.placeholder.com/150/00FF00/000000?text=Survey+3",
      SurveyTitle: "Market Research Survey",
      completionTime: "8 MINS",
    },
    {
      SurveyThumbnail:
        "https://via.placeholder.com/150/FFFF00/0000FF?text=Survey+4",
      SurveyTitle: "Product Feedback Survey",
      completionTime: "7 MINS",
    },
  ];
  return (
    <>
      <div className="survey-templates">
        <div className="survey-heading">
          <h1 className="survey-template-title">Customer Satisfaction Surveys</h1>
        </div>
        <div className="survey-list">
          {Surveys.map((survey, index) => (
            <div key={index} className="survey-item">
              <img
                className="survey-thumbnail"
                src={survey.SurveyThumbnail}
                alt={survey.SurveyTitle}
              />
              <div className="survey-details">
                <div className="survey-title">{survey.SurveyTitle}</div>
                <p className="survey-completion-time">
                  <span className="label">Est. Completion time: </span>
                  <span className="value">{survey.completionTime}</span>
                </p>
              </div>
              <div className="survey-button">
                <button className="use-template-button">Use Template</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default SurveyTemplates;
