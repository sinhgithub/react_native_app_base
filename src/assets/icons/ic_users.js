import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function ICUsers(props, svgRef) {
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
        d="M8.25 15a4.875 4.875 0 100-9.75 4.875 4.875 0 000 9.75z"
        stroke="#636466"
        strokeWidth={1.5}
        strokeMiterlimit={10}
      />
      <Path
        d="M14.57 5.432A4.876 4.876 0 1115.893 15M1.5 18.506a8.252 8.252 0 0113.5 0M15.893 15a8.239 8.239 0 016.75 3.505"
        stroke="#636466"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(ICUsers);
export default ForwardRef;
