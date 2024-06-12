import React from "react";
import Form from "../../Components/Form/index";
import Header from "../../Components/Common/Header";
import './style.scss';

function CreateSurvey() {
  return (
    <div className="create-survey-container">
      <Header />
      <div className="form-container">
        <Form />
      </div>
    </div>
  );
}

export default CreateSurvey;
