import { useDrop } from 'react-dnd';
import { useState } from 'react';
import DraggableItem from './drag';
import DropLine from './Dropline';
import EditableQuestion from '../EditableQuestion';
import EditableRadioButton from '../EditableRadioButton';
import EditableCheckbox from '../EditableCheckbox';
import EditableEmail from '../EditableEmail';
import EditableDropdown from '../EditableDropdown';

const MainContainer = () => {
  const [droppedItems, setDroppedItems] = useState([]);
  const [hoverIndex, setHoverIndex] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

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

  const moveItem = (fromIndex, toIndex) => {
    const updatedItems = [...droppedItems];
    const [movedItem] = updatedItems.splice(fromIndex, 1);
    updatedItems.splice(toIndex, 0, movedItem);
    setDroppedItems(updatedItems);
    setHoverIndex(toIndex);
  };

  const onDrop = () => {
    setHoverIndex(null);
  };

  const handleClick = (index) => {
    setSelectedIndex(index);
  };

  const [, drop] = useDrop({
    accept: 'COMPONENT',
    drop: (item) => handleDrop(item),
  });

  return (
    <div
      ref={drop}
      className="main-container"
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
        droppedItems.map((item, index) => (
          <div key={item.id}>
            {hoverIndex === index && <DropLine />}
            <DraggableItem
              index={index}
              item={item}
              moveItem={moveItem}
              onDrop={onDrop}
              onClick={handleClick}
              isSelected={selectedIndex === index}
            >
              {(() => {
                switch (item.type) {
                  case 'multiplechoice':
                    return (
                      <EditableQuestion
                        item={item}
                        onUpdate={handleUpdateItem}
                        onRemove={handleRemoveItem}
                      />
                    );
                  case 'radiobutton':
                    return (
                      <EditableRadioButton
                        item={item}
                        onUpdate={handleUpdateItem}
                        onRemove={handleRemoveItem}
                      />
                    );
                  case 'checkbox':
                    return (
                      <EditableCheckbox
                        item={item}
                        onUpdate={handleUpdateItem}
                        onRemove={handleRemoveItem}
                      />
                    );
                  case 'email':
                    return (
                      <EditableEmail
                        item={item}
                        onUpdate={handleUpdateItem}
                        onRemove={handleRemoveItem}
                      />
                    );
                  case 'dropdown':
                    return (
                      <EditableDropdown
                        item={item}
                        onUpdate={handleUpdateItem}
                        onRemove={handleRemoveItem}
                      />
                    );
                  default:
                    return null;
                }
              })()}
            </DraggableItem>
          </div>
        ))
      )}
    </div>
  );
};

export default MainContainer;
