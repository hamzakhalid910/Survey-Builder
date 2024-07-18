
import PropTypes from 'prop-types';
import './style.scss';

const EditableCheckbox = ({ item, onUpdate }) => {
  const handleTextChange = (e) => {
    onUpdate(item.id, { ...item, text: e.target.value });
  };

  const handleOptionChange = (index, e) => {
    const newOptions = [...item.options];
    newOptions[index] = e.target.value;
    onUpdate(item.id, { ...item, options: newOptions });
  };

  const handleAddOption = () => {
    const newOptions = [...item.options, `Option ${item.options.length + 1}`];
    onUpdate(item.id, { ...item, options: newOptions });
  };

  return (
    <div className="editable-checkbox">
      <input className='title' type="text" value={item.text} onChange={handleTextChange} />
      {item.options.map((option, index) => (
        <div key={index} className="option">
          <input type="checkbox" />
          <input type="text" value={option} onChange={(e) => handleOptionChange(index, e)} />
        </div>
      ))}
      <button onClick={handleAddOption}>Add Option</button>
    </div>
  );
};

EditableCheckbox.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default EditableCheckbox;
