import * as React from 'react';
import Svg, { Circle, G, Path, Defs, LinearGradient, Stop, ClipPath } from 'react-native-svg';

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
        fill="url(#paint0_linear_13036_33594)"
        stroke="#fff"
        strokeWidth={2}
      />
      <G clipPath="url(#clip0_13036_33594)" fill="#fff">
        <Path d="M13.798 7.296a.5.5 0 00-.555-.027L11.15 8.524 9.416 5.921c-.02-.029-.05-.042-.074-.064l.481-.482a.251.251 0 000-.354l-.646-.646a.251.251 0 00-.354 0l-.646.646a.251.251 0 000 .354l.481.482c-.024.022-.055.035-.073.064L6.849 8.524 4.758 7.27a.503.503 0 00-.556.027.502.502 0 00-.187.523l1 4a.501.501 0 00.485.38h7a.5.5 0 00.485-.38l1-4a.503.503 0 00-.187-.523zM13 12.698H5v1h8v-1z" />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_13036_33594"
          x1={16}
          y1={16}
          x2={1.58768}
          y2={15.2448}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#F08C31" />
          <Stop offset={0.515625} stopColor="#FFA338" />
          <Stop offset={1} stopColor="#FFC24A" />
        </LinearGradient>
        <ClipPath id="clip0_13036_33594">
          <Path fill="#fff" transform="translate(4 4)" d="M0 0H10V10H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgComponent;
