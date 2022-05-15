import { FONT_FAMILY, FONT_SIZE } from 'constants/appFonts';
import { BACKGROUND_COLOR, CUSTOM_COLOR, TEXT_COLOR } from 'constants/colors';
import { SPACING } from 'constants/size';
import React, { memo, useCallback, useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Animated, TouchableOpacity } from 'react-native';
import { inputType } from 'constants/data_constants';
import SelectDropdown from './SelectDropdown';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel
} from 'react-native-simple-radio-button';
import { Icon } from 'components/';
import ModalSelectDate from 'components/Modal/ModalSelectDate';
import moment from 'moment';
import { useSelector } from 'react-redux';

const Input = props => {
  const {
    isDoubleInput,
    onBlur,
    onFocus,
    data,
    focused,
    onChange,
    defaultTextSelect,
    dataInputSelect,
    onSelect
  } = props;
  const animation = React.useRef(new Animated.Value(0)).current;
  const [showSelectDateModal, setShowSelectDateModal] = useState(false);

  const onClickSelectDate = useCallback(index => {
    setShowSelectDateModal(true);
  }, []);

  const [selectedDate, setSelectedDate] = useState(null);

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
    switch (data?.type) {
      case inputType.text:
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
              onChangeText={text => onChange?.(data.id, text)}
              value={data?.value}
              keyboardType={data?.keyboardType || 'default'}
            />
          </View>
        );
      case inputType.textarea:
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
              ]}>
              {!!data?.placeholder && <Text style={[styles.placeholder]}>{data?.placeholder}</Text>}
            </Animated.View>
            <TextInput
              style={styles.inputTextArea}
              onBlur={() => onBlur(data.index)}
              onFocus={() => onFocus(data.index)}
              defaultValue={data?.defaultValue}
              onChangeText={text => onChange?.(data.id, text)}
              value={data?.value}
            />
          </View>
        );
      case inputType.date:
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
              ]}>
              {!!data?.placeholder && <Text style={[styles.placeholder]}>{data?.placeholder}</Text>}
            </Animated.View>
            <TouchableOpacity
              style={styles.input}
              activeOpacity={0.8}
              onPress={() => onClickSelectDate(data.index)}>
              <View style={styles.inputDateIconWrapper}>
                <Text style={!styles.inputDateIconText}>
                  {data?.value ? moment(data?.value).format('DD-MM-YYYY') : ''}
                </Text>
                <Icon fontName="AntDesign" name="caretdown" size={15} color="gray" />
              </View>
            </TouchableOpacity>
            <ModalSelectDate
              id={data?.id}
              isDisplay={showSelectDateModal}
              initialModalSelectDate={
                data?.value
                  ? moment(data?.value).format('YYYY-MM-DD')
                  : moment().format('YYYY-MM-DD')
              }
              onChange={date => {
                setSelectedDate({ id: data.id, value: date });
              }}
              onSubmitChange={() => {
                onChange?.(selectedDate?.id, selectedDate?.value);
                if (showSelectDateModal) {
                  setShowSelectDateModal?.(false);
                }
              }}
              onCancelChange={() => {
                if (showSelectDateModal) {
                  setShowSelectDateModal?.(false);
                }
              }}
            />
          </View>
        );
      case inputType.select:
        return (
          <View style={[styles.wrapper, isDoubleInput && styles.widthControl]}>
            {!!data?.label && <Text style={[styles.label]}>{data?.label}</Text>}
            <View>
              <SelectDropdown
                onChange={onSelect || onChange}
                data={dataInputSelect || []}
                defaultButtonText={defaultTextSelect}
              />
            </View>
          </View>
        );
      case inputType.number:
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
              ]}>
              {!!data?.placeholder && <Text style={[styles.placeholder]}>{data?.placeholder}</Text>}
            </Animated.View>
            <TextInput
              style={styles.input}
              onBlur={() => onBlur(data.index)}
              onFocus={() => onFocus(data.index)}
              defaultValue={data?.defaultValue}
              onChangeText={text => onChange?.(data.id, text)}
              keyboardType="numeric"
              value={data?.value}
            />
          </View>
        );
      case inputType.genderRadios:
        const radio_props = [
          { label: 'Nam', value: 1 },
          { label: 'Nữ', value: 0 }
        ];
        return (
          <View style={[styles.wrapper, isDoubleInput && styles.widthControl]}>
            {!!data?.label && <Text style={[styles.label]}>{data?.label}</Text>}
            <RadioForm formHorizontal={true} animation={true}>
              {radio_props.map((item, index) => {
                return (
                  <RadioButton labelHorizontal={true} key={index}>
                    <RadioButtonInput
                      obj={item}
                      index={index}
                      isSelected={data.value === item.value}
                      onPress={v => {
                        onChange?.(data.id, v);
                      }}
                      borderWidth={1}
                      buttonInnerColor={'red'}
                      buttonOuterColor={CUSTOM_COLOR.BasicGray}
                      buttonSize={10}
                      buttonStyle={{}}
                      buttonWrapStyle={{ marginLeft: 10 }}
                    />
                    <RadioButtonLabel
                      obj={item}
                      index={index}
                      labelHorizontal={true}
                      onPress={() => {}}
                      labelStyle={{
                        fontSize: FONT_SIZE.BodyText,
                        color: TEXT_COLOR.Black,
                        fontFamily: FONT_FAMILY.REGULAR
                      }}
                      labelWrapStyle={{}}
                    />
                  </RadioButton>
                );
              })}
            </RadioForm>
          </View>
        );
      default:
        return null;
    }
  };

  return <View style={styles.container}>{renderInputByType()}</View>;
};

const styles = StyleSheet.create({
  container: {},
  flex1: {
    flex: 1
  },
  containerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  input: {
    paddingHorizontal: SPACING.XXNormal,
    height: 48,
    borderWidth: 1,
    borderColor: 'gray',
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.BodyText,
    borderRadius: 5,
    zIndex: 0,
    justifyContent: 'center'
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
  },
  inputDateIconWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  inputDateIconText: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.BodyText
  }
});

export default memo(Input);
