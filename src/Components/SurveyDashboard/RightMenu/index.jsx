// RightMenu.jsx
import React from "react";
import "./style.scss";
import { SearchTemplates } from "../../Common/SearchTemplate";
import FindContent from "../../Common/FindContent";
import ComponentRender from "../../DraggableComponent/ComponentRender";

function RightMenu() {
  return (
    <div className="right-menu--parent">
      <div className="right-menu--child1">
        <span className="right-menu--child1 title">Add a content type</span>
        <div className="right-menu--child1 search">
          <FindContent />
        </div>
      </div>
      <div>
      <ComponentRender/>
      </div>
      
    </div>
  );
}

export default RightMenu;
