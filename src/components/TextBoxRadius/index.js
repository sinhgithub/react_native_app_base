import React, { memo } from 'react';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles';
import { BACKGROUND_COLOR, TEXT_COLOR } from 'constants/colors';
import { FONT_FAMILY } from 'constants/appFonts';

const TextBoxRadius = props => {
  const { containerStyle, textStyle, onPress, index, activeItem, data } = props;

  return (
    <TouchableOpacity
      style={[
        styles.container,
        activeItem === index && { backgroundColor: BACKGROUND_COLOR.Orange },
        containerStyle
      ]}
      onPress={() => onPress?.(data, index)}>
      <Text
        style={[
          styles.text,
          activeItem === index && { color: TEXT_COLOR.White, fontFamily: FONT_FAMILY.BOLD },
          textStyle
        ]}>
        {data?.name || ''}
      </Text>
    </TouchableOpacity>
  );
};

export default memo(TextBoxRadius);
