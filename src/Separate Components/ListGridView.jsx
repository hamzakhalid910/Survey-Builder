import React, { useState } from "react";
import ListIconSVG from "../Icons Svg Components/ListIconSVG";
import GridIconSVG from "../Icons Svg Components/GridIconSVG";

function ListGridView() {
  const [isActive, setIsActive] = useState(null);

  const handleClick = (buttonIndex) => {
    setIsActive(buttonIndex);
    console.log("Active:", isActive);
  };

  return (
    <>
      {/* <div className="flex">
        <button
          className={`border bg-${
            isActive === 0 ? "gray" : "white"
          } border-[#00000066] px-3 rounded-l py-1 flex flex-row items-center`}
          onClick={handleClick(0)}
        >
          <div className="flex ">
            <ListIconSVG />
          </div>
          <h1 className="px-1">List</h1>
        </button>

        <button
          className={`border bg-${
            isActive === 1 ? "gray" : "white"
          } border-[#00000066] px-3 rounded-l py-1 flex flex-row items-center`}
          onClick={handleClick()}
        >
          <div className="flex ">
            <GridIconSVG />
          </div>
          <h1 className="px-1">Grid</h1>
        </button>
      </div> */}
    </>
  );
}

export default ListGridView;
