import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={22}
      height={18}
      viewBox="0 0 22 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M20.15 3.17c-.41-.22-1.27-.45-2.44.37l-1.47 1.04C16.13 1.47 14.78.25 11.5.25h-6C2.08.25.75 1.58.75 5v8c0 2.3 1.25 4.75 4.75 4.75h6c3.28 0 4.63-1.22 4.74-4.33l1.47 1.04c.62.44 1.16.58 1.59.58.37 0 .66-.11.85-.21.41-.21 1.1-.78 1.1-2.21V5.38c0-1.43-.69-2-1.1-2.21zM10 8.38c-1.03 0-1.88-.84-1.88-1.88S8.97 4.62 10 4.62c1.03 0 1.88.84 1.88 1.88S11.03 8.38 10 8.38z"
        fill="#313131"
      />
    </Svg>
  );
}

export default SvgComponent;
