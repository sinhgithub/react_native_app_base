import * as React from 'react';
import Svg, { Mask, Path, G, Defs, ClipPath } from 'react-native-svg';

function SvgComponent(props, svgRef) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={svgRef}
      {...props}>
      <Mask id="prefix__a" maskUnits="userSpaceOnUse" x={0} y={0} width={24} height={24}>
        <Path fill="#C4C4C4" d="M0 0h24v24H0z" />
      </Mask>
      <G clipPath="url(#prefix__clip0)" mask="url(#prefix__a)">
        <Path
          d="M12 1.09c-5.287 0-9.588 4.302-9.588 9.589v5.199a1.92 1.92 0 001.918 1.918h.749a1.92 1.92 0 001.807 1.278 1.92 1.92 0 001.918-1.918v-5.199a1.92 1.92 0 00-1.918-1.917 1.92 1.92 0 00-1.807 1.278h-.75c-.224 0-.439.04-.639.11v-.749c0-4.582 3.728-8.31 8.31-8.31 4.582 0 8.31 3.728 8.31 8.31v.75a1.91 1.91 0 00-.64-.11h-.749a1.92 1.92 0 00-1.807-1.28 1.92 1.92 0 00-1.918 1.918v5.2a1.92 1.92 0 002.474 1.834 1.92 1.92 0 01-1.835 1.361h-2.027A1.92 1.92 0 0012 19.074a1.92 1.92 0 00-1.918 1.917A1.92 1.92 0 0012 22.91a1.92 1.92 0 001.808-1.278h2.027a3.2 3.2 0 003.196-3.196v-.64h.64a1.92 1.92 0 001.917-1.917v-5.199c0-5.287-4.301-9.588-9.588-9.588zM6.247 11.958a.64.64 0 011.279 0v5.2a.64.64 0 01-1.279 0v-5.2zm-1.917.64h.639v3.92h-.64a.64.64 0 01-.639-.64v-2.641a.64.64 0 01.64-.64zM12 21.63a.64.64 0 11.001-1.28.64.64 0 01-.001 1.28zm5.753-4.475a.64.64 0 01-1.279 0v-5.199a.64.64 0 011.279 0v5.2zm2.557-1.278a.64.64 0 01-.64.639h-.639v-3.92h.64a.64.64 0 01.639.639v2.642z"
          fill="#636466"
        />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0">
          <Path fill="#fff" transform="translate(1.09 1.09)" d="M0 0h21.818v21.818H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgComponent);
export default ForwardRef;
