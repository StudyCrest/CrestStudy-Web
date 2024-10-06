import * as React from "react";

function ButtonSpinner() {
  return (
    <svg
      width={25}
      height={24}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="spinner"
    >
      <path
        d="M12.5 4.75v1.5M17.627 6.873l-1.061 1.061M19.75 12h-1.5M17.627 17.127l-1.061-1.061M12.5 17.75v1.5M8.434 16.066l-1.06 1.06M6.75 12h-1.5M8.434 7.934l-1.06-1.06"
        stroke="#FBFDFF"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default ButtonSpinner;
