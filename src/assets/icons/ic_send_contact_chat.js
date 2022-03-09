import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={40}
      height={40}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Circle cx={20} cy={20} r={20} fill={props.background || '#E6E9ED'} />
      <Path
        d="M23 18.5a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm6-6.75v16.5a1.502 1.502 0 01-1.5 1.5H14a1.502 1.502 0 01-1.5-1.5v-1.875H11a.75.75 0 110-1.5h1.5v-2.25H11a.75.75 0 110-1.5h1.5v-2.25H11a.75.75 0 110-1.5h1.5v-2.25H11a.75.75 0 110-1.5h1.5V11.75a1.502 1.502 0 011.5-1.5h13.5a1.502 1.502 0 011.5 1.5zM25.85 23.3a6.358 6.358 0 00-2.572-2.033 3.75 3.75 0 10-5.056 0 6.358 6.358 0 00-2.572 2.032.75.75 0 101.2.901 4.875 4.875 0 017.8 0 .75.75 0 101.2-.9z"
        fill={props.color || '#313131'}
      />
    </Svg>
  );
}

export default SvgComponent;
