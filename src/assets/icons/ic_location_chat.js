import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';

function SvgComponent(props, svgRef) {
  return (
    <Svg
      width={40}
      height={40}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={svgRef}
      {...props}>
      <Circle cx={20} cy={20} r={20} fill={props.background || '#E6E9ED'} />
      <Path
        d="M28.62 16.45c-1.05-4.62-5.08-6.7-8.62-6.7h-.01c-3.53 0-7.57 2.07-8.62 6.69-1.17 5.16 1.99 9.53 4.85 12.28A5.436 5.436 0 0020 30.25c1.36 0 2.72-.51 3.77-1.53 2.86-2.75 6.02-7.11 4.85-12.27zM20 21.46a3.15 3.15 0 110-6.3 3.15 3.15 0 010 6.3z"
        fill={props.color || '#313131'}
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgComponent);
export default ForwardRef;
