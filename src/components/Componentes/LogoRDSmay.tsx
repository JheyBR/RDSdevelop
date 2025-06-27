// components/LogoSvg.tsx
import React from 'react';

const LogoSvgMen = (props) => {
  return (
    <svg
      viewBox="0 0 792 612"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >

       <style type="text/css">
        {`
          
          .st1{fill:#01FA20;}
          .st2{font-family:'Arial';}
          .st3{font-size:299.9999px;}
          .st4{font-size:195.7371px;}
          
        `}
      </style>
      
      <text transform="matrix(0.7 0 0 1 640 405)" className="st1 st2 st3">&gt;</text>
      <g>
        <text transform="matrix(1.047 0 0 1 580 373)" className="st1 st2 st4"> / </text>
      </g>
      
    </svg>
  );
};

export default LogoSvgMen;
