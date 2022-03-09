import * as React from 'react';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={22}
      height={22}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M20.625 11c0 .897-.645 1.57-1.215 2.164-.324.338-.66.688-.786.994-.116.281-.123.747-.13 1.198-.013.839-.027 1.79-.688 2.45-.66.66-1.611.675-2.45.688-.45.007-.917.014-1.198.13-.306.127-.656.462-.994.786-.594.57-1.267 1.215-2.164 1.215-.897 0-1.57-.645-2.164-1.215-.338-.324-.688-.66-.994-.786-.281-.116-.747-.123-1.198-.13-.839-.013-1.79-.027-2.45-.688-.66-.66-.675-1.611-.688-2.45-.007-.45-.014-.917-.13-1.198-.127-.306-.462-.656-.786-.994-.57-.594-1.215-1.267-1.215-2.164 0-.897.645-1.57 1.215-2.164.324-.338.66-.688.786-.994.116-.281.123-.747.13-1.198.013-.839.027-1.79.688-2.45.66-.66 1.611-.675 2.45-.688.45-.007.917-.014 1.198-.13.306-.127.656-.462.994-.786.594-.57 1.267-1.215 2.164-1.215.897 0 1.57.645 2.164 1.215.338.324.688.66.994.786.281.116.747.123 1.198.13.839.013 1.79.027 2.45.688.66.66.675 1.611.688 2.45.007.45.014.917.13 1.198.127.306.462.656.786.994.57.594 1.215 1.267 1.215 2.164z"
        fill="url(#prefix__paint0_linear)"
      />
      <Path d="M8.645 13.355l4.711-4.711z" fill="#939598" />
      <Path
        d="M8.645 13.355l4.711-4.711"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.352 14.046a.687.687 0 01-.486-.202.754.754 0 01-.201-.486.712.712 0 01.202-.486.71.71 0 011.127.22.852.852 0 01.046.266.79.79 0 01-.046.257.783.783 0 01-.156.229.687.687 0 01-.486.202zM8.641 9.334a.616.616 0 01-.257-.056.75.75 0 01-.23-.145.883.883 0 01-.146-.23.654.654 0 010-.523.618.618 0 01.147-.219.707.707 0 01.971 0 .685.685 0 01.202.486.61.61 0 01-.046.256.924.924 0 01-.156.23.708.708 0 01-.485.201z"
        fill="#fff"
      />
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear"
          x1={21.908}
          y1={3.621}
          x2={-2.315}
          y2={13.887}
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
