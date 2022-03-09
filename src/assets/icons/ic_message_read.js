import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M3.33335 9C1.86002 9 0.666687 10.1933 0.666687 11.6667C0.666687 12.1667 0.806687 12.64 1.05335 13.04C1.51335 13.8133 2.36002 14.3333 3.33335 14.3333C4.30669 14.3333 5.15335 13.8133 5.61335 13.04C5.86002 12.64 6.00002 12.1667 6.00002 11.6667C6.00002 10.1933 4.80669 9 3.33335 9ZM4.64669 11.4467L3.22669 12.76C3.13335 12.8467 3.00669 12.8933 2.88669 12.8933C2.76002 12.8933 2.63335 12.8467 2.53335 12.7467L1.87335 12.0867C1.68002 11.8933 1.68002 11.5733 1.87335 11.38C2.06669 11.1867 2.38669 11.1867 2.58002 11.38L2.90002 11.7L3.96669 10.7133C4.16669 10.5267 4.48669 10.54 4.67335 10.74C4.86002 10.94 4.84669 11.26 4.64669 11.4467Z"
        fill="white"
      />
      <Path
        d="M11.5 1.62H5.16667C3.26667 1.62 2 2.88666 2 4.78666V7.76C2 7.99333 2.24 8.16 2.46667 8.09999C2.74667 8.03333 3.03333 8 3.33333 8C5.24 8 6.81333 9.54666 6.98667 11.42C7 11.6067 7.15333 11.7533 7.33333 11.7533H7.7L10.52 13.6333C10.9333 13.9133 11.5 13.6067 11.5 13.1V11.7533C12.4467 11.7533 13.24 11.4333 13.7933 10.8867C14.3467 10.3267 14.6667 9.53333 14.6667 8.58666V4.78666C14.6667 2.88666 13.4 1.62 11.5 1.62ZM10.5533 7.20666H6.11333C5.85333 7.20666 5.64 6.99333 5.64 6.73333C5.64 6.46666 5.85333 6.25333 6.11333 6.25333H10.5533C10.8133 6.25333 11.0267 6.46666 11.0267 6.73333C11.0267 6.99333 10.8133 7.20666 10.5533 7.20666Z"
        fill="white"
      />
    </Svg>
  );
}

export default SvgComponent;
