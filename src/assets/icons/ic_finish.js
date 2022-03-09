import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={88}
      height={88}
      viewBox="0 0 88 88"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.666 44C.666 20.066 20.067.665 43.999.665c23.933 0 43.334 19.4 43.334 43.333S67.932 87.333 43.999 87.333c-23.932 0-43.333-19.4-43.333-43.334zm40.09 16.676L68.732 32.7a3.915 3.915 0 00-5.536-5.536L37.987 52.372 24.65 39.032a3.915 3.915 0 10-5.538 5.538L35.22 60.677a3.918 3.918 0 005.537 0v-.001z"
        fill="#367C4D"
      />
    </Svg>
  );
}

export default SvgComponent;
