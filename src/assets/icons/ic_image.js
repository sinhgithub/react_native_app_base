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
        d="M31.74 15H16.261A2.264 2.264 0 0014 17.263v14.224a2.263 2.263 0 002.262 2.261H31.74A2.262 2.262 0 0034 31.488V17.263A2.263 2.263 0 0031.74 15zm-4.807 3.366a2.185 2.185 0 110 4.37 2.185 2.185 0 010-4.37zm4.097 13.291H17.283c-.603 0-.872-.436-.6-.975l3.75-7.427c.271-.538.79-.586 1.156-.107l3.77 4.927c.367.48 1.008.52 1.432.09l.922-.933c.424-.43 1.049-.377 1.395.118l2.388 3.411c.345.495.137.896-.466.896z"
        fill="url(#prefix__paint0_linear)"
      />
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear"
          x1={24}
          y1={33.752}
          x2={24}
          y2={14.997}
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
