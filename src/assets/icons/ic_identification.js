import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <Path
        d="M14.25 10.5H18M14.25 13.5H18M8.634 13.5a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5zM5.73 15.75a3 3 0 015.81 0"
        stroke="#636466"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20.25 4.5H3.75a.75.75 0 00-.75.75v13.5c0 .414.336.75.75.75h16.5a.75.75 0 00.75-.75V5.25a.75.75 0 00-.75-.75z"
        stroke="#636466"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgComponent;
