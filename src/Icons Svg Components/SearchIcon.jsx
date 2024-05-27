import React from "react";

function SearchIcon({color}) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 18C13.9706 18 18 13.9706 18 9.00001C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9.00001C0 13.9706 4.02944 18 9 18Z"
        fill={color}
      />
      <path
        d="M12.1445 8.47072C12.1445 10.496 10.496 12.1445 8.4707 12.1445C6.44538 12.1445 4.79688 10.496 4.79688 8.47072C4.79688 6.4454 6.43361 4.79688 8.4707 4.79688C10.496 4.80865 12.1445 6.4454 12.1445 8.47072Z"
        stroke="white"
        stroke-width="0.75"
        stroke-miterlimit="10"
        stroke-linecap="round"
      />
      <path
        d="M11.0625 11.0703L12.7817 12.7777"
        stroke="white"
        stroke-width="0.75"
        stroke-miterlimit="10"
        stroke-linecap="round"
      />
    </svg>
  );
}

export default SearchIcon;
