import React from "react";
import "./style.scss"; // Import the SCSS file

const FormInput = ({ label, type, placeholder, value, onChange }) => {
  return (
    <div className="form-input--parent">
      <label className="form-input--parent--child-1" htmlFor={label}>{label}:</label>
      <input
        className="form-input--parent--child-2"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default FormInput;
