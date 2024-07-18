import PropTypes from 'prop-types'; // Import PropTypes
import './style.scss'; // Import SCSS file for styling
import SvgIconRenderer from '../../../Icons Svg Components';
import { useState } from 'react';

const FindContent = ({ setSearchTerm }) => {
  const [searchInput, setSearchInput] = useState('');

  const handleSearch = (e) => {
    setSearchInput(e.target.value);
    setSearchTerm(e.target.value);
  };

  return (
    <div className="find-content--parent">
      <div className="find-content--child">
        <input
          type="text"
          placeholder="Find a content type here"
          className="search-input"
          value={searchInput}
          onChange={handleSearch}
        />
        <div className="search-icon">
          <SvgIconRenderer type='SearchIcon'/>
        </div>
      </div>
    </div>
  );
};

FindContent.propTypes = {
  setSearchTerm: PropTypes.func.isRequired,
};

export default FindContent;
