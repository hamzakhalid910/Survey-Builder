import React from "react";

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
      <div className="w-full">
        <div className="w-full ">
          <h1 className="font-semibold block font-lato">
            Customer Satisfaction Surveys
          </h1>
        </div>

        {/* Survey Mapping */}
        <div className="flex flex-wrap justify-start space-x-[3%] my-[2%]">
          {Surveys.map((survey, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg w-[22.7%] "
            >
              <img
                className="w-full h-[60%]"
                src={survey.SurveyThumbnail}
                alt={survey.SurveyTitle}
              />

              <div className="px-4 py-4">
                <div className="font-semibold mb-2">{survey.SurveyTitle}</div>

                <p className="text-gray-700 text-base">
                  <span className="font-[#828282]">Est. Completion time: </span>
                  <span className="font-semibold">{survey.completionTime}</span>
                </p>
              </div>

              <div className="flex content-center justify-center p-2">
                <button className="bg-[#3498DB] px-4 py-2 rounded-md text-white font-semibold">
                  Use Template
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default SurveyTemplates;
