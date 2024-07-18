
import PropTypes from 'prop-types';
import './style.scss';

const EditableEmail = ({ item, onUpdate }) => {
  const handlePlaceholderChange = (e) => {
    onUpdate(item.id, { ...item, placeholder: e.target.value });
  };

  return (
    <div className="editable-email">
      <input
        className='email-input'
        type="email"
        placeholder={item.placeholder}
        onChange={handlePlaceholderChange}
      />
    </div>
  );
};

EditableEmail.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    placeholder: PropTypes.string.isRequired,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default EditableEmail;
