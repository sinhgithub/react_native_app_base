import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={25}
      height={24}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.5 8c0-1.11-.89-2-2-2h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2h-4c-1.11 0-1.99.89-1.99 2L2.5 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8zm-7.785-2c.266 0 .399 0 .501-.05a.5.5 0 00.235-.234c.049-.102.049-.235.049-.501V4.178c0-.4 0-.599-.074-.753a.75.75 0 00-.351-.351C14.92 3 14.72 3 14.323 3h-3.646c-.398 0-.598 0-.752.074a.75.75 0 00-.351.351c-.074.154-.074.354-.074.753v1.037c0 .266 0 .399.05.501a.5.5 0 00.234.235c.102.049.235.049.501.049h4.43zM3.5 8.59v9.82c0 .6.506 1.09 1.125 1.09h15.75c.619 0 1.125-.49 1.125-1.09V8.59c0-.6-.506-1.09-1.125-1.09H4.625c-.619 0-1.125.49-1.125 1.09z"
        fill={props.color || '#B8B8B8'}
      />
      <Path stroke={props.color || '#B8B8B8'} strokeWidth={0.5} d="M13.5 12.75L22.5 12.75" />
      <Path stroke={props.color || '#B8B8B8'} strokeWidth={0.5} d="M2.5 12.75L11.5 12.75" />
      <Circle cx={12.5} cy={12.5} r={1} fill="#818181" stroke={props.color || '#B8B8B8'} />
    </Svg>
  );
}

export default SvgComponent;
