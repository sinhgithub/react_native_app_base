import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function ICNotepad(props, svgRef) {
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
        d="M9 12h6M9 15h6M5.25 3.75h13.5a.75.75 0 01.75.75v14.25A2.25 2.25 0 0117.25 21H6.75a2.25 2.25 0 01-2.25-2.25V4.5a.75.75 0 01.75-.75zM7.5 2.25v3M12 2.25v3M16.5 2.25v3"
        stroke="#636466"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(ICNotepad);
export default ForwardRef;
