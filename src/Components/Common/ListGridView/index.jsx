import React, { useState } from "react";
import "./style.scss";
import SvgIconRenderer from "../../../Icons Svg Components";

function ListGridView({ updateListGrid }) {
  // const [isActive, setIsActive] = useState(null);

  // const handleClick = (buttonIndex) => () => {
  //   setIsActive(buttonIndex);
  //   console.log("Active:", buttonIndex);
  // };

  return (
    <div className="List-Grid-button-container">
      <button className={"button"} onClick={() => updateListGrid("List")}>
        <div className="icon-container">
          <SvgIconRenderer type="ListIcon" />
        </div>
        <h1 className="button-text">List</h1>
      </button>

      <button className={"button"} onClick={() => updateListGrid("Grid")}>
        <div className="icon-container">
          <SvgIconRenderer type="GridIcon" />
        </div>
        <h1 className="button-text">Grid</h1>
      </button>
    </div>
  );
}

export default ListGridView;
