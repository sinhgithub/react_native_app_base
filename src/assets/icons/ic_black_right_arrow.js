import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={10} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <Path
        d="M1.5 1l7 7-7 7"
        stroke="#130F26"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgComponent;
