import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={18}
      height={22}
      viewBox="0 0 18 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M17.62 7.45C16.57 2.83 12.54.75 9 .75h-.01C5.46.75 1.42 2.82.37 7.44-.8 12.6 2.36 16.97 5.22 19.72A5.436 5.436 0 009 21.25c1.36 0 2.72-.51 3.77-1.53 2.86-2.75 6.02-7.11 4.85-12.27zM9 12.46a3.15 3.15 0 110-6.3 3.15 3.15 0 010 6.3z"
        fill="#313131"
      />
    </Svg>
  );
}

export default SvgComponent;
