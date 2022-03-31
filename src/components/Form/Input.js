import { FONT_FAMILY, FONT_SIZE } from 'constants/appFonts';
import { BACKGROUND_COLOR, TEXT_COLOR } from 'constants/colors';
import { SPACING } from 'constants/size';
import React, { memo, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Animated } from 'react-native';
import { editExperienceForm, sectionProfileType, inputType } from 'constants/data_constants';

const Input = props => {
  const { isDoubleInput, onBlur, onFocus, data, focused, onChange } = props;
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

  const renderInputByType = () => {
    // switch (data?.type) {
    //   case inputType.text:
    //     return (
    //       <View style={[styles.wrapper, isDoubleInput && styles.widthControl]}>
    //         {!!data?.label && <Text style={[styles.label]}>{data?.label}</Text>}
    //         <Animated.View
    //           style={[
    //             styles.labelWrapper,
    //             {
    //               transform: [
    //                 {
    //                   translateY
    //                 }
    //               ]
    //             }
    //             // focused === data.index && { paddingVertical: SPACING.XSmall }
    //           ]}>
    //           {!!data?.placeholder && <Text style={[styles.placeholder]}>{data?.placeholder}</Text>}
    //         </Animated.View>
    //         <TextInput
    //           style={styles.input}
    //           onBlur={() => onBlur(data.index)}
    //           onFocus={() => onFocus(data.index)}
    //           defaultValue={data?.defaultValue}
    //           onChangeText={text => onChange(data.id, text)}
    //         />
    //       </View>
    //     );
    //   case inputType.textarea:
    //     return (
    //       <View style={[styles.wrapper, isDoubleInput && styles.widthControl]}>
    //         {!!data?.label && <Text style={[styles.label]}>{data?.label}</Text>}
    //         <Animated.View
    //           style={[
    //             styles.labelWrapper,
    //             {
    //               transform: [
    //                 {
    //                   translateY
    //                 }
    //               ]
    //             }
    //             // focused === data.index && { paddingVertical: SPACING.XSmall }
    //           ]}>
    //           {!!data?.placeholder && <Text style={[styles.placeholder]}>{data?.placeholder}</Text>}
    //         </Animated.View>
    //         <TextInput
    //           style={styles.inputTextArea}
    //           onBlur={() => onBlur(data.index)}
    //           onFocus={() => onFocus(data.index)}
    //           defaultValue={data?.defaultValue}
    //           multiline={true}
    //         />
    //       </View>
    //     );
    //   case inputType.date:
    //     return (
    //       <View style={[styles.wrapper, isDoubleInput && styles.widthControl]}>
    //         {!!data?.label && <Text style={[styles.label]}>{data?.label}</Text>}
    //         <Animated.View
    //           style={[
    //             styles.labelWrapper,
    //             {
    //               transform: [
    //                 {
    //                   translateY
    //                 }
    //               ]
    //             }
    //             // focused === data.index && { paddingVertical: SPACING.XSmall }
    //           ]}>
    //           {!!data?.placeholder && <Text style={[styles.placeholder]}>{data?.placeholder}</Text>}
    //         </Animated.View>
    //         <TextInput
    //           style={styles.input}
    //           onBlur={() => onBlur(data.index)}
    //           onFocus={() => onFocus(data.index)}
    //           defaultValue={data?.defaultValue}
    //         />
    //       </View>
    //     );
    //   default:
    //     return null;
    // }
    return (
      <View style={[styles.wrapper, isDoubleInput && styles.widthControl]}>
        {!!data?.label && <Text style={[styles.label]}>{data?.label}</Text>}
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
          {!!data?.placeholder && <Text style={[styles.placeholder]}>{data?.placeholder}</Text>}
        </Animated.View>
        <TextInput
          style={styles.input}
          onBlur={() => onBlur(data.index)}
          onFocus={() => onFocus(data.index)}
          defaultValue={data?.defaultValue}
          onChangeText={text => onChange(data.id, text)}
          value={data?.value}
        />
      </View>
    );
  };

  return (
    <View style={[styles.container, isDoubleInput && styles.containerRow]}>
      {renderInputByType()}
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
  inputTextArea: {
    paddingHorizontal: SPACING.XXNormal,
    borderWidth: 1,
    borderColor: 'gray',
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.BodyText,
    borderRadius: 5,
    zIndex: 0,
    minHeight: 100,
    maxHeight: 150
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
  placeholder: {
    color: 'gray'
  },
  label: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.BodyText,
    color: TEXT_COLOR.Black,
    marginBottom: SPACING.Normal
  }
});

export default memo(Input);
