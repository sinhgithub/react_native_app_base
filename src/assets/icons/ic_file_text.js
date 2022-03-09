import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function ICFileText(props, svgRef) {
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
        d="M18.75 21H5.25a.75.75 0 01-.75-.75V3.75A.75.75 0 015.25 3h9l5.25 5.25v12a.75.75 0 01-.75.75z"
        stroke="#636466"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.25 3v5.25h5.25M9 12.75h6M9 15.75h6"
        stroke="#636466"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(ICFileText);
export default ForwardRef;
