import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function ICBellRinging(props, svgRef) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={svgRef}
      {...props}>
      <Path
        d="M5.269 10.5a6.731 6.731 0 1113.463 0v0c0 3.358.702 5.306 1.32 6.371a.75.75 0 01-.644 1.13H4.592a.751.751 0 01-.645-1.13c.62-1.065 1.322-3.013 1.322-6.37h0z"
        stroke="#636466"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9 18v.75a3 3 0 006 0V18M17.197 2.249a9.794 9.794 0 013.555 3.948M3.248 6.197A9.794 9.794 0 016.803 2.25"
        stroke="#636466"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(ICBellRinging);
export default ForwardRef;
