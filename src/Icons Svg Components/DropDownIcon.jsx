import React from "react";

function DropDown({ isOpen,color }) {
  return (
    <>
      <svg
        className={` transition-transform transform ${
          isOpen ? "rotate-180" : ""
        }`}
        width="14"
        height="14"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_98_1384)">
          <path
            d="M17.6659 13.6661C17.4434 13.8887 17.1796 14 16.8749 14H1.12508C0.820202 14 0.556632 13.8887 0.333942 13.6661C0.111252 13.4431 0 13.1796 0 12.8749C0 12.5702 0.111252 12.3066 0.333942 12.0839L8.20886 4.20898C8.43179 3.98629 8.69536 3.87479 9 3.87479C9.30464 3.87479 9.56845 3.98629 9.79096 4.20898L17.6659 12.084C17.8883 12.3066 18 12.5702 18 12.8749C18 13.1796 17.8883 13.4431 17.6659 13.6661Z"
            fill={color}
          />
        </g>
        <defs>
          <clipPath id="clip0_98_1384">
            <rect
              width="18"
              height="18"
              fill="white"
              transform="matrix(1 0 0 -1 0 18)"
            />
          </clipPath>
        </defs>
      </svg>
    </>
  );
}

export default DropDown;
