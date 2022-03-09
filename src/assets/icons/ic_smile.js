import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={20} height={20} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <Path
        d="M6 12s1.5 2 4 2 4-2 4-2M7 7h.01M13 7h.01M19 10a9 9 0 11-18 0 9 9 0 0118 0z"
        stroke="#FF951F"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgComponent;
