import { Platform } from 'react-native';
import { scale } from 'utils/responsive';

// prefix font Family
const DEFAULT_PREFIX_FONT_FAMILY = Platform.OS === 'ios' ? 'SVN-Gilroy' : 'SVN-Gilroy ';

// fontFamily
export const FONT_FAMILY = {
  BLACK_ITALIC: `${DEFAULT_PREFIX_FONT_FAMILY}BlackItalic`,
  LIGHT_ITALIC: `${DEFAULT_PREFIX_FONT_FAMILY}LightItalic`,
  BLACK: `${DEFAULT_PREFIX_FONT_FAMILY}Black`,
  BOLD: `${DEFAULT_PREFIX_FONT_FAMILY}Bold`,
  BOLD_ITALIC: `${DEFAULT_PREFIX_FONT_FAMILY}BoldItalic`,
  XBOLD: `${DEFAULT_PREFIX_FONT_FAMILY}XBold`,
  XBOLD_ITALIC: `${DEFAULT_PREFIX_FONT_FAMILY}XBoldItalic`,
  HEAVY_ITALIC: `${DEFAULT_PREFIX_FONT_FAMILY}HeavyItalic`,
  HEAVY: `${DEFAULT_PREFIX_FONT_FAMILY}Heavy`,
  LIGHT: `${DEFAULT_PREFIX_FONT_FAMILY}Light`,
  MEDIUM: `${DEFAULT_PREFIX_FONT_FAMILY}Medium`,
  MEDIUM_ITALIC: `${DEFAULT_PREFIX_FONT_FAMILY}MediumItalic`,
  REGULAR:
    Platform.OS === 'ios'
      ? `${DEFAULT_PREFIX_FONT_FAMILY}`
      : `${DEFAULT_PREFIX_FONT_FAMILY}Regular`,
  ITALIC: `${DEFAULT_PREFIX_FONT_FAMILY}Italic`,
  SEMIBOLD: `${DEFAULT_PREFIX_FONT_FAMILY}SemiBold`,
  SEMIBOLD_ITALIC: `${DEFAULT_PREFIX_FONT_FAMILY}SemiBoldItalic`,
  THIN: `${DEFAULT_PREFIX_FONT_FAMILY}Thin`,
  THIN_ITALIC: `${DEFAULT_PREFIX_FONT_FAMILY}ThinItalic`,
  XLIGHT_ITALIC: `${DEFAULT_PREFIX_FONT_FAMILY}XlightItalic`,
  XLIGHT: `${DEFAULT_PREFIX_FONT_FAMILY}Xlight`
};

// fontsize
export const FONT_SIZE = {
  BoldTitle: scale(48),
  Title1: scale(40),
  Title2: scale(32),
  Title3: scale(24),
  Heading: scale(18),
  BodyText: scale(16),
  SubHead: scale(14),
  Small: scale(12),
  Tiny: scale(10)
};

export const LINE_HEIGHT = {
  BoldTitle: scale(56),
  Title1: scale(48),
  Title2: scale(40),
  Title3: scale(32),
  Heading: scale(26),
  BodyText: scale(24),
  SubHead: scale(20),
  Small: scale(16),
  Tiny: scale(14)
};
