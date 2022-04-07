import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={25}
      height={24}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <G clipPath="url(#clip0_154_1829)">
        <Path
          d="M3.5 5v-.5A.5.5 0 003 5h.5zm18 0h.5a.5.5 0 00-.5-.5V5zm-18 .5h18v-1h-18v1zM21 5v12h1V5h-1zm-1.5 13.5h-14v1h14v-1zM4 17V5H3v12h1zm1.5 1.5A1.5 1.5 0 014 17H3a2.5 2.5 0 002.5 2.5v-1zM21 17a1.5 1.5 0 01-1.5 1.5v1A2.5 2.5 0 0022 17h-1z"
          fill={props?.color || '#B8B8B8'}
        />
        <Path
          d="M3.5 5l9 9 9-9"
          stroke={props?.color || '#B8B8B8'}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_154_1829">
          <Path fill="#fff" transform="translate(.5)" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgComponent;
