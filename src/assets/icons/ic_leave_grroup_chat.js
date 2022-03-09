import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <Path
        d="M20.78 12.53l-3.936 3.938a.75.75 0 01-1.28-.53V12.75H9.75a.75.75 0 110-1.5h5.813V8.062a.75.75 0 011.281-.53l3.936 3.938a.75.75 0 010 1.06zM9.75 19.5H4.5v-15h5.25a.75.75 0 100-1.5H4.5A1.502 1.502 0 003 4.5v15A1.502 1.502 0 004.5 21h5.25a.75.75 0 100-1.5z"
        fill="#EE2624"
      />
    </Svg>
  );
}

export default SvgComponent;
