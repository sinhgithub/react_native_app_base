import { CUSTOM_COLOR } from './colors';
import { BORDER_RADIUS } from './size';

export const Shadow = {
  shadowColor: CUSTOM_COLOR.ShuttleGray,
  shadowOffset: {
    width: 0,
    height: 2
  },
  shadowOpacity: 0.2,
  shadowRadius: BORDER_RADIUS,
  elevation: 4
};

export const FullShadow = {
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 11
  },
  shadowOpacity: 0.57,
  shadowRadius: 15.19,

  elevation: 23
};

export const paddingHelloHeader = {
  paddingVertical: 14,
  paddingHorizontal: 12
};
