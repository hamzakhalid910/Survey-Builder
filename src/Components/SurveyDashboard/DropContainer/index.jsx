import { useDrop } from 'react-dnd';
import { useState } from 'react';
import EditableQuestion from '../EditableQuestion'; // Assuming you have this component
import EditableRadioButton from '../EditableRadioButton';
import EditableCheckbox from '../EditableCheckbox';
import EditableEmail from '../EditableEmail';
import EditableDropdown from '../EditableDropdown';

const MainContainer = () => {
  const [droppedItems, setDroppedItems] = useState([]);

  const handleDrop = (item) => {
    const newItem = {
      id: Date.now(),
      type: item.name.toLowerCase().replace(' ', ''),
      text: `${item.name} Question`,
      options: ['Option 1', 'Option 2'],
    };

    if (item.name === 'Email') {
      newItem.placeholder = 'Enter your email';
    }

    setDroppedItems((prevItems) => [...prevItems, newItem]);
  };

  const handleUpdateItem = (id, updatedItem) => {
    setDroppedItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? updatedItem : item))
    );
  };

  const handleRemoveItem = (id) => {
    setDroppedItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const [, drop] = useDrop(() => ({
    accept: 'COMPONENT',
    drop: (item) => handleDrop(item),
  }));

  return (
    <div
      ref={drop}
      className="main-container"
      style={{
        border: '2px dashed black',
        minHeight: '100%',
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
          switch (item.type) {
            case 'multiplechoice':
              return (
                <EditableQuestion
                  key={index}
                  item={item}
                  onUpdate={handleUpdateItem}
                  onRemove={handleRemoveItem}
                />
              );
            case 'radiobutton':
              return (
                <EditableRadioButton
                  key={index}
                  item={item}
                  onUpdate={handleUpdateItem}
                  onRemove={handleRemoveItem}
                />
              );
            case 'checkbox':
              return (
                <EditableCheckbox
                  key={index}
                  item={item}
                  onUpdate={handleUpdateItem}
                  onRemove={handleRemoveItem}
                />
              );
            case 'email':
              return (
                <EditableEmail
                  key={index}
                  item={item}
                  onUpdate={handleUpdateItem}
                  onRemove={handleRemoveItem}
                />
              );
            case 'dropdown':
              return (
                <EditableDropdown
                  key={index}
                  item={item}
                  onUpdate={handleUpdateItem}
                  onRemove={handleRemoveItem}
                />
              );
            default:
              return null;
          }
        })
      )}
    </div>
  );
};

export default MainContainer;
