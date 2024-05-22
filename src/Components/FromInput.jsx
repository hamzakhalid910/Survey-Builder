import React from "react";

const FormInput = ({ label, type, placeholder, value, onChange }) => {
  return (
    <div className="mt-6 mb-4">
      <label htmlFor={label} className="block text-gray-700 mb-2 font-medium">
        {label}:
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="block w-full md:w-[140%] px-3 py-2 border-[1.5px] border-[#CEE1FC] rounded-lg focus:outline-none"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default FormInput;
