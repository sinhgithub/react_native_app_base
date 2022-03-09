import * as React from 'react';
import Svg, { Mask, Path, G } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={20} height={20} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <Mask
        id="prefix__a"
        style={{
          maskType: 'alpha'
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={20}
        height={20}>
        <Path fillRule="evenodd" clipRule="evenodd" d="M0 0h19.953v19.954H0V0z" fill="#fff" />
      </Mask>
      <G mask="url(#prefix__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.651 1.5c-2.52 0-4.15 1.729-4.15 4.404v8.146c0 2.676 1.63 4.404 4.15 4.404h8.646c2.526 0 4.156-1.728 4.156-4.404V5.904c.003-1.363-.413-2.501-1.201-3.29-.729-.729-1.747-1.114-2.95-1.114h-8.65zm8.646 18.454H5.651c-3.38 0-5.65-2.373-5.65-5.904V5.904C0 2.373 2.27 0 5.65 0h8.651c1.609 0 2.995.537 4.01 1.554 1.061 1.062 1.643 2.607 1.641 4.351v8.145c0 3.531-2.273 5.904-5.655 5.904z"
          fill="#FF951F"
        />
      </G>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.857 5.69a1.096 1.096 0 10.002 2.192 1.096 1.096 0 00-.002-2.193zm0 3.69a2.598 2.598 0 01-2.595-2.595A2.598 2.598 0 016.858 4.19a2.6 2.6 0 012.596 2.595v.001A2.598 2.598 0 016.858 9.38zM1.749 18.111a.75.75 0 01-.653-1.117c.06-.108 1.495-2.645 3.074-3.945 1.252-1.03 2.6-.464 3.686-.007.639.27 1.243.523 1.823.523.532 0 1.199-.94 1.789-1.769.819-1.156 1.749-2.464 3.11-2.464 2.17 0 4.044 1.936 5.05 2.976l.117.12a.751.751 0 01-.016 1.061.748.748 0 01-1.06-.016l-.118-.122c-.852-.88-2.438-2.519-3.972-2.519-.588 0-1.278.973-1.89 1.832-.837 1.18-1.704 2.401-3.01 2.401-.883 0-1.692-.34-2.405-.64-1.134-.479-1.648-.632-2.151-.218-1.364 1.124-2.706 3.498-2.72 3.521a.749.749 0 01-.654.383z"
        fill="#FF951F"
      />
    </Svg>
  );
}

export default SvgComponent;
