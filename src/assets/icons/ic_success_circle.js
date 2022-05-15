import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={62}
      height={62}
      viewBox="0 0 62 62"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M24.8 46.5L9.3 31l4.371-4.402L24.8 37.727l23.529-23.529L52.7 18.6 24.8 46.5zM31 0a31 31 0 100 62 31 31 0 000-62z"
        fill="#51BF29"
      />
    </Svg>
  );
}

export default SvgComponent;
