import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 9A7 7 0 112 9a7 7 0 0114 0zm2 0A9 9 0 110 9a9 9 0 0118 0zM7.707 6.293a1 1 0 00-1.414 1.414L7.586 9l-1.293 1.293a1 1 0 101.414 1.414L9 10.414l1.293 1.293a1 1 0 001.414-1.414L10.414 9l1.293-1.293a1 1 0 00-1.414-1.414L9 7.586 7.707 6.293z"
        fill="#FF951F"
      />
    </Svg>
  );
}

export default SvgComponent;
