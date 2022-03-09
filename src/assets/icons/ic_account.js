import * as React from 'react';
import Svg, { Path, Mask, Rect, G, Defs, Stop, LinearGradient, ClipPath } from 'react-native-svg';

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
        <G clipPath="url(#clip0)">
          <Path
            d="M10.8572 10.6341C12.1808 10.6341 13.3268 10.1594 14.2633 9.22278C15.1997 8.28635 15.6744 7.14057 15.6744 5.81688C15.6744 4.49364 15.1997 3.34771 14.2631 2.41097C13.3265 1.4747 12.1806 1 10.8572 1C9.53352 1 8.38775 1.4747 7.45132 2.41113C6.51489 3.34756 6.04004 4.49349 6.04004 5.81688C6.04004 7.14057 6.51489 8.2865 7.45147 9.22293C8.38805 10.1592 9.53398 10.6341 10.8572 10.6341Z"
            fill="url(#paint0_linear)"
          />
          <Path
            d="M19.2862 16.3789C19.2592 15.9891 19.2046 15.564 19.1242 15.1151C19.043 14.6629 18.9385 14.2353 18.8134 13.8445C18.6841 13.4406 18.5083 13.0418 18.291 12.6595C18.0655 12.2628 17.8006 11.9174 17.5034 11.6331C17.1926 11.3357 16.812 11.0966 16.372 10.9222C15.9334 10.7487 15.4474 10.6608 14.9276 10.6608C14.7234 10.6608 14.526 10.7446 14.1446 10.9928C13.91 11.1459 13.6355 11.3229 13.3291 11.5186C13.0671 11.6856 12.7121 11.842 12.2738 11.9836C11.8461 12.122 11.4118 12.1922 10.9832 12.1922C10.5546 12.1922 10.1205 12.122 9.69229 11.9836C9.25437 11.8421 8.89945 11.6857 8.63776 11.5188C8.33427 11.3249 8.05961 11.1479 7.82142 10.9927C7.44056 10.7444 7.24296 10.6606 7.0388 10.6606C6.51878 10.6606 6.03295 10.7487 5.59456 10.9223C5.15481 11.0964 4.7741 11.3355 4.46297 11.6332C4.16589 11.9177 3.90084 12.263 3.67562 12.6595C3.45849 13.0418 3.28271 13.4405 3.15332 13.8447C3.02835 14.2355 2.92383 14.6629 2.84265 15.1151C2.76224 15.5634 2.70761 15.9887 2.6806 16.3793C2.65405 16.762 2.64062 17.1592 2.64062 17.5603C2.64062 18.6043 2.9725 19.4495 3.62695 20.0728C4.27331 20.6879 5.12856 21 6.1686 21H15.7987C16.8387 21 17.6937 20.6881 18.3402 20.0728C18.9948 19.45 19.3267 18.6046 19.3267 17.5602C19.3265 17.1572 19.3129 16.7597 19.2862 16.3789Z"
            fill="url(#paint1_linear)"
          />
        </G>
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear"
          x1="16.7282"
          y1="0.0215412"
          x2="7.01883"
          y2="9.43011"
          gradientUnits="userSpaceOnUse">
          <Stop offset="0.0769851" stopColor="#1CD6B5" />
          <Stop offset="0.545187" stopColor="#138B76" />
          <Stop offset="1" stopColor="#138B76" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear"
          x1="21.1517"
          y1="9.61056"
          x2="11.6882"
          y2="24.4095"
          gradientUnits="userSpaceOnUse">
          <Stop offset="0.0769851" stopColor="#1CD6B5" />
          <Stop offset="0.545187" stopColor="#138B76" />
          <Stop offset="1" stopColor="#138B76" />
        </LinearGradient>
        <ClipPath id="clip0">
          <Rect width="19.9999" height="20" fill="white" transform="translate(1 1)" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

const ForwardRef = React.forwardRef(Component);
export default ForwardRef;
