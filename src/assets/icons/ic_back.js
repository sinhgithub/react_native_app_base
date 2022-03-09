import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function Component(props, svgRef) {
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
        d="M16.5759 6.12078C16.7978 5.89279 16.9201 5.586 16.9159 5.26787C16.9117 4.94974 16.7813 4.6463 16.5534 4.42428C16.3255 4.20092 16.019 4.07582 15.6999 4.07582C15.3808 4.07582 15.0744 4.20092 14.8464 4.42428L7.07341 12.0503L14.8524 19.5758C15.0818 19.7993 15.3894 19.9243 15.7097 19.9243C16.0299 19.9243 16.3375 19.7993 16.5669 19.5758C16.6796 19.4659 16.7694 19.3348 16.8311 19.19C16.8928 19.0453 16.9251 18.8897 16.9262 18.7323C16.9274 18.5749 16.8972 18.4189 16.8376 18.2732C16.778 18.1276 16.6901 17.9952 16.5789 17.8838L10.8189 12.0758L16.5759 6.12078Z"
        fill={props.color || '#0B2520'}
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(Component);
export default ForwardRef;
