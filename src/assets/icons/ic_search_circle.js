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
        d="M11.5 2.75a8.75 8.75 0 100 17.5 8.75 8.75 0 000-17.5zM1.25 11.5c0-5.66 4.59-10.25 10.25-10.25S21.75 5.84 21.75 11.5 17.16 21.75 11.5 21.75 1.25 17.16 1.25 11.5zM19.47 19.47a.75.75 0 011.06 0l2 2a.75.75 0 11-1.06 1.06l-2-2a.75.75 0 010-1.06z"
        fill="#313131"
      />
    </Svg>
  );
}

export default SvgComponent;
