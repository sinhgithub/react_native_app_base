import { FONT_FAMILY, FONT_SIZE } from 'constants/appFonts';
import { BACKGROUND_COLOR, TEXT_COLOR } from 'constants/colors';
import { SPACING } from 'constants/size';
import React, { memo, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Animated } from 'react-native';

const Input = props => {
  const { isDoubleInput, onBlur, onFocus, data, focused } = props;

  const animation = React.useRef(new Animated.Value(0)).current;

  const translateY = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -25]
  });

  useEffect(() => {
    if (focused === data.index) {
      Animated.timing(animation, {
        duration: 200,
        toValue: 1,
        useNativeDriver: true
      }).start();
    }
  }, [animation, data.index, focused]);

  const renderCustomInput = () => {
    return (
      <View style={[styles.wrapper, isDoubleInput && styles.widthControl]}>
        <Animated.View
          style={[
            styles.labelWrapper,
            {
              transform: [
                {
                  translateY
                }
              ]
            }
            // focused === data.index && { paddingVertical: SPACING.XSmall }
          ]}>
          <Text style={[styles.label]}>Số điện thoại</Text>
        </Animated.View>
        <TextInput
          style={styles.input}
          onBlur={() => onBlur(data.index)}
          onFocus={() => onFocus(data.index)}
        />
      </View>
    );
  };

  return (
    <View style={[styles.container, isDoubleInput && styles.containerRow]}>
      {renderCustomInput()}
      {isDoubleInput && renderCustomInput()}
    </View>
  );
};

const styles = StyleSheet.create({
  containerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  input: {
    paddingHorizontal: SPACING.XXNormal,
    paddingVertical: SPACING.XNormal,
    borderWidth: 1,
    borderColor: 'gray',
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.BodyText,
    borderRadius: 5,
    zIndex: 0
  },
  widthControl: {
    width: '46%'
  },
  labelWrapper: {
    position: 'absolute',
    top: 16,
    marginHorizontal: SPACING.XXNormal,
    zIndex: 1,
    backgroundColor: BACKGROUND_COLOR.White,
    paddingHorizontal: SPACING.XSmall
  },
  label: {
    color: 'gray'
  }
});

export default memo(Input);
