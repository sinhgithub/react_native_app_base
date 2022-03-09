import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.991 12a2 2 0 012-2h.018a2 2 0 110 4h-.018a2 2 0 01-2-2zM9.991 12a2 2 0 012-2h.018a2 2 0 110 4h-.018a2 2 0 01-2-2zM1.991 12a2 2 0 012-2h.018a2 2 0 110 4h-.018a2 2 0 01-2-2z"
        fill="#313131"
      />
    </Svg>
  );
}

export default SvgComponent;
