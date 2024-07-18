import PropTypes from 'prop-types'; // Import PropTypes
import { useState } from "react";
import "./style.scss";
import FindContent from "../../Common/FindContent";
import ComponentRender from "../../DraggableComponent/ComponentRender";

function RightMenu() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="right-menu--parent">
      <div className="right-menu--child1">
        <span className="right-menu--child1 title">Add a content type</span>
        <div className="right-menu--child1 search">
          <FindContent setSearchTerm={setSearchTerm} />
        </div>
      </div>
      <div>
        <ComponentRender searchTerm={searchTerm} />
      </div>
    </div>
  );
}

RightMenu.propTypes = {
  setSearchTerm: PropTypes.func.isRequired,
};

export default RightMenu;
