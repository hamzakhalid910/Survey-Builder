import React from 'react';
import './style.scss';
import SvgRenderer from '../../../Svg Components';
import SvgIconRenderer from '../../../Icons Svg Components';

function MiddleBar() {
  return (
    <div className="middle-bar--parent">
      
        <div className="middle-bar--child1">

        <p className='middle-bar--child1 employee'>Employee engagement</p>
        <span className='middle-bar--child1 settings'>Setting</span>
        
          <div className='middle-bar--child1 svg'>
          <SvgIconRenderer type='DropDown'color='black'/>
          
          </div>
          <div className='middle-bar--child1 svg1'>
          
          <SvgRenderer type="location"/>

          
          
          </div>
          <span className='middle-bar--child1 view'>
          <SvgRenderer type="view"/>
          </span>
        
       
        
        
        </div>
        
      
    </div>
  );
}

export default MiddleBar;
