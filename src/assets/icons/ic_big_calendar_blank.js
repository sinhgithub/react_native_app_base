import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function ICBigCalendarBlank(props, svgRef) {
  return (
    <Svg
      width={41}
      height={47}
      viewBox="0 0 41 47"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={svgRef}
      {...props}>
      <Path
        d="M0 16.451h41V7.065c0-.498-.196-.976-.546-1.328a1.857 1.857 0 00-1.318-.55H1.864c-.495 0-.969.198-1.318.55C.196 6.09 0 6.567 0 7.065v9.386z"
        fill="#F99D33"
      />
      <Path
        d="M1.864 5.938h37.272c.61 0 1.114.499 1.114 1.127V44.61a1.12 1.12 0 01-1.114 1.127H1.864c-.61 0-1.114-.5-1.114-1.127V7.065a1.12 1.12 0 011.114-1.128zM31.682 1.433v7.509M9.318 1.433v7.509M1 16.451h39"
        stroke="#005E52"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(ICBigCalendarBlank);
export default ForwardRef;
