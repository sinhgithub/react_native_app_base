import * as React from 'react';
import Svg, { Circle, Path, Defs, LinearGradient, Stop } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Circle
        cx={9}
        cy={9}
        r={8}
        fill="url(#paint0_linear_13176_33329)"
        stroke="#fff"
        strokeWidth={2}
      />
      <Path
        d="M4.519 7.881l3.719 4.806a.963.963 0 001.525 0l3.718-4.806a.98.98 0 00-.075-1.287l-1.369-1.369a.98.98 0 00-.687-.287h-4.7a.98.98 0 00-.687.287l-1.37 1.369A.98.98 0 004.52 7.88z"
        fill="#fff"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_13176_33329"
          x1={15}
          y1={15.5}
          x2={3}
          y2={2.5}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#3843AC" />
          <Stop offset={1} stopColor="#6F7BF2" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default SvgComponent;
