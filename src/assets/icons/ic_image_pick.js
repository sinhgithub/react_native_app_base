import * as React from 'react';
import Svg, { Rect, Path } from 'react-native-svg';

function SvgComponent(props, svgRef) {
  return (
    <Svg
      width={104}
      height={104}
      viewBox="0 0 104 104"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={svgRef}
      {...props}>
      <Rect width={104} height={104} rx={6} fill="#636466" fillOpacity={0.1} />
      <Rect
        x={0.5}
        y={0.5}
        width={103}
        height={103}
        rx={5.5}
        stroke="#636466"
        strokeOpacity={0.3}
        strokeDasharray="4 4"
      />
      <Path
        d="M40 57l6.293-6.293a.998.998 0 011.414 0l5.586 5.586a.998.998 0 001.414 0l2.586-2.586a.998.998 0 011.414 0L64 59"
        stroke="#939598"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M63 42H41a1 1 0 00-1 1v18a1 1 0 001 1h22a1 1 0 001-1V43a1 1 0 00-1-1z"
        stroke="#939598"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path d="M55.5 50a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" fill="#939598" />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgComponent);
export default ForwardRef;
