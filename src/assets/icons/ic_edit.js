import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <Path
        d="M9 20.25H4.5a.75.75 0 01-.75-.75v-4.19a.75.75 0 01.22-.53L15.22 3.53a.75.75 0 011.06 0l4.19 4.19a.75.75 0 010 1.06L9 20.25zM12.75 6L18 11.25"
        stroke="#939598"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20.25 20.25H9l-5.202-5.202"
        stroke="#939598"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const MemoSvgComponent = React.memo(SvgComponent);
export default MemoSvgComponent;
