import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width="18"
      height="2"
      viewBox="0 0 18 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M17.1769 0.872559H0.823939C0.774609 0.872559 0.727299 0.892155 0.692418 0.927036C0.657536 0.961918 0.637939 1.00923 0.637939 1.05856C0.637939 1.10789 0.657536 1.1552 0.692418 1.19008C0.727299 1.22496 0.774609 1.24456 0.823939 1.24456H17.1769C17.2263 1.24456 17.2736 1.22496 17.3085 1.19008C17.3433 1.1552 17.3629 1.10789 17.3629 1.05856C17.3629 1.00923 17.3433 0.961918 17.3085 0.927036C17.2736 0.892155 17.2263 0.872559 17.1769 0.872559Z"
        fill="#F48220"
        stroke="#F58220"
        stroke-width="0.5"
      />
    </Svg>
  );
}

export default SvgComponent;
