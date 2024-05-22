import React from "react";
import { ListIconSVG } from "../Icons Svg Components/ListIconSVG";
import { GridIconSVG } from "../Icons Svg Components/GridIconSVG";

function ListGridView() {
  return (
    <>
      <div className="flex">
        <button
          className="border bg-gray-300 border-[#00000066] px-3 rounded-l py-1 flex flex-row items-center"
          // onClick={}
        >
          <div className="flex ">
            <ListIconSVG />
          </div>
          <h1 className="px-1">List</h1>
        </button>

        <button className="border-r border-t border-b border-[#00000066] rounded-r px-3 py-1 flex flex-row items-center">
          <div className="flex ">
            <GridIconSVG />
          </div>
          <h1 className="px-1">Grid</h1>
        </button>
      </div>
    </>
  );
}

export default ListGridView;
