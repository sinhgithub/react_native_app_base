import * as React from 'react';
import Svg, { Path, Mask, Rect, G } from 'react-native-svg';

function SvgComponent(props, svgRef) {
  return (
    <Svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={svgRef}
      {...props}>
      <Mask
        id="mask0"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="16"
        height="16">
        <Rect width="16" height="16" fill="#C4C4C4" />
      </Mask>
      <G mask="url(#mask0)">
        <Path d="M1 5C1 5 7.84998 10.4387 14.9086 5" stroke="#005E52" stroke-linecap="round" />
        <Path
          d="M3.29018 6.33617L2.19464 8.32103"
          stroke="#005E52"
          stroke-width="0.999792"
          stroke-linecap="round"
        />
        <Path d="M5.64665 7.38416L5.11865 9.64016" stroke="#005E52" stroke-linecap="round" />
        <Path d="M8.08911 7.44141V9.91741" stroke="#005E52" stroke-linecap="round" />
        <Path d="M10.5244 7.21387L11.0164 9.66454" stroke="#005E52" stroke-linecap="round" />
        <Path d="M12.9011 6.40466L13.9011 8.51132" stroke="#005E52" stroke-linecap="round" />
      </G>
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgComponent);
export default ForwardRef;
