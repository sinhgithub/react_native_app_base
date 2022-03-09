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
            d="M20.4603 9.69904C20.4598 9.69858 20.4594 9.69812 20.4589 9.69766L12.3005 1.53955C11.9527 1.19165 11.4904 1 10.9986 1C10.5068 1 10.0445 1.1915 9.69658 1.5394L1.54244 9.69339C1.53969 9.69614 1.53695 9.69904 1.5342 9.70178C0.820089 10.42 0.82131 11.5853 1.53771 12.3017C1.86501 12.6292 2.29729 12.8188 2.75948 12.8387C2.77825 12.8405 2.79717 12.8414 2.81624 12.8414H3.14141V18.8453C3.14141 20.0334 4.10805 21 5.29641 21H8.48824C8.81173 21 9.07418 20.7377 9.07418 20.4141V15.707C9.07418 15.1649 9.51516 14.7239 10.0573 14.7239H11.9399C12.4821 14.7239 12.9231 15.1649 12.9231 15.707V20.4141C12.9231 20.7377 13.1854 21 13.509 21H16.7008C17.8892 21 18.8558 20.0334 18.8558 18.8453V12.8414H19.1573C19.649 12.8414 20.1113 12.6499 20.4594 12.302C21.1765 11.5844 21.1768 10.4171 20.4603 9.69904Z"
            fill="url(#paint0_linear)"
          />
        </G>
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear"
          x1="23.1847"
          y1="-1.03125"
          x2="3.02856"
          y2="18.4979"
          gradientUnits="userSpaceOnUse">
          <Stop offset="0.0769851" stopColor="#1CD6B5" />
          <Stop offset="0.545187" stopColor="#138B76" />
          <Stop offset="1" stopColor="#138B76" />
        </LinearGradient>
        <ClipPath id="clip0">
          <Rect x="1" y="1" width="20" height="20" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

const ForwardRef = React.forwardRef(Component);
export default ForwardRef;
