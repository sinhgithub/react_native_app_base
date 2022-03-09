import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function ICQuestion1(props, svgRef) {
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
        d="M12 21a9 9 0 100-18 9 9 0 000 18z"
        stroke="#636466"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path d="M12 18a1.125 1.125 0 100-2.25A1.125 1.125 0 0012 18z" fill="#636466" />
      <Path
        d="M12 13.5v-.75a2.625 2.625 0 10-2.625-2.625"
        stroke="#636466"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(ICQuestion1);
export default ForwardRef;
