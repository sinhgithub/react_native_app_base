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
        fill="url(#paint0_linear_13037_33704)"
        stroke="#fff"
        strokeWidth={2}
      />
      <Path
        d="M4.519 7.881l3.719 4.806a.963.963 0 001.525 0l3.718-4.806a.981.981 0 00-.075-1.287l-1.369-1.369a.98.98 0 00-.687-.287h-4.7a.98.98 0 00-.688.287L4.595 6.594a.98.98 0 00-.075 1.287z"
        fill="#fff"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_13037_33704"
          x1={11.8049}
          y1={20.4817}
          x2={-1.03245}
          y2={14.6985}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#7A38CD" />
          <Stop offset={0.515625} stopColor="#A761FF" />
          <Stop offset={1} stopColor="#7A38CD" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default SvgComponent;
