import React, { useState } from "react";
import CustomDropdown from "../CustomDropdown/index";
import FormInput from "../Common/FormInput/index";
import SubmitButton from "../Common/SubmitButton/index";
import Header from "../Header";
import "./style.scss"; // Import the SCSS file

const projectTypes = [
    "Web Development",
    "Mobile App Development",
    "Data Science",
    "Machine Learning",
    "Cyber Security",
    "UI/UX Design",
    "Cloud Computing",
    "Game Development",
    "Blockchain Development",
    "Internet of Things (IoT)",
    "Augmented Reality (AR) Development",
    "Virtual Reality (VR) Development",
    "DevOps",
    "Artificial Intelligence (AI)",
    "Big Data",
    "E-commerce",
    "Healthcare IT",
    "Finance Technology (Fintech)",
    "EdTech",
  ];
  
  const languages = [
    "English",
    "Spanish",
    "Mandarin",
    "French",
    "German",
    "Japanese",
  ];

const Form = () => {
  const [surveyTitle, setSurveyTitle] = useState("");
  const [selectedProjectType, setSelectedProjectType] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Survey Title:", surveyTitle);
    console.log("Selected Project Type:", selectedProjectType);
    console.log("Selected Language:", selectedLanguage);

    // Reset fields
    setSurveyTitle("");
    setSelectedProjectType("");
    setSelectedLanguage("");
  };

  return (
    <div className="Form">
      {/* Static header */}
      <Header />

      {/* Form */}
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h1>Create New Survey</h1>
          <p>Enter the details of your project.</p>

          <FormInput
            className="form-input"
            label="Survey Title"
            type="text"
            placeholder="Enter survey name"
            value={surveyTitle}
            onChange={(e) => setSurveyTitle(e.target.value)}
          />

          <div className="mb-4">
            <label htmlFor="projectType">Select or search your project type</label>
            <CustomDropdown
              className="custom-dropdown"
              options={projectTypes}
              value={selectedProjectType}
              placeholder="Survey category"
              onChange={(value) => setSelectedProjectType(value)}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="language">Select language</label>
            <CustomDropdown
              className="custom-dropdown"
              options={languages}
              value={selectedLanguage}
              placeholder="English"
              onChange={(value) => setSelectedLanguage(value)}
            />
          </div>

          <SubmitButton className="submit-button" onSubmit={handleSubmit} />
        </form>
      </div>
    </div>
  );
};

export default Form;
