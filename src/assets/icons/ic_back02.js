import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.53 3.55a.75.75 0 010 1.06l-6.52 6.52a1.236 1.236 0 000 1.74l6.52 6.52a.75.75 0 11-1.06 1.06l-6.52-6.52a2.736 2.736 0 010-3.86l6.52-6.52a.75.75 0 011.06 0z"
        fill="#FF951F"
      />
    </Svg>
  );
}

export default SvgComponent;
