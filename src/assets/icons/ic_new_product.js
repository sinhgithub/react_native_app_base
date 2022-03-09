import {AppText} from 'components/';
import {FONT_FAMILY, FONT_SIZE} from 'constants/appFonts';
import {TEXT_COLOR} from 'constants/colors';
import * as React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import Svg, {Path, Defs, LinearGradient, Stop} from 'react-native-svg';
import {scale} from 'utils/responsive';

function SvgComponent(props, svgRef) {
  const {title, startColor, stopColor, translate = false} = props;
  return (
    <Svg
      width={52}
      height={30}
      viewBox="0 0 52 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={svgRef}
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 25.559l11.917-12.702L0 .155V0h52v25.714H0v-.155z"
        fill="url(#prefix__paint0_linear)"
      />
      <Path d="M47.667 30L52 25.714h-4.333V30z" fill={stopColor || '#00705C'} />
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear"
          x1={52}
          y1={12.857}
          x2={3.792}
          y2={12.857}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={stopColor || '#00B495'} />
          <Stop offset={1} stopColor={startColor || '#FFB628'} />
        </LinearGradient>
      </Defs>
      <View
        style={[
          styles.titleContainer,
          {width: props.width || 48, height: props.height || 24},
        ]}>
        <AppText translate={translate} style={styles.value}>
          {title}
        </AppText>
      </View>
    </Svg>
  );
}
const styles = StyleSheet.create({
  titleContainer: {
    justifyContent: 'center',
    paddingTop: scale(4),
    paddingRight: scale(4),
  },
  value: {
    fontFamily: FONT_FAMILY.BOLD,
    fontSize: FONT_SIZE.SubHead,
    color: TEXT_COLOR.White,
    flex: 1,
    textAlign: 'right',
  },
});
const ForwardRef = React.forwardRef(SvgComponent);
export default ForwardRef;
