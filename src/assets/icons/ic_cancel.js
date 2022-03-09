import * as React from 'react';
import Svg, {
  Mask,
  Rect,
  G,
  Path,
  Circle,
  Ellipse,
  Defs,
  LinearGradient,
  Stop
} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={88}
      height={88}
      viewBox="0 0 88 88"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Mask id="prefix__a" maskUnits="userSpaceOnUse" x={0} y={0} width={88} height={88}>
        <Rect width={88} height={88} rx={6} fill="#F5F5F5" />
      </Mask>
      <G mask="url(#prefix__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M54.29 24.793a4.857 4.857 0 01-4.852-4.851V4H24.623C20.42 4 17 7.42 17 11.624V67.35c0 4.204 3.42 7.624 7.624 7.624h29.857a14.93 14.93 0 01-2.31-8c0-8.284 6.717-15 15-15 1.346 0 2.65.178 3.891.51v-27.69H54.29zm-25.923 29.11h10.08a2.08 2.08 0 010 4.16h-10.08a2.08 2.08 0 010-4.16zm-2.08-9.01c0-1.148.932-2.079 2.08-2.079h30.497a2.08 2.08 0 010 4.159H28.367a2.08 2.08 0 01-2.08-2.08zm32.577-13.169a2.08 2.08 0 010 4.159H28.367a2.08 2.08 0 010-4.159h30.497zm-5.268-11.783c0 .382.311.693.693.693h15.847a7.606 7.606 0 00-1.458-1.903L55.312 6.085a7.644 7.644 0 00-1.716-1.223v15.08z"
          fill="url(#prefix__paint0_linear)"
        />
        <Path
          d="M75.661 58.486c-4.682-4.682-12.297-4.682-16.979 0-4.68 4.68-4.68 12.298 0 16.979a11.971 11.971 0 008.49 3.51 11.97 11.97 0 008.49-3.51c4.68-4.681 4.68-12.298 0-16.98zm-3.537 12.027a1 1 0 11-1.415 1.414l-3.537-3.538-3.535 3.537a1.001 1.001 0 01-1.415-1.415l3.535-3.536-3.536-3.537a1 1 0 111.414-1.415l3.537 3.537 3.537-3.537a1 1 0 111.415 1.415l-3.537 3.537 3.537 3.538z"
          fill="#EF413D"
        />
        <Rect
          x={74.143}
          y={1.732}
          width={2.616}
          height={10.465}
          rx={1.308}
          transform="rotate(26.198 74.143 1.732)"
          fill="#00B495"
        />
        <Rect
          x={67.734}
          y={5.869}
          width={2.616}
          height={10.465}
          rx={1.308}
          transform="rotate(-63.802 67.734 5.869)"
          fill="#00B495"
        />
        <Rect
          x={9.223}
          y={65.325}
          width={2}
          height={8}
          rx={1}
          transform="rotate(26.198 9.223 65.325)"
          fill="#00B495"
        />
        <Rect
          x={4.324}
          y={68.486}
          width={2}
          height={8}
          rx={1}
          transform="rotate(-63.802 4.324 68.486)"
          fill="#00B495"
        />
        <Circle cx={83.5} cy={19.5} r={1.5} fill="#00B495" />
        <Circle cx={2} cy={60} r={1} fill="#00B495" />
        <Ellipse opacity={0.1} cx={46.5} cy={83.5} rx={30.5} ry={4.5} fill="#00B495" />
      </G>
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear"
          x1={44.031}
          y1={74.987}
          x2={44.031}
          y2={3.987}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#00B495" />
          <Stop offset={1} stopColor="#FFB546" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default SvgComponent;
