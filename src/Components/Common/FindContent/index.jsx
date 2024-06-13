import React from 'react';
import './style.scss'; // Import SCSS file for styling
import SvgIconRenderer from '../../../Icons Svg Components';

const SearchBar = () => {
  return (
    <div className="find-content--parent">
      <div className="find-content--child">
        <input type="text" placeholder="Find a content type here" className="search-input" />
        <div className="search-icon">
          <SvgIconRenderer type='SearchIcon'/>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
