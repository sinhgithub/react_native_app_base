import React from 'react';
import { TouchableOpacity } from 'react-native';
import { logger } from 'helpers/logger';
import { throttle } from 'lodash';

const configThrottle = { trailing: false };
const onPressDefault = () => null;

const StyledTouchable = props => {
  const {
    customStyle,
    disabled,
    children,
    style,
    throttleTime = 1000,
    onPress = onPressDefault
  } = props;

  if (style) {
    logger('You should use customStyle to implement this component to avoid conflict', true);
  }

  const handlePress = throttle(onPress, throttleTime, configThrottle);

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      disabled={disabled}
      style={customStyle}
      {...props}
      onPress={handlePress}>
      {children}
    </TouchableOpacity>
  );
};

export default StyledTouchable;
