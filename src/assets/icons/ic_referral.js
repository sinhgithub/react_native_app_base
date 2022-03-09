import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <Path
        d="M9 5.25v13.5M2.25 15.674a.749.749 0 01.6-.734 3 3 0 000-5.88.749.749 0 01-.6-.734V6A.75.75 0 013 5.25h18a.75.75 0 01.75.75v2.326a.75.75 0 01-.6.734 3 3 0 000 5.88.75.75 0 01.6.734V18a.75.75 0 01-.75.75H3a.75.75 0 01-.75-.75v-2.326z"
        stroke="#636466"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const MemoSvgComponent = React.memo(SvgComponent);
export default MemoSvgComponent;
