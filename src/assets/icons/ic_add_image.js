import * as React from 'react';
import Svg, { Rect, Path, Defs, LinearGradient, Stop } from 'react-native-svg';

function SvgComponent(props, svgRef) {
  return (
    <Svg
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={svgRef}
      {...props}>
      <Rect opacity={0.08} width={48} height={48} rx={8} fill="#8694A3" />
      <Path
        d="M24 12c-6.617 0-12 5.383-12 12s5.383 12 12 12 12-5.383 12-12-5.383-12-12-12z"
        fill="url(#prefix__paint0_linear)"
      />
      <Path
        d="M29.25 25H25v4.25a1 1 0 01-2 0V25h-4.25a1 1 0 010-2H23v-4.25a1 1 0 012 0V23h4.25a1 1 0 010 2z"
        fill="#FAFAFA"
      />
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear"
          x1={24}
          y1={36.004}
          x2={24}
          y2={11.996}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#EF8022" />
          <Stop offset={1} stopColor="#F5AC58" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgComponent);
export default ForwardRef;
