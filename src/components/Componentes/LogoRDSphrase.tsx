// components/LogoSvg.tsx
import React from 'react';

const LogoSvgPh = (props) => {
  return (
    <svg
      viewBox="0 0 792 612"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >

       <style type="text/css">
        {`
          .st2{font-family:'Arial';}         
          .st5{fill:#2F54A5;stroke:#2F54A5;stroke-width:0.216;stroke-miterlimit:5;}
          .st6{font-size:42.0001px;}
          .st7{fill:#5FBB46;stroke:#2F54A5;stroke-width:0.216;stroke-miterlimit:5;}
          .st8{fill:#EC008C;stroke:#9F3895;stroke-width:0.216;stroke-miterlimit:5;}
        `}
      </style>
      
      <text transform="matrix(1 0 0 1 115 414)">
        <tspan x="0" y="0" className="st5 st2 st6">/</tspan>
        <tspan x="11.67" y="0" className="st5 st2 st6">/reliable</tspan>
      </text>
      <text transform="matrix(1 0 0 1 510 414)">
        <tspan x="21" y="0" className="st7 st2 st6">software</tspan>
      </text>
      <text transform="matrix(1 0 0 1 260 414)">
        <tspan x="23.36" y="0" className="st8 st2 st6">development</tspan>
      </text>
    </svg>
  );
};

export default LogoSvgPh;
