import * as React from 'react';
import Svg, { Image } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={310}
      height={310}
      viewBox="0 0 310 310"
      {...props}>
      <Image
        x={13}
        y={31}
        width={286}
        height={257}
        xlinkHref="data:img/png;base64,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"
      />
    </Svg>
  );
}

export default SvgComponent;
