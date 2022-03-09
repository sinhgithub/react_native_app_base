import * as React from 'react';
import Svg, { Circle } from 'react-native-svg';

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
      <Circle cx="10" cy="10" r="9" fill="white" stroke="#00B495" stroke-width="2" />
      <Circle cx="10" cy="10" r="4" fill="#00B495" stroke="#00B495" stroke-width="2" />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(ICShareNetwork);
export default ForwardRef;
