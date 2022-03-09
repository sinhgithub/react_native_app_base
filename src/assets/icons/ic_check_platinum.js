import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M10 .25C4.624.25.25 4.624.25 10s4.374 9.75 9.75 9.75 9.75-4.374 9.75-9.75S15.376.25 10 .25zm5.074 6.482l-6.3 7.5a.748.748 0 01-.562.268h-.013a.75.75 0 01-.557-.248l-2.7-3a.751.751 0 01.88-1.186c.09.045.17.107.234.182l2.123 2.36 5.747-6.84a.75.75 0 011.148.964z"
        fill="#3C4D83"
      />
    </Svg>
  );
}

export default SvgComponent;
