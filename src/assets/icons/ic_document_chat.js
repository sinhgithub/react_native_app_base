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
        d="M28.5 18.19h-2.89c-2.37 0-4.3-1.93-4.3-4.3V11c0-.55-.45-1-1-1h-4.24c-3.08 0-5.57 2-5.57 5.57v8.86C10.5 28 12.99 30 16.07 30h7.86c3.08 0 5.57-2 5.57-5.57v-5.24c0-.55-.45-1-1-1z"
        fill={props.color || '#313131'}
      />
      <Path
        d="M23.8 10.21c-.41-.41-1.12-.13-1.12.44v3.49c0 1.46 1.24 2.67 2.75 2.67.95.01 2.27.01 3.4.01.57 0 .87-.67.47-1.07-1.44-1.45-4.02-4.06-5.5-5.54z"
        fill={props.color || '#313131'}
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgComponent);
export default ForwardRef;
