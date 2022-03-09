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
        d="M12 2.25A9.75 9.75 0 112.25 12 9.761 9.761 0 0112 2.25zm4.5 10.875a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25zm-4.5 0a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25zm-4.5 0a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z"
        fill="#FF951F"
      />
    </Svg>
  );
}

export default SvgComponent;
