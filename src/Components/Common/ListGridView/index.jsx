import React, { useState } from "react";
import "./style.scss";
import ListIconSVG from "../../../Icons Svg Components/ListIconSVG";
import GridIconSVG from "../../../Icons Svg Components/GridIconSVG";
import SvgIconRenderer from "../../../Icons Svg Components";

function ListGridView() {
  const [isActive, setIsActive] = useState(null);

  const handleClick = (buttonIndex) => () => {
    setIsActive(buttonIndex);
    console.log("Active:", buttonIndex);
  };

  return (
    <div className="button-container">
      <button className={"button"} onClick={handleClick(0)}>
        <div className="icon-container">
          <SvgIconRenderer type='ListIcon' />
        </div>
        <h1 className="button-text">List</h1>
      </button>

      <button className={"button"} onClick={handleClick(1)}>
        <div className="icon-container">
        <SvgIconRenderer type='GridIcon' />
        </div>
        <h1 className="button-text">Grid</h1>
      </button>
    </div>
  );
}

export default ListGridView;
