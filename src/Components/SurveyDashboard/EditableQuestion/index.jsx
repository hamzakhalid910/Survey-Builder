import React from 'react';
import PropTypes from 'prop-types';

const EditableQuestion = ({ item, onUpdate }) => {
  const handleTextChange = (e) => {
    onUpdate(item.id, { ...item, text: e.target.value });
  };

  const handleOptionChange = (index, e) => {
    const newOptions = [...item.options];
    newOptions[index] = e.target.value;
    onUpdate(item.id, { ...item, options: newOptions });
  };

  return (
    <div>
      <input type="text" value={item.text} onChange={handleTextChange} />
      {item.options.map((option, index) => (
        <div key={index}>
          <label>
            <input type="checkbox" />
            <input type="text" value={option} onChange={(e) => handleOptionChange(index, e)} />
          </label>
        </div>
      ))}
    </div>
  );
};

EditableQuestion.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default EditableQuestion;
