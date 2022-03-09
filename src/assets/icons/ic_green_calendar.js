import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={14}
      height={14}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M11.375 2.188h-8.75a.438.438 0 00-.438.437v8.75c0 .242.196.438.438.438h8.75a.438.438 0 00.438-.438v-8.75a.438.438 0 00-.438-.438zM9.625 1.313v1.75M4.375 1.313v1.75M2.188 4.813h9.624"
        stroke="#939598"
        strokeWidth={1.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgComponent;
