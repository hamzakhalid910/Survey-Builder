import React, { useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const ItemTypes = {
  QUESTION: 'question',
};

const Question = ({ id, text }) => {
  const [, drag] = useDrag(() => ({
    type: ItemTypes.QUESTION,
    item: { id, text },
  }));

  return (
    <div ref={drag} style={{ border: '1px solid gray', padding: '8px', marginBottom: '4px' }}>
      {text}
    </div>
  );
};

const DropContainer = ({ onDrop }) => {
  const [, drop] = useDrop(() => ({
    accept: ItemTypes.QUESTION,
    drop: (item) => onDrop(item),
  }));

  return (
    <div ref={drop} style={{ border: '1px solid black', minHeight: '200px', padding: '8px' }}>
      Drop here
    </div>
  );
};

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

const Dnd = () => {
  const [questions, setQuestions] = useState([{ id: 1, text: 'Multiple Choice Question' }]);
  const [droppedItems, setDroppedItems] = useState([]);

  const handleDrop = (item) => {
    setDroppedItems((prevItems) => [
      ...prevItems,
      { id: item.id, text: item.text, options: ['Option 1', 'Option 2'] },
    ]);
  };

  const handleUpdateItem = (id, updatedItem) => {
    setDroppedItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? updatedItem : item))
    );
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{ display: 'flex', gap: '16px' }}>
        <div>
          <h4>Drag Items</h4>
          {questions.map((q) => (
            <Question key={q.id} id={q.id} text={q.text} />
          ))}
        </div>
        <DropContainer onDrop={handleDrop} />
      </div>
      <div style={{ marginTop: '16px' }}>
        <h4>Dropped Items</h4>
        {droppedItems.map((item, index) => (
          <EditableQuestion key={index} item={item} onUpdate={handleUpdateItem} />
        ))}
      </div>
    </DndProvider>
  );
};

export default Dnd;

