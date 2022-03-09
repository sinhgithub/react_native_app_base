import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function ICActivity(props, svgRef) {
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
        d="M2.25 12h3L9 3.75l6 15.75 3.75-7.5h3"
        stroke="#636466"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(ICActivity);
export default ForwardRef;
