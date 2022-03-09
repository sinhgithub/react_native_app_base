import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={311}
      height={1}
      viewBox="0 0 311 1"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path stroke={props.color || '#E6E7E8'} strokeDasharray="4 4" d="M0 0.5L311 0.5" />
    </Svg>
  );
}

export default SvgComponent;
