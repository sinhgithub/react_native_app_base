import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={28}
      height={26}
      viewBox="0 0 28 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M26.852 16.786h-5.398a3.59 3.59 0 01-3.59-3.588 3.59 3.59 0 013.59-3.589h5.398M22.065 13.116h-.416"
        stroke="#005E52"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        clipRule="evenodd"
        d="M8.33 1.592h11.525a6.997 6.997 0 016.997 6.997v9.57a6.997 6.997 0 01-6.997 6.996H8.33a6.997 6.997 0 01-6.997-6.997v-9.57A6.997 6.997 0 018.33 1.593z"
        stroke="#005E52"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.38 7.643h7.2"
        stroke="#DE761C"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgComponent;
