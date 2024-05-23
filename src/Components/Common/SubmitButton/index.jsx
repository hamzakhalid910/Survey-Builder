import React from "react";
import "./style.scss"; // Import the SCSS file

const SubmitButton = ({ onSubmit }) => {
  return (
    <div className="SubmitButton">
      <button type="submit" onClick={onSubmit}>
        Create Survey
      </button>
    </div>
  );
};

export default SubmitButton;
