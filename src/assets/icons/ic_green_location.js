import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={14}
      height={14}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M7 7.438a1.75 1.75 0 100-3.5 1.75 1.75 0 000 3.5z"
        stroke="#939598"
        strokeWidth={1.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.375 5.688c0 3.937-4.375 7-4.375 7s-4.375-3.063-4.375-7a4.375 4.375 0 018.75 0v0z"
        stroke="#939598"
        strokeWidth={1.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgComponent;
