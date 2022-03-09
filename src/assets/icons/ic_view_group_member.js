import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <Path
        d="M11.362 14.808a5.625 5.625 0 10-6.224 0 9.02 9.02 0 00-4.252 3.266.75.75 0 00.614 1.182H15a.75.75 0 00.613-1.182 9.02 9.02 0 00-4.25-3.266z"
        fill="#000"
      />
      <Path
        d="M23.256 18.074a9.02 9.02 0 00-4.251-3.266A5.626 5.626 0 0014.367 4.71a.75.75 0 00-.399 1.17 7.11 7.11 0 01.36 7.958.75.75 0 00.192.993c.285.212.558.438.82.677.013.014.027.03.042.043a10.504 10.504 0 012.389 3.272.75.75 0 00.68.433h4.192a.75.75 0 00.613-1.182z"
        fill="#000"
      />
    </Svg>
  );
}

export default SvgComponent;
