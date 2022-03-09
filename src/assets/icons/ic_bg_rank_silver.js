import * as React from 'react';
import Svg, { G, Path, Ellipse, Defs, ClipPath } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function SvgComponent(props) {
  return (
    <Svg
      width={122}
      height={96}
      viewBox="0 0 122 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <G
        style={{
          mixBlendMode: 'overlay'
        }}
        opacity={0.9}
        filter="url(#filter0_d_13176_33176)">
        <Path
          opacity={0.3}
          d="M7.172 69.862l.417 1.13a.108.108 0 00.202 0l.417-1.13a3.329 3.329 0 011.972-1.97l1.13-.416a.108.108 0 000-.203l-1.13-.416a3.328 3.328 0 01-1.972-1.971l-.417-1.129a.108.108 0 00-.202 0l-.417 1.129a3.329 3.329 0 01-1.972 1.97l-1.13.417a.108.108 0 000 .203l1.13.416a3.329 3.329 0 011.972 1.97zM47.97 4.702l.25.677a.065.065 0 00.121 0l.25-.677c.202-.548.635-.98 1.183-1.183l.678-.25a.065.065 0 000-.12l-.678-.25a1.997 1.997 0 01-1.183-1.183l-.25-.677a.065.065 0 00-.122 0l-.25.677c-.202.548-.634.98-1.183 1.182l-.677.25a.065.065 0 000 .122l.677.25c.549.202.981.634 1.184 1.182zM111.341 14.685l.625 1.693a.161.161 0 00.304 0l.625-1.693a4.992 4.992 0 012.958-2.956l1.694-.624a.162.162 0 000-.304l-1.694-.625a4.99 4.99 0 01-2.958-2.956l-.625-1.693a.162.162 0 00-.304 0l-.625 1.693a4.995 4.995 0 01-2.958 2.956l-1.694.625a.162.162 0 000 .304l1.694.624a4.994 4.994 0 012.958 2.956zM18.566 84.391l.75 2.032a.195.195 0 00.365 0l.75-2.032a5.991 5.991 0 013.55-3.547l2.032-.75a.194.194 0 000-.364l-2.033-.75a5.992 5.992 0 01-3.55-3.547l-.75-2.032a.195.195 0 00-.364 0l-.75 2.032a5.992 5.992 0 01-3.55 3.547l-2.033.75a.195.195 0 000 .364l2.033.75a5.991 5.991 0 013.55 3.547z"
          fill="#fff"
        />
        <Ellipse opacity={0.3} cx={53.0773} cy={1.3651} rx={0.369003} ry={0.368766} fill="#fff" />
        <G opacity={0.3} clipPath="url(#clip0_13176_33176)">
          <Path
            d="M110.084 36.783L83.832 34.35l-10.424-24.2c-.73-1.695-3.134-1.695-3.865 0l-10.432 24.2-26.252 2.433c-1.839.17-2.582 2.456-1.195 3.673l19.804 17.39-5.8 25.704c-.407 1.8 1.538 3.212 3.126 2.27l22.671-13.453L94.133 85.82c1.587.942 3.532-.47 3.127-2.27l-5.793-25.704 19.811-17.39c1.387-1.218.644-3.503-1.194-3.673z"
            fill="#F7F7F7"
          />
          <Path
            d="M73.408 10.15c-.73-1.695-3.134-1.695-3.864 0l-10.432 24.2-26.253 2.433c-1.839.17-2.582 2.456-1.195 3.673l19.804 17.39-5.8 25.704c-.407 1.8 1.538 3.212 3.126 2.27l5.06-3.002c.705-28.81 14.102-49.097 24.708-60.702L73.408 10.15z"
            fill="#B6B6B6"
          />
        </G>
      </G>
      <Defs>
        <ClipPath id="clip0_13176_33176">
          <Path
            fill="#fff"
            transform="matrix(1 0 -.00017 1 30.951 7)"
            d="M0 0H81.0499V80.9998H0z"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgComponent;
