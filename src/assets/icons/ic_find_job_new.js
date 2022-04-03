import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={25}
      height={24}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M16 3h2.5a1 1 0 011 1v17a1 1 0 01-1 1h-12a1 1 0 01-1-1V4a1 1 0 011-1H9"
        stroke={props.color || '#ED2025'}
        strokeWidth={1.2}
      />
      <Path
        d="M13.713 2.3l.173.3H15.9v2.8H9.1V2.6h2.014l.173-.3a1.4 1.4 0 012.426 0zM16.5 10l-5.333 5L8.5 12.5"
        stroke={props.color || '#ED2025'}
        strokeWidth={1.2}
      />
    </Svg>
  );
}

export default SvgComponent;
