import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.25 2.93h.562c.349 0 .682.14.929.39.246.249.384.586.384.938V5.46c0 .349-.28.632-.625.632h-5a.629.629 0 01-.625-.632V4.258a1.32 1.32 0 011.312-1.327h.563c0-.698.56-1.264 1.25-1.264s1.25.566 1.25 1.264zm4.104 1.265h-.98v1.897c0 .698-.559 1.264-1.25 1.264H6.798c-.69 0-1.25-.566-1.25-1.264V4.195h-.901a1.32 1.32 0 00-1.313 1.328v11.483a1.32 1.32 0 001.313 1.327h10.708a1.32 1.32 0 001.313-1.327V5.523a1.32 1.32 0 00-1.313-1.328zM9.332 15.373L6.25 12.256l.984-.996 2.098 2.122 4.113-4.16.984.996-5.097 5.155z"
        fill="#A9A9B2"
      />
    </Svg>
  );
}

export default SvgComponent;
