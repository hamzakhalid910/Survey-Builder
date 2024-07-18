import PropTypes from 'prop-types';
import './style.scss'; // Import the SCSS file

const EditableDropdown = ({ item, onUpdate }) => {
  const handleTextChange = (e) => {
    onUpdate(item.id, { ...item, text: e.target.value });
  };

  const handleOptionChange = (index, e) => {
    const newOptions = [...item.options];
    newOptions[index] = e.target.value;
    onUpdate(item.id, { ...item, options: newOptions });
  };

  const addOption = () => {
    onUpdate(item.id, { ...item, options: [...item.options, 'New Option'] });
  };

  const removeOption = (index) => {
    const newOptions = item.options.filter((_, i) => i !== index);
    onUpdate(item.id, { ...item, options: newOptions });
  };

  return (
    <div className="editable-dropdown">
      <input className="editable-dropdown__title" type="text" value={item.text} onChange={handleTextChange} />
      <select className="editable-dropdown__select">
        {item.options.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select>
      {item.options.map((option, index) => (
        <div key={index} className="editable-dropdown__option">
          <input className="editable-dropdown__option-input" type="text" value={option} onChange={(e) => handleOptionChange(index, e)} />
          <button className="editable-dropdown__option-remove" onClick={() => removeOption(index)}>Remove</button>
        </div>
      ))}
      <button className="editable-dropdown__add-option" onClick={addOption}>Add Option</button>
    </div>
  );
};

EditableDropdown.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default EditableDropdown;
