import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props, svgRef) {
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
        d="M12 14.25c5.385 0 9.75-2.015 9.75-4.5s-4.365-4.5-9.75-4.5-9.75 2.015-9.75 4.5 4.365 4.5 9.75 4.5zM12 14.25v4.5"
        stroke="#636466"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2.25 9.75v4.5c0 2.25 3.75 4.5 9.75 4.5s9.75-2.25 9.75-4.5v-4.5M18 13.322v4.5M6 13.322v4.5"
        stroke="#636466"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgComponent);
export default ForwardRef;
