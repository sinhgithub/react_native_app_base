import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function Component(props, svgRef) {
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
        d="M16.125 9.75l-5.5 5.25-2.75-2.625"
        stroke="#CCD1D9"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 21a9 9 0 100-18 9 9 0 000 18z"
        stroke="#CCD1D9"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(Component);
export default ForwardRef;
