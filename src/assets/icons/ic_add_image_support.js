import * as React from 'react';
import Svg, { Rect, Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Rect opacity={0.08} width={48} height={48} rx={8} fill="#8694A3" />
      <Path
        d="M15 27.75l4.72-4.72a.75.75 0 011.06 0l4.19 4.19a.75.75 0 001.06 0l1.94-1.94a.75.75 0 011.06 0L33 29.25"
        stroke="#F08C31"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M32.25 16.5h-16.5a.75.75 0 00-.75.75v13.5c0 .414.336.75.75.75h16.5a.75.75 0 00.75-.75v-13.5a.75.75 0 00-.75-.75z"
        stroke="#005E52"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path d="M26.625 22.5a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z" fill="#F08C31" />
    </Svg>
  );
}

export default SvgComponent;
