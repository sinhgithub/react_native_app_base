import * as React from 'react';
import Svg, { Circle, Path, Defs, LinearGradient, Stop } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={14}
      height={14}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Circle cx={7} cy={7} r={7} fill="url(#paint0_linear_13301_33360)" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.657 4.296L7.82 2.531a.9.9 0 00-1.642 0l-.836 1.765a.919.919 0 01-.689.522l-1.87.283c-.75.113-1.05 1.074-.507 1.626L3.63 8.1a.978.978 0 01.263.844l-.319 1.94c-.032.195.059.537.059.537l.058-.001c.198.479.765.744 1.269.468l1.672-.915a.883.883 0 01.851 0l1.673.915c.512.281 1.09 0 1.279-.494l-.051-.028c.018-.083.067-.33.042-.482l-.32-1.94a.978.978 0 01.264-.844l1.353-1.373c.543-.552.243-1.513-.508-1.626l-1.87-.283a.919.919 0 01-.688-.522z"
        fill="#fff"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_13301_33360"
          x1={9.80488}
          y1={18.4817}
          x2={-3.03245}
          y2={12.6985}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#70899C" />
          <Stop offset={1} stopColor="#BCCEDB" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default SvgComponent;
