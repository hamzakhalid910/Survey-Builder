// LeftMenu.jsx
import React from 'react';
import { useDrop } from 'react-dnd';
import './style.scss';

const LeftMenu = () => {
  

  return (
    <div className="left-menu--parent" >
      <div className='left-menu--child1'>
        <span className='left-menu--child1 title'>Survey Presenting</span>
        <span className='left-menu--child1 message'>You don’t have any data yet...</span>
      </div>
    </div>
  );
};

export default LeftMenu;
