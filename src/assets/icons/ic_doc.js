import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.828 5.39c0 .905.736 1.641 1.64 1.641h5.673v14.39A2.581 2.581 0 0118.563 24H5.438a2.581 2.581 0 01-2.579-2.578V2.578A2.581 2.581 0 015.438 0h8.39v5.39zm-3.716 11.485H6.703a.703.703 0 000 1.406h3.409a.703.703 0 000-1.406zm-3.409-3.75a.703.703 0 000 1.406h10.313a.703.703 0 100-1.406H6.703zm11.016-3.047a.703.703 0 00-.703-.703H6.703a.703.703 0 000 1.406h10.313a.703.703 0 00.703-.703zm-2.25-4.453a.235.235 0 01-.235-.234V.29c.21.11.405.248.58.414l4.52 4.276c.2.188.365.406.493.644H15.47z"
        fill="#63B2F3"
      />
    </Svg>
  );
}

export default SvgComponent;
