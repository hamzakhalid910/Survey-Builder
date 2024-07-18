
import { useDrop } from 'react-dnd';
import { useState } from 'react';
import EditableQuestion from '../EditableQuestion/index'; // Assuming you have this component

import EditableRadioButton from '../EditableRadioButton';
import EditableCheckbox from '../EditableCheckbox';
import EditableEmail from '../EditableEmail';
import EditableDropdown from '../EditableDropdown';

const MainContainer = () => {
  const [droppedItems, setDroppedItems] = useState([]);

  const handleDrop = (item) => {
    if (item.name === 'Multiple Choice') {
      setDroppedItems((prevItems) => [
        ...prevItems,
        { id: Date.now(), type: 'multipleChoice', text: 'Multiple Choice Question', options: ['Option 1', 'Option 2'] },
      ]);
    } else if (item.name === 'Radio Button') {
      setDroppedItems((prevItems) => [
        ...prevItems,
        { id: Date.now(), type: 'radioButton', text: 'Radio Button Question', options: ['Option 1', 'Option 2'] },
      ]);
    } else if (item.name === 'Check Box') {
      setDroppedItems((prevItems) => [
        ...prevItems,
        { id: Date.now(), type: 'checkbox', text: 'Checkbox Question', options: ['Option 1', 'Option 2'] },
      ]);
    }
    else if (item.name === 'Email') {
      setDroppedItems((prevItems) => [
        ...prevItems,
        { id: Date.now(), type: 'email', placeholder: 'Enter your email' },
      ]);
    } else if (item.name === 'Drop Down') {
      setDroppedItems((prevItems) => [
        ...prevItems,
        { id: Date.now(), type: 'dropdown', text: 'Dropdown Question', options: ['Option 1', 'Option 2'] },
      ]);
    }
  };

  

  const handleUpdateItem = (id, updatedItem) => {
    setDroppedItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? updatedItem : item))
    );
  };

  const [, drop] = useDrop(() => ({
    accept: 'COMPONENT',
    drop: (item) => handleDrop(item),
  }));

  return (
    <div
      ref={drop}
      className='main-container'
      style={{
        border: '2px dashed black',
        minHeight: '500px',
        padding: '16px',
        margin: '90px',
        marginLeft: '20%',
        width: '50%',
        backgroundColor: '#f0f0f0',
      }}
    >
     {droppedItems.length === 0 ? (
        <p style={{ color: '#999' }}>Drag items here</p>
      ) : (
        droppedItems.map((item, index) => {
          if (item.type === 'multipleChoice') {
            return <EditableQuestion key={index} item={item} onUpdate={handleUpdateItem} />;
          } else if (item.type === 'radioButton') {
            return <EditableRadioButton key={index} item={item} onUpdate={handleUpdateItem} />;
          } else if (item.type === 'checkbox') {
            return <EditableCheckbox key={index} item={item} onUpdate={handleUpdateItem} />;
          }  else if (item.type === 'email') {
            return <EditableEmail key={index} item={item} onUpdate={handleUpdateItem} />;
          } else if(item.type === 'dropdown'){
            return <EditableDropdown key={index} item={item} onUpdate={handleUpdateItem} />;
          }
           else {
            return null;
          }
        })
      )}
    </div>
  );
};

export default MainContainer;
