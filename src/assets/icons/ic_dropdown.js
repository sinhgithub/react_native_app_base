import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M4.08 4.95a.8.8 0 00-1.131.014.813.813 0 000 1.138l5.084 5.182 5.017-5.186a.819.819 0 00-.257-1.319.793.793 0 00-.871.168L8.05 8.787 4.08 4.95z"
        fill="#005E52"
      />
    </Svg>
  );
}

export default SvgComponent;
