import * as React from 'react';
import Svg, {
  Mask,
  Path,
  G,
  Ellipse,
  Defs,
  LinearGradient,
  Stop,
  ClipPath
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
        <Path fill="#C4C4C4" d="M0 0h88v88H0z" />
      </Mask>
      <G mask="url(#prefix__a)" fill="#00B495">
        <Path d="M8 69a1.5 1.5 0 01-1.5-1.5V66a1.5 1.5 0 013 0v1.5A1.5 1.5 0 018 69zM8 61.5A1.5 1.5 0 016.5 60v-1.5a1.5 1.5 0 013 0V60A1.5 1.5 0 018 61.5zM12.5 64.5H11a1.5 1.5 0 010-3h1.5a1.5 1.5 0 010 3zM5 64.5H3.5a1.5 1.5 0 010-3H5a1.5 1.5 0 010 3zM77 16a1.75 1.75 0 01-1.75-1.75V12.5a1.75 1.75 0 013.5 0v1.75A1.75 1.75 0 0177 16zM77 7.25a1.75 1.75 0 01-1.75-1.75V3.75a1.75 1.75 0 013.5 0V5.5A1.75 1.75 0 0177 7.25zM82.25 10.75H80.5a1.75 1.75 0 010-3.5h1.75a1.75 1.75 0 010 3.5zM73.5 10.75h-1.75a1.75 1.75 0 010-3.5h1.75a1.75 1.75 0 010 3.5zM62 6a2 2 0 100-4 2 2 0 000 4zM15 73a1 1 0 100-2 1 1 0 000 2z" />
        <Ellipse opacity={0.1} cx={45.499} cy={81.5} rx={30.5} ry={4.5} />
      </G>
      <G clipPath="url(#prefix__clip0)">
        <Path
          d="M46 11c-17.645 0-32 14.355-32 32s14.355 32 32 32 32-14.355 32-32-14.355-32-32-32zM29.71 36.794c0-1.02.414-2.02 1.135-2.743a3.906 3.906 0 012.743-1.136c1.02 0 2.02.415 2.742 1.136a3.902 3.902 0 011.137 2.743 3.9 3.9 0 01-1.137 2.742 3.908 3.908 0 01-2.742 1.137 3.91 3.91 0 01-2.743-1.137 3.908 3.908 0 01-1.136-2.742zM57.93 54.93a2.91 2.91 0 01-4.113 0A10.982 10.982 0 0046 51.693c-2.953 0-5.729 1.15-7.817 3.238a2.9 2.9 0 01-2.057.852 2.91 2.91 0 01-2.057-4.966 16.763 16.763 0 0111.93-4.942H46c4.507 0 8.744 1.755 11.93 4.942a2.91 2.91 0 010 4.114zm3.224-15.395a3.908 3.908 0 01-2.742 1.137 3.91 3.91 0 01-2.742-1.137 3.9 3.9 0 01-1.137-2.742c0-1.02.413-2.02 1.137-2.743a3.907 3.907 0 012.742-1.136c1.02 0 2.021.415 2.742 1.136a3.9 3.9 0 011.137 2.743 3.9 3.9 0 01-1.137 2.742z"
          fill="url(#prefix__paint0_linear)"
        />
      </G>
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear"
          x1={46}
          y1={75.012}
          x2={46}
          y2={10.988}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#00B495" />
          <Stop offset={1} stopColor="#FFB546" />
        </LinearGradient>
        <ClipPath id="prefix__clip0">
          <Path fill="#fff" transform="translate(14 11)" d="M0 0h64v64H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgComponent;
