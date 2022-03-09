import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function ICEnvelop(props, svgRef) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={svgRef}
      {...props}>
      <Path
        d="M21.75 5.232a.72.72 0 00-.082-.321.86.86 0 00-.078-.123.705.705 0 00-.025-.03l-.012-.015-.011-.01a.74.74 0 00-.114-.098l-.028-.019-.034-.02-.03-.016-.034-.016-.034-.014-.034-.012-.037-.01-.033-.01a.773.773 0 00-.148-.017L21 4.5H2.985a.753.753 0 00-.113.012l-.036.006-.035.01-.035.01-.035.012-.032.013-.036.018c-.01.004-.02.01-.029.015a.75.75 0 00-.035.02l-.027.018a.71.71 0 00-.114.098l-.01.011-.013.015a.783.783 0 00-.146.255.777.777 0 00-.038.22l-.001.017V18a1.502 1.502 0 001.5 1.5h16.5a1.502 1.502 0 001.5-1.5V5.25v-.018zm-18 1.723L9.254 12 3.75 17.045V6.955zM4.928 18l5.436-4.982 1.13 1.035a.75.75 0 001.013 0l1.13-1.036L19.071 18H4.928zm9.818-6l5.504-5.045v10.09L14.747 12z"
        fill="#00B495"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(ICEnvelop);
export default ForwardRef;
