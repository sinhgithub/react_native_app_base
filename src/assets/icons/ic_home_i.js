import * as React from 'react';
import Svg, { Path, Mask, Rect, G } from 'react-native-svg';

function Component(props, svgRef) {
  return (
    <Svg
      width={22}
      height={22}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={svgRef}
      {...props}>
      <Mask
        id="mask0"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="22"
        height="22">
        <Rect width="22" height="22" fill="#C4C4C4" />
      </Mask>
      <G mask="url(#mask0)">
        <Path
          d="M20.461 9.69905C20.4604 9.6986 20.4599 9.69798 20.4594 9.69753L12.301 1.5394C11.9533 1.1915 11.4909 1 10.9991 1C10.5073 1 10.045 1.1915 9.69709 1.5394L1.54293 9.69341C1.54018 9.69615 1.53728 9.69905 1.53469 9.7018C0.820577 10.42 0.821798 11.5853 1.5382 12.3018C1.8655 12.6292 2.29763 12.8187 2.75982 12.8387C2.77874 12.8405 2.79766 12.8415 2.81674 12.8415H3.14175V18.8452C3.14175 20.0334 4.10855 21 5.29675 21H8.48859C8.81223 21 9.07453 20.7376 9.07453 20.4141V15.7071C9.07453 15.1649 9.51566 14.7239 10.0578 14.7239H11.9404C12.4826 14.7239 12.9236 15.1649 12.9236 15.7071V20.4141C12.9236 20.7376 13.1859 21 13.5095 21H16.7013C17.8897 21 18.8563 20.0334 18.8563 18.8452V12.8415H19.1579C19.6495 12.8415 20.1118 12.65 20.4599 12.3019C21.1771 11.5844 21.1774 10.417 20.461 9.69905ZM19.6312 11.4733C19.5047 11.5998 19.3365 11.6696 19.1579 11.6696H18.2704C17.9468 11.6696 17.6845 11.9319 17.6845 12.2555V18.8452C17.6845 19.3872 17.2435 19.8282 16.7013 19.8282H14.0954V15.7071C14.0954 14.5189 13.1288 13.5521 11.9404 13.5521H10.0578C8.86945 13.5521 7.90265 14.5189 7.90265 15.7071V19.8282H5.29675C4.75476 19.8282 4.31363 19.3872 4.31363 18.8452V12.2555C4.31363 11.9319 4.05133 11.6696 3.72769 11.6696H2.85549C2.84634 11.669 2.83733 11.6685 2.82803 11.6684C2.65347 11.6653 2.48974 11.596 2.36706 11.4732C2.10613 11.2123 2.10613 10.7876 2.36706 10.5265C2.36721 10.5265 2.36721 10.5264 2.36736 10.5262L2.36782 10.5258L10.5259 2.36795C10.6523 2.24146 10.8203 2.17188 10.9991 2.17188C11.1778 2.17188 11.3458 2.24146 11.4723 2.36795L19.6286 10.5241C19.6298 10.5253 19.6312 10.5265 19.6324 10.5278C19.892 10.7891 19.8915 11.2129 19.6312 11.4733Z"
          fill="#8694A3"
        />
      </G>
    </Svg>
  );
}

const ForwardRef = React.forwardRef(Component);
export default ForwardRef;
