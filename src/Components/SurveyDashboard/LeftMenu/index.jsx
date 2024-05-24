import React from 'react';
import './style.scss'; // Updated import

function LeftMenu() {
  return (
    <div className="left-menu">
      <div className="left-menu child1">
        <p>Survey Presenting</p>
      </div>
      <div className="left-menu child2">
        <p>You don't have any data yet.</p>
      </div>
    </div>
  );
}

export default LeftMenu;