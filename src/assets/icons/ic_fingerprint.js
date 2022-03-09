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
        d="M37.502 30.001a37.39 37.39 0 01-2.802 14.25M35.592 25a7.5 7.5 0 00-13.09 5.001 22.399 22.399 0 01-2.81 10.896"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M25 15.854a15.01 15.01 0 0120 14.147 45.142 45.142 0 01-1.115 10M13.64 36.25c.9-1.96 1.363-4.092 1.36-6.25a14.964 14.964 0 015-11.18M27.278 42.501c-.317.69-.659 1.366-1.026 2.028M29.998 30.001c.002 2.53-.316 5.05-.945 7.5"
        stroke="#fff"
        strokeWidth={2}
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
