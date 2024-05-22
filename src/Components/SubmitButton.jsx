import React from "react";

const SubmitButton = ({ onSubmit }) => {
  return (
    <div className="flex justify-center md:ml-40 mt-14">
      <button
        type="submit"
        className="w-40 bg-primary font-Lato text-white py-2 rounded-lg mt-8"
        onClick={onSubmit}
      >
        Create Survey
      </button>
    </div>
  );
};

export default SubmitButton;
