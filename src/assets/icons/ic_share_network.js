import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function ICShareNetwork(props, svgRef) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={svgRef}
      {...props}>
      <Path
        d="M5 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM13.75 18.125a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM13.75 6.875a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM11.647 5.727L7.103 8.648M7.103 11.352l4.544 2.921"
        stroke="#00B495"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(ICShareNetwork);
export default ForwardRef;
