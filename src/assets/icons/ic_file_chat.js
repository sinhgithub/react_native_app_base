import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M14.8 6.552H12.488C10.592 6.552 9.048 5.008 9.048 3.112V0.8C9.048 0.36 8.688 0 8.248 0H4.856C2.392 0 0.400002 1.6 0.400002 4.456V11.544C0.400002 14.4 2.392 16 4.856 16H11.144C13.608 16 15.6 14.4 15.6 11.544V7.352C15.6 6.912 15.24 6.552 14.8 6.552Z"
        fill="#313131"
      />
    </Svg>
  );
}

export default SvgComponent;
