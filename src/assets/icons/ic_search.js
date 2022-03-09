import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const ICSearch = ({ color, ...props }) => {
  return (
    <Svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.187 15.86a.476.476 0 00.674-.673l-4.458-4.458c.984-1.139 1.6-2.605 1.6-4.228A6.5 6.5 0 006.5 0 6.5 6.5 0 000 6.5a6.5 6.5 0 006.501 6.502c1.623 0 3.09-.615 4.228-1.599l4.458 4.457zM6.5 1A5.502 5.502 0 116.5 12.004 5.502 5.502 0 016.501 1z"
        fill={color ? color : '#828282'}
      />
    </Svg>
  );
};

export default ICSearch;
