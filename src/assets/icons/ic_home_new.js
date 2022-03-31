import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={26}
      height={22}
      viewBox="0 0 26 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M20.725 12.982v6.278a2.138 2.138 0 01-2.138 2.138H6.817a2.117 2.117 0 01-2.119-2.138v-6.278M.5 12.198L10.976 1.703a2.472 2.472 0 013.452 0l10.495 10.495"
        stroke={props?.color || '#ED2025'}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgComponent;
