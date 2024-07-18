
import { useDrop } from 'react-dnd';
import { useState } from 'react';
import EditableQuestion from '../EditableQuestion/index'; // Assuming you have this component

const MainContainer = () => {
  const [droppedItems, setDroppedItems] = useState([]);

  const handleDrop = (item) => {
    if (item.name === 'Multiple Choice') {
      setDroppedItems((prevItems) => [
        ...prevItems,
        { id: Date.now(), text: 'Multiple Choice Question', options: ['Option 1', 'Option 2'] },
      ]);
    }
    // Add handling for other item types if needed
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
          <EditableQuestion key={index} item={item} onUpdate={handleUpdateItem} />
        ))
      )}
    </div>
  );
};

export default MainContainer;
