import React from 'react';
import './style.scss';
import SvgRenderer from '../../../Svg Components';
import SvgIconRenderer from '../../../Icons Svg Components';

function MiddleBar() {
  return (
    <div className="middle-bar--parent">
      <div className="middle-bar--child">
        <p className="middle-bar--child1">Employee engagement</p>
        <div className="middle-bar--child1 settings">
        <span>Settings</span>
        <div className='middle-bar--child1 svg'>
        <SvgIconRenderer type='DropDown'color='black'/>
        </div>
        
        </div>
        
      </div>
      
    </div>
  );
}

export default MiddleBar;
