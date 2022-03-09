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
        fill="url(#paint0_linear_13036_33663)"
        stroke="#fff"
        strokeWidth={2}
      />
      <Path
        d="M4.818 6.244l1.488.86 2.398-1.386V4L4.818 6.244zM4.522 6.756v4.488l1.488-.86V7.616l-1.488-.859zM9.296 4v1.718l2.398 1.385 1.488-.86L9.296 4zM9 6.23L6.602 7.616v2.77L9 11.769l2.398-1.384v-2.77L9 6.231zM11.99 7.615v2.77l1.488.859V6.756l-1.488.86zM6.306 10.897l-1.488.86L8.704 14v-1.718l-2.398-1.385zM11.694 10.897l-2.398 1.385V14l3.886-2.244-1.488-.859z"
        fill="#fff"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_13036_33663"
          x1={11.8049}
          y1={20.4817}
          x2={-1.03245}
          y2={14.6985}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#00A1A1" />
          <Stop offset={0.515625} stopColor="#0CC" />
          <Stop offset={1} stopColor="#00A2A2" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default SvgComponent;
