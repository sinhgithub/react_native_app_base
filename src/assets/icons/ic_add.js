import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M10 18a2 2 0 104 0v-4h4a2 2 0 100-4h-4V6a2 2 0 10-4 0v4H6a2 2 0 100 4h4v4z"
        fill="#367C4D"
      />
    </Svg>
  );
}

export default SvgComponent;
