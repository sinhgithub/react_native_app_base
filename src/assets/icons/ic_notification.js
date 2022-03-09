import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={21}
      height={24}
      viewBox="0 0 21 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M18.754 18.947H1.7a1.693 1.693 0 01-1.5-.868c-.316-.553-.237-1.184.079-1.737L1.148 15C2.57 12.868 3.28 10.421 3.28 7.895c0-2.921 1.895-5.606 4.658-6.553C8.412.474 9.28 0 10.228 0c.947 0 1.815.474 2.289 1.342 2.763.947 4.658 3.632 4.658 6.553 0 2.526.71 4.973 2.131 7.105l.869 1.342c.316.553.395 1.184.079 1.737-.237.553-.869.868-1.5.868zM6.359 20.526c.395 1.816 1.974 3.158 3.868 3.158 1.895 0 3.474-1.342 3.869-3.158H6.359z"
        fill="#fff"
      />
    </Svg>
  );
}

export default SvgComponent;
