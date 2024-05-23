import React from "react";
import "./style.scss"; // Import the SCSS file

const FormInput = ({ label, type, placeholder, value, onChange }) => {
  return (
    <div className="FormInput">
      <label htmlFor={label}>{label}:</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default FormInput;
