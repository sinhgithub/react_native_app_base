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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25.969 17.39c0 .905.736 1.641 1.64 1.641h5.672v14.39A2.581 2.581 0 0130.703 36H17.578A2.581 2.581 0 0115 33.422V14.578A2.581 2.581 0 0117.578 12h8.39v5.39zm-3.716 11.485h-3.41a.703.703 0 100 1.406h3.41a.703.703 0 000-1.406zm-3.41-3.75a.703.703 0 100 1.406h10.313a.703.703 0 100-1.406H18.844zm11.016-3.047a.703.703 0 00-.703-.703H18.844a.703.703 0 100 1.406h10.312a.703.703 0 00.703-.703zm-2.25-4.453a.235.235 0 01-.234-.235v-5.099c.21.11.405.248.58.414l4.52 4.276c.199.188.364.406.493.644h-5.359z"
        fill="url(#prefix__paint0_linear)"
      />
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear"
          x1={24.141}
          y1={36.004}
          x2={24.141}
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
