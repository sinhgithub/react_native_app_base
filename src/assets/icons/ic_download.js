import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={14} height={14} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <Path d="M14 7A7 7 0 110 7a7 7 0 0114 0z" fill="#FF951F" />
      <Path
        d="M7 3.89v6.221m0 0l2.333-2.333M7 10.111L4.667 7.778"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgComponent;
