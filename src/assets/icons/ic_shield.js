import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props, svgRef) {
  return (
    <Svg
      width={22}
      height={24}
      viewBox="0 0 22 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={svgRef}
      {...props}>
      <Path
        d="M20.547 3.886L11.359.072a.938.938 0 00-.719 0L1.454 3.886a.938.938 0 00-.578.866V9.39a15.7 15.7 0 009.77 14.542.938.938 0 00.71 0 15.7 15.7 0 009.77-14.542V4.752a.937.937 0 00-.578-.866zM19.25 9.39A13.828 13.828 0 0111 22.044 13.828 13.828 0 012.75 9.39V5.378L11 1.953l8.25 3.425v4.011zm-9.286 3.16l4.03-4.03a.938.938 0 011.325 1.327l-4.692 4.692a.937.937 0 01-1.326 0l-2.62-2.62a.937.937 0 111.326-1.326l1.957 1.957z"
        fill="#636466"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgComponent);
export default ForwardRef;
