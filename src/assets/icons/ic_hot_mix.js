import * as React from 'react';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={48}
      height={28}
      viewBox="0 0 48 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 23.855L11 12 0 .145V0h48v24H0v-.145z"
        fill="url(#prefix__paint0_linear)"
      />
      <Path
        d="M25.76 10.936h-3.12V7.6h-1.657V16h1.656v-3.48h3.12V16h1.644V7.6H25.76v3.336zm8.244 4.32c.612-.612.924-1.368.924-2.256 0-.888-.312-1.632-.924-2.244-.612-.612-1.368-.924-2.256-.924-.888 0-1.644.312-2.256.924-.612.612-.912 1.356-.912 2.244 0 .888.3 1.644.912 2.256.612.612 1.368.912 2.256.912.888 0 1.644-.3 2.256-.912zm-3.42-1.068c-.3-.312-.456-.708-.456-1.188s.156-.876.456-1.188c.312-.312.696-.468 1.164-.468.468 0 .852.156 1.164.468.312.312.468.708.468 1.188s-.156.876-.468 1.188c-.312.312-.696.468-1.164.468-.468 0-.852-.156-1.164-.468zM39.32 10h-1.356V8.32l-1.548.468V10h-1.044v1.488h1.044v2.496c0 1.644.78 2.256 2.904 2.016v-1.404c-.888.048-1.356.036-1.356-.612v-2.496h1.356V10z"
        fill="#fff"
      />
      <Path d="M44 28l4-4h-4v4z" fill="#00705C" />
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear"
          x1={48}
          y1={12}
          x2={3.5}
          y2={12}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#00B495" />
          <Stop offset={1} stopColor="#FFB628" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default SvgComponent;
