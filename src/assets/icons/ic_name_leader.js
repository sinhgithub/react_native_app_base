import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <Path
        d="M12 15a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z"
        stroke="#636466"
        strokeWidth={1.5}
        strokeMiterlimit={10}
      />
      <Path
        d="M5.981 18.691a6.753 6.753 0 0112.038 0M18.75 6.75a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM18.75 3.75V2.625M17.451 4.5l-.974-.563M17.451 6l-.974.563M18.75 6.75v1.125M20.05 6l.973.563M20.05 4.5l.973-.563M20.936 10.922a9 9 0 11-8.1-7.884"
        stroke="#636466"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgComponent;
