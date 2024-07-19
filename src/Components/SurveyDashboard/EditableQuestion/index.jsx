
import PropTypes from 'prop-types';
import './style.scss';

const EditableQuestion = ({ item, onUpdate,onRemove }) => {
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

  const removeOption = (index)=>{
    const newOptions = item.options.filter((_,i)=> i!=index);
    onUpdate(item.id,{...item, options: newOptions});
  }

  return (
    <div className="editable-question">
      <button className="editable-dropdown__close" onClick={() => onRemove(item.id)}>×</button>
      <input className='title' type="text" value={item.text} onChange={handleTextChange} />
      {item.options.map((option, index) => (
        <div key={index} className="option">
          <input type="radio" name={`multiple-choice-${item.id}`} />
          <input type="text" value={option} onChange={(e) => handleOptionChange(index, e)} />
          <button className="editable-dropdown__option-remove" onClick={()=>removeOption(index)}>Remove</button>
        </div>
      ))}
      <button className="editable-question__add-option" onClick={handleAddOption}>Add Option</button>
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
  onRemove: PropTypes.func.isRequired,
};

export default EditableQuestion;
