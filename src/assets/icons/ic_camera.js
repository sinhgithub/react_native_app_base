import * as React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={30}
      height={30}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Circle cx={8} cy={8} r={7.5} fill="#ED2025" stroke="#fff" />
      <Path
        d="M5.6 5.611h.9L7.1 5h1.8l.6.611h.9c.16 0 .312.065.424.18.113.114.176.27.176.431V9.89a.617.617 0 01-.176.432.595.595 0 01-.424.179H5.6a.595.595 0 01-.424-.179A.617.617 0 015 9.889V6.222c0-.162.063-.317.176-.432a.595.595 0 01.424-.179zm2.4.917c-.398 0-.78.16-1.06.447a1.542 1.542 0 000 2.16c.28.287.662.448 1.06.448s.78-.16 1.06-.447a1.542 1.542 0 000-2.16A1.486 1.486 0 008 6.527zm0 .61c.239 0 .468.097.636.27a.925.925 0 010 1.296.892.892 0 01-1.272 0 .925.925 0 010-1.297A.892.892 0 018 7.14z"
        fill="#fff"
      />
    </Svg>
  );
}

export default SvgComponent;
