import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

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
        d="M3.5 22l-.575-.17a.6.6 0 00.575.77V22zm18 0v.6a.6.6 0 00.575-.77L21.5 22zM16.9 7a4.4 4.4 0 01-4.4 4.4v1.2A5.6 5.6 0 0018.1 7h-1.2zm-4.4 4.4A4.4 4.4 0 018.1 7H6.9a5.6 5.6 0 005.6 5.6v-1.2zM8.1 7a4.4 4.4 0 014.4-4.4V1.4A5.6 5.6 0 006.9 7h1.2zm4.4-4.4A4.4 4.4 0 0116.9 7h1.2a5.6 5.6 0 00-5.6-5.6v1.2zM4.075 22.17C5.21 18.341 8.57 15.6 12.5 15.6v-1.2c-4.516 0-8.306 3.145-9.575 7.43l1.15.34zM12.5 15.6c3.93 0 7.29 2.741 8.425 6.57l1.15-.34c-1.27-4.285-5.059-7.43-9.575-7.43v1.2zm-9 7h18v-1.2h-18v1.2z"
        fill={props.color || '#B8B8B8'}
      />
    </Svg>
  );
}

export default SvgComponent;
