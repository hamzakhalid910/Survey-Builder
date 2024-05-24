import React from 'react';
import './style.scss';

function MiddleBar() {
  return (
    <div className="middle-bar--parent">
      <div className="middle-bar--child">
        <p className="middle-bar--child1">Employee engagement</p>
        <p className="middle-bar--child1 settings">Settings</p> {/* Added 'settings' class */}
      </div>
    </div>
  );
}

export default MiddleBar;
