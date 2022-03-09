import * as React from 'react';
import Svg, { Circle } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Circle cx="16" cy="16" r="16" fill="#F5F7FA" />
    </Svg>
  );
}

export default SvgComponent;
