import React, { useState } from "react";
import CustomDropdown from "../Components/CustomDropdown";
import FormInput from "../Components/FromInput";
import SubmitButton from "../Components/SubmitButton";

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
    <div className="min-h-screen bg-white flex flex-col items-center">
      {/* Static header */}
      <div className="h-24 bg-custom-gradient flex items-center justify-center text-black w-full">
        Header Content Here
      </div>

      {/* Form */}
      <div className="flex w-full px-4 sm:px-32 mt-20">
        <form className="w-full max-w-xl" onSubmit={handleSubmit}>
          <h1 className="text-xl font-medium mb-4 text-primary">
            Create New Survey
          </h1>
          <p className="text-paragraph text-sm">
            Enter the details of your project.
          </p>

          <FormInput
            label="Survey Title"
            type="text"
            placeholder="Enter survey name"
            value={surveyTitle}
            onChange={(e) => setSurveyTitle(e.target.value)}
          />

          <div className="mb-4">
            <label
              htmlFor="projectType"
              className="block text-gray-700 mb-2 font-medium"
            >
              Select or search your project type
            </label>
            <CustomDropdown
              options={projectTypes}
              value={selectedProjectType}
              placeholder="Survey category"
              onChange={(value) => setSelectedProjectType(value)}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="language"
              className="block text-gray-700 mb-2 font-medium"
            >
              Select language
            </label>
            <CustomDropdown
              options={languages}
              value={selectedLanguage}
              placeholder="English"
              onChange={(value) => setSelectedLanguage(value)}
            />
          </div>

          <SubmitButton onSubmit={handleSubmit} />
        </form>
      </div>
    </div>
  );
};

export default Form;
