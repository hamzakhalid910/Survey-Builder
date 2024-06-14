import React from 'react';
import { useDrag } from 'react-dnd';
import './style.scss';

const SmallComponent = ({ name }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'COMPONENT',
    item: { name },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className="small-component"
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      <span className='name'>{name}</span>
    </div>
  );
};

export default SmallComponent;
