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
        d="M18.75 6.75a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM18.75 3.75V2.625M17.45 4.5l-.973-.563M17.45 6l-.973.563M18.75 6.75v1.125M20.05 6l.973.563M20.05 4.5l.973-.563M2.905 20.25a10.504 10.504 0 0118.19 0M17.496 11.41a5.998 5.998 0 11-4.665-8.353"
        stroke="#636466"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgComponent);
export default ForwardRef;
