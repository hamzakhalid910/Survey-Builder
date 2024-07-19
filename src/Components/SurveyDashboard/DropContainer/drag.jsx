import { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import PropTypes from 'prop-types';


const ItemType = 'DROPPABLE_ITEM';

const DraggableItem = ({  index, moveItem, onDrop, onClick, isSelected, children }) => {
  const ref = useRef(null);

  const [, drop] = useDrop({
    accept: ItemType,
    hover(draggedItem) {
      if (draggedItem.index !== index) {
        moveItem(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: ItemType,
    item: { type: ItemType, index },
    end: (item, monitor) => {
      if (!monitor.didDrop()) {
        onDrop();
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));

  const handleClick = () => {
    onClick(index);
  };

  return (
    <div
      ref={ref}
      onClick={handleClick}
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: 'move',
        transition: 'transform 0.3s ease',
        border: isDragging || isSelected ? '2px dotted #1F77B2' : 'none',
        margin: '2px 0',
        padding: '7px',
      }}
    >
      {children}
    </div>
  );
};

DraggableItem.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  moveItem: PropTypes.func.isRequired,
  onDrop: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default DraggableItem;
