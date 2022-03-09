import * as React from 'react';
import Svg, { Mask, Path, G, Defs, LinearGradient, Stop } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={22}
      height={22}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Mask id="prefix__a" maskUnits="userSpaceOnUse" x={0} y={0} width={22} height={22}>
        <Path fill="#C4C4C4" d="M0 0h22v22H0z" />
      </Mask>
      <G mask="url(#prefix__a)">
        <Path
          d="M10.79 1C5.942 1 2 4.943 2 9.79v4.765c0 .969.789 1.758 1.758 1.758.411 0 .76.28 1.035.586a1.76 1.76 0 003.066-1.172V10.96a1.76 1.76 0 00-1.757-1.758c-.52 0-.987.226-1.309.585-.274.307-.624.587-1.035.587-.292 0-.586-.205-.586-.497V9.79c0-4.2 3.417-7.617 7.617-7.617s7.617 3.417 7.617 7.617v.09c0 .29-.294.496-.586.496-.411 0-.76-.28-1.035-.587a1.753 1.753 0 00-1.308-.585 1.76 1.76 0 00-1.758 1.758v4.766c0 .969.788 1.757 1.758 1.757.22 0 .412.207.289.39-.316.472-.853.782-1.461.782-1.114 0-2.115-.954-3.213-1.145a1.76 1.76 0 00-2.06 1.731 1.76 1.76 0 002.06 1.732c1.098-.192 2.099-1.146 3.213-1.146a2.933 2.933 0 002.93-2.93c0-.323.262-.585.585-.585a1.76 1.76 0 001.758-1.758V9.789C19.578 4.943 15.635 1 10.79 1zm-5.274 9.96a.587.587 0 011.171 0v4.767a.587.587 0 01-1.171 0V10.96zm-1.758.587c.323 0 .586.262.586.586v2.422a.587.587 0 01-1.172 0v-2.422c0-.323.263-.586.586-.586zm7.031 8.281a.587.587 0 11.001-1.173.587.587 0 010 1.173zm5.274-4.101a.587.587 0 01-1.172 0V10.96a.587.587 0 011.171 0v4.766zm2.343-1.172a.586.586 0 11-1.172 0v-2.422a.587.587 0 011.172 0v2.422z"
          fill="url(#prefix__paint0_linear)"
        />
      </G>
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear"
          x1={20.75}
          y1={3.333}
          x2={-2.163}
          y2={11.869}
          gradientUnits="userSpaceOnUse">
          <Stop offset={0.114} stopColor="#03C2A2" />
          <Stop offset={0.371} stopColor="#11A288" />
          <Stop offset={0.7} stopColor="#0086CB" />
          <Stop offset={0.91} stopColor="#0086CB" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default SvgComponent;
