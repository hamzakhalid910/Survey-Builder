// SurveyTemplates.js
import React, { useState } from "react";
import "./style.scss";
import ArchiveSVG from "../../../Icons Svg Components/ArchiveSVG";

function SurveyTemplates({ listGrid }) {
  // const [active, setActive] = useState("");
  const Surveys = [
    {
      SurveyThumbnail:
        "https://cdn.corporatefinanceinstitute.com/assets/customer-satisfaction-1024x800.jpeg",
      SurveyTitle: "Customer Satisfaction Survey",
      completionTime: "5 MINS",
    },
    {
      SurveyThumbnail:
        "https://elearningindustry.com/wp-content/uploads/2022/12/Feedback.png",
      SurveyTitle: "Employee Feedback Survey",
      completionTime: "10 MINS",
    },
    {
      SurveyThumbnail:
        "https://www.miquido.com/wp-content/uploads/2022/08/header-Top-8-market-research-methods-1920x1280.png",
      SurveyTitle: "Market Research Survey",
      completionTime: "8 MINS",
    },
    {
      SurveyThumbnail:
        "https://www.marketing91.com/wp-content/uploads/2020/03/Conducting-product-research-1.jpg",
      SurveyTitle: "Product Feedback Survey",
      completionTime: "7 MINS",
    },
  ];
  return (
    <>
      {listGrid === "Grid" && (
        <div className="survey-templates">
          <div className="survey-heading">
            <h1 className="survey-template-title">
              Customer Satisfaction Surveys
            </h1>
          </div>
          <div className="survey-grid">
            {Surveys.map((survey, index) => (
              <div key={index} className="survey-item">
                <img
                  className="survey-thumbnail"
                  src={survey.SurveyThumbnail}
                  alt={survey.SurveyTitle}
                />
                <div className="survey-details">
                  <div className="survey-IT">
                    <div className="survey-title">{survey.SurveyTitle}</div>
                    <div className="Archive-SVG">
                      <ArchiveSVG />
                    </div>
                  </div>

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

          <div className="survey-heading">
            <h1 className="survey-template-title">Event Feedback Surveys</h1>
          </div>
          <div className="survey-grid">
            {Surveys.map((survey, index) => (
              <div key={index} className="survey-item">
                <img
                  className="survey-thumbnail"
                  src={survey.SurveyThumbnail}
                  alt={survey.SurveyTitle}
                />
                <div className="survey-details">
                  <div className="survey-IT">
                    <div className="survey-title">{survey.SurveyTitle}</div>
                    <div className="Archive-SVG">
                      <ArchiveSVG />
                    </div>
                  </div>

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

          <div className="survey-heading">
            <h1 className="survey-template-title">Market Research</h1>
          </div>
          <div className="survey-grid">
            {Surveys.map((survey, index) => (
              <div key={index} className="survey-item">
                <img
                  className="survey-thumbnail"
                  src={survey.SurveyThumbnail}
                  alt={survey.SurveyTitle}
                />
                <div className="survey-details">
                  <div className="survey-IT">
                    <div className="survey-title">{survey.SurveyTitle}</div>
                    <div className="Archive-SVG">
                      <ArchiveSVG />
                    </div>
                  </div>

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

          <div className="survey-heading">
            <h1 className="survey-template-title">
              Professional Developer Surveys
            </h1>
          </div>
          <div className="survey-grid">
            {Surveys.map((survey, index) => (
              <div key={index} className="survey-item">
                <img
                  className="survey-thumbnail"
                  src={survey.SurveyThumbnail}
                  alt={survey.SurveyTitle}
                />
                <div className="survey-details">
                  <div className="survey-IT">
                    <div className="survey-title">{survey.SurveyTitle}</div>
                    <div className="Archive-SVG">
                      <ArchiveSVG />
                    </div>
                  </div>

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
      )}

      {listGrid === "List" && (
        <div className="survey-templates">
          <div className="survey-heading">
            <h1 className="survey-template-title">
              Professional Developer Surveys
            </h1>
          </div>

          <div className="survey-list">
            {Surveys.map((survey, index) => (
              <div key={index} className="survey-item-list">
                <img
                  className="survey-thumbnail"
                  src={survey.SurveyThumbnail}
                  alt="image"
                />

                <div className="survey-details">
                  <div className="survey-IT">
                    <div className="survey-title">{survey.SurveyTitle}</div>
                    <div className="Archive-SVG">
                      <ArchiveSVG />
                    </div>
                  </div>

                  <p className="survey-completion-time">
                    <span className="label">Est. Completion time: </span>
                    <span className="value">{survey.completionTime}</span>
                  </p>
                  
                </div>


                <div className="survey-button">
                    <button className="use-template-button">
                      Use Template
                    </button>
                  </div>


                
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default SurveyTemplates;
