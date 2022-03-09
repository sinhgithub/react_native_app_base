import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props, svgRef) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={svgRef}
      {...props}>
      <Path
        d="M19.071 14.929a9.963 9.963 0 00-3.8-2.384 5.78 5.78 0 002.51-4.764A5.788 5.788 0 0012 2a5.788 5.788 0 00-5.781 5.781 5.78 5.78 0 002.51 4.764 9.962 9.962 0 00-3.8 2.384A9.935 9.935 0 002 22h1.563c0-4.652 3.785-8.438 8.437-8.438 4.652 0 8.438 3.786 8.438 8.438H22a9.935 9.935 0 00-2.929-7.071zM12 12a4.224 4.224 0 01-4.219-4.219A4.224 4.224 0 0112 3.563a4.224 4.224 0 014.219 4.218A4.224 4.224 0 0112 12z"
        fill="#636466"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgComponent);
export default ForwardRef;
