import * as React from 'react';
import Svg, { Rect, Path, Defs, LinearGradient, Stop } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={60}
      height={60}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Rect
        y={60}
        width={60}
        height={60}
        rx={30}
        transform="rotate(-90 0 60)"
        fill="url(#prefix__paint0_linear)"
      />
      <Path
        d="M26.082 36.667C27 37.334 28.333 38 30 38c1.666 0 3-.666 3.917-1.333M36.665 26v2.667M23.335 26v2.667M30 26v5.333c0 .736-.597 1.334-1.333 1.334M44.667 22v-4a2.666 2.666 0 00-2.666-2.667h-4M22 15.333h-4A2.666 2.666 0 0015.334 18v4M38 44.667h4A2.666 2.666 0 0044.668 42v-4M15.334 38v4A2.666 2.666 0 0018 44.667h4"
        stroke="#fff"
        strokeWidth={2}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear"
          x1={64}
          y1={67}
          x2={-11.5}
          y2={99}
          gradientUnits="userSpaceOnUse">
          <Stop offset={0.114} stopColor="#03C2A2" />
          <Stop offset={0.371} stopColor="#11A288" />
          <Stop offset={0.7} stopColor="#0086CB" />
          <Stop offset={0.91} stopColor="#0086CB" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default SvgComponent;
