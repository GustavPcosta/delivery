import React from "react";

const DairyIcon = ({ width = 48, height = 48, fill = "currentColor" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width={width}
      height={height}
      fill={fill}
      aria-labelledby="dairyIconTitle"
      role="img"
    >
      <title id="dairyIconTitle">Dairy Icon</title>
      <g fill="none">
        <path d="M0 0h48v48H0z" />
        <path
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10 5a1 1 0 0 1 1-1h18.571a1 1 0 0 1 .559.17l7.428 5A1 1 0 0 1 38 10v33a1 1 0 0 1-1 1H18.429a1 1 0 0 1-.559-.17l-7.428-5A1 1 0 0 1 10 38zm2 1.878v2.494a2 2 0 0 0 .168.802l1.985 4.539a1 1 0 0 0 1.67.258l.682-.781A2 2 0 0 0 17 12.873v-2.63zM19 11v31h17V11zm14.723-2h-14.99l-4.456-3h14.99zM36 23a8 8 0 1 0-16 0a8 8 0 0 0 16 0M17 40.833V16.61a2.964 2.964 0 0 1-2 .702v22.175zm-4-2.692V16.5h.012a2.997 2.997 0 0 1-.691-.986L12 14.781v22.687zM28 17a6 6 0 1 0 0 12a6 6 0 0 0 0-12m-4 5a1 1 0 0 1 1-1h6v2h-6a1 1 0 0 1-1-1m2 3a1 1 0 0 1 1-1h2v2h-2a1 1 0 0 1-1-1"
        />
      </g>
    </svg>
  );
};

export default DairyIcon;
