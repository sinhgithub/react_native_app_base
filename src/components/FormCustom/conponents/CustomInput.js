import AppText from 'components/AppText';
import StyledTouchable from 'components/StyledTouchable';
import { BACKGROUND_COLOR, CUSTOM_COLOR, TEXT_COLOR } from 'constants/colors';
import { SPACING } from 'constants/size';
import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View, Text } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { scale } from 'utils/responsive';
import { inputType, modalType } from 'constants/data_constants';
import SelectDropdown from './SelectDropdown';
import ModalSelectDate from 'components/Modal/ModalSelectDate';
import moment from 'moment';
import { Icon } from 'components/';
import { checkFlagFocus } from '../helpers/checkFlagFocus';
import InputView from './InputView';
import { ICPosition, ICSearch, ICUploadFile } from 'assets/icons';
import { Shadow } from 'constants/stylesCSS';
import { FONT_FAMILY, FONT_SIZE } from 'constants/appFonts';
import SwitchToggle from 'react-native-switch-toggle';
import ModalSelectTime from 'components/Modal/ModalSelectTime';
import { TabRouter } from '@react-navigation/core';

const CustomInput = props => {
  const {
    handleChange,
    handleBlur,
    value,
    isPassword = false,
    isShowPassword,
    toggleShowPassword,
    error,
    isTouched,
    placeholder,
    name,
    maxLength = 20,
    keyboardType = 'default',
    label,
    handleFocus,
    type,
    focusedInput,
    id,
    onClickInputView,
    data,
    setFieldValue,
    setFieldError,
    setSubmitting,
    handleChangeCustom,
    handleFocusCustom,
    onChangeSearch,
    require,
    disabled,
    handlePressLocation
  } = props;
  let inputRef = useRef(null);

  const [selectOption, setSelectOption] = useState(null);
  const [isOpenModalCalendar, setIsOpenModalCalendar] = useState(false);
  const [isOpenModalTime, setIsOpenModalTime] = useState(false);
  useEffect(() => {
    if (type === inputType.text || type === inputType.textarea) {
      handleFocus?.(inputRef);
    }
  }, []);

  const onPressSelectOption = (fieldId, item, index) => {
    setSelectOption(prev => ({ ...prev, [fieldId]: { item, index } }));
  };

  const [toggle, setToggle] = useState(false);

  const onPressToggle = idField => {
    setToggle(!toggle);
    if (!toggle) {
      setFieldValue(idField, true);
    } else {
      setFieldValue(idField, false);
    }
  };

  const renderInput = () => {
    if (type === inputType.text) {
      if (isPassword) {
        return (
          <View ref={ref => (inputRef = ref)} style={[styles.row, styles.textInput]}>
            <TextInput
              blurOnSubmit={false}
              autoCapitalize="none"
              textContentType="password"
              style={[styles.flex_1, { paddingVertical: 0 }]}
              maxLength={maxLength}
              onChangeText={text => {
                handleChange(name)(text);
              }}
              onBlur={e => {
                inputRef?.setNativeProps({
                  style: styles.textInput
                });
                handleBlur?.(name)(e);
              }}
              value={value}
              secureTextEntry={!isShowPassword}
              placeholder={placeholder}
              keyboardType={keyboardType}
              onFocus={() => {
                inputRef.setNativeProps({
                  style: [styles.textInput, styles.borderActive]
                });
              }}
            />

            <StyledTouchable
              customStyle={[styles.ph_8]}
              onPress={() => toggleShowPassword(!isShowPassword)}>
              {isShowPassword ? (
                <Feather name="eye" size={scale(18)} color={CUSTOM_COLOR.Gray} />
              ) : (
                <Feather name="eye-off" size={scale(18)} color={CUSTOM_COLOR.Gray} />
              )}
            </StyledTouchable>
          </View>
        );
      }
      return (
        <TextInput
          ref={ref => (inputRef = ref)}
          style={styles.textInput}
          onChangeText={handleChange(name)}
          onBlur={e => {
            inputRef?.setNativeProps({
              style: styles.textInput
            });
            handleBlur(name)(e);
          }}
          maxLength={maxLength}
          value={value}
          placeholder={placeholder}
          keyboardType={keyboardType}
          onFocus={() => {
            inputRef?.setNativeProps({
              style: [styles.textInput, styles.borderActive]
            });
          }}
        />
      );
    } else if (type === inputType.textarea) {
      return (
        <TextInput
          ref={ref => (inputRef = ref)}
          style={styles.inputTextArea}
          onBlur={() => {}}
          onChangeText={handleChange(name)}
          multiline={true}
          placeholder={placeholder}
          onFocus={e => {
            handleFocusCustom?.(name, e);
          }}
        />
      );
    } else if (type === inputType.select) {
      return (
        <View>
          <SelectDropdown
            onChange={setFieldValue}
            data={data}
            name={name}
            defaultButtonText={placeholder}
            handleChangeCustom={handleChangeCustom}
          />
        </View>
      );
    } else if (type === inputType.date) {
      return (
        <View>
          <InputView
            containerStyle={{ marginTop: 0 }}
            // label={label}
            id={id}
            placeholder={'Chọn ngày tháng'}
            onPress={() => {
              setIsOpenModalCalendar(true);
            }}
            openModalType={modalType.calendar}
            hideLabel
          />
          <ModalSelectDate
            id={name}
            isDisplay={isOpenModalCalendar}
            initialModalSelectDate={moment().format('YYYY-MM-DD')}
            onChange={date => {
              setFieldValue?.(name, date);
            }}
            onSubmitChange={() => {
              setIsOpenModalCalendar(false);
            }}
            onCancelChange={() => {
              setIsOpenModalCalendar(false);
            }}
          />
        </View>
      );
    } else if (type === inputType.fromTo) {
      const flag = checkFlagFocus(focusedInput, id);
      const listInput = data?.map((item, index) => {
        if (!flag) {
          return (
            <InputView
              containerStyle={{ width: '40%', marginTop: 0 }}
              label={item.label}
              id={id}
              placeholder={item.placeholder}
              onPress={onClickInputView}
            />
          );
        }
        return (
          <View style={{ width: '40%' }}>
            <Text style={{ marginBottom: SPACING.Fit, color: 'gray' }}>{item.label}</Text>
            <TextInput
              ref={ref => (inputRef = ref)}
              style={styles.textInput}
              onChangeText={handleChange(item.id)}
              onBlur={e => {
                inputRef?.setNativeProps({
                  style: styles.textInput
                });
                handleBlur(name)(e);
              }}
              maxLength={maxLength}
              value={value}
              placeholder={item.placeholder}
              keyboardType={keyboardType}
              onFocus={() => {
                inputRef?.setNativeProps({
                  style: [styles.textInput, styles.borderActive]
                });
              }}
            />
          </View>
        );
      });
      listInput?.splice(
        1,
        0,
        <View style={{ marginTop: 24 }}>
          <Icon name="arrowright" fontName="AntDesign" size={25} color="gray" />
        </View>
      );
      return (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
          {listInput}
        </View>
      );
    } else if (type === inputType.searchJob) {
      return (
        <View style={styles.inputSearchContainer}>
          <View style={styles.iconSearchWrapper}>
            <ICSearch />
          </View>
          <TextInput
            ref={ref => (inputRef = ref)}
            style={styles.textInputSearchJob}
            // editable={!disabled}
            onChangeText={text => {
              onChangeSearch?.(text);
            }}
            onBlur={e => {
              // inputRef?.setNativeProps({
              //   style: styles.textInput
              // });
              // handleBlur(name)(e);
            }}
            maxLength={maxLength}
            value={value}
            placeholder={placeholder}
            keyboardType={keyboardType}
            onFocus={e => {
              inputRef?.setNativeProps({
                style: [styles.textInput, styles.borderActive]
              });
              handleFocusCustom?.('search', e);
            }}
          />
          <TouchableOpacity style={styles.positionWrapper} onPress={() => handlePressLocation?.()}>
            <ICPosition />
          </TouchableOpacity>
        </View>
      );
    } else if (type === inputType.selectOption) {
      const listOption = data.map((item, index) => {
        let flag = false;
        if (selectOption) {
          for (const k in selectOption) {
            if (selectOption[k].index === index) {
              flag = true;
            }
          }
        }
        const styleContainer =
          item.isDefaultValue && !flag ? { backgroundColor: CUSTOM_COLOR.RedBasic } : {};
        const styleText = item.isDefaultValue && !flag ? { color: CUSTOM_COLOR.White } : {};
        return (
          <TouchableOpacity
            style={[styles.selectOption, styleContainer]}
            onPress={() => {
              setFieldValue?.(name, item);
              onPressSelectOption(id, item, index);
            }}>
            <Text style={[styles.selectOptionLabel, styleText]}>{item.label}</Text>
          </TouchableOpacity>
        );
      });
      return <View style={styles.selectOptionInput}>{listOption}</View>;
    } else if (type === inputType.toggle) {
      return (
        <SwitchToggle
          switchOn={toggle}
          onPress={() => {
            onPressToggle?.(name);
          }}
          containerStyle={styles.switchToggleContainerStyle}
          circleStyle={styles.switchToggleCircleStyle}
          circleColorOff="#FFFFFF"
          circleColorOn="#FFFFFF"
          backgroundColorOn={CUSTOM_COLOR.RedBasic}
          backgroundColorOff="#B1B3B6"
        />
      );
    } else if (type === inputType.uploadFile) {
      return (
        <View>
          <TextInput
            ref={ref => (inputRef = ref)}
            style={styles.textInput}
            onChangeText={handleChange(name)}
            onBlur={e => {
              inputRef?.setNativeProps({
                style: styles.textInput
              });
              handleBlur(name)(e);
            }}
            maxLength={maxLength}
            value={value}
            placeholder={placeholder}
            keyboardType={keyboardType}
            onFocus={() => {
              inputRef?.setNativeProps({
                style: [styles.textInput, styles.borderActive]
              });
            }}
          />
          <View style={styles.uploadFileArea}>
            <ICUploadFile />
            <Text style={styles.fileName}>file name</Text>
          </View>
        </View>
      );
    } else if (type === inputType.dateFromTo) {
      const listInput = data?.map((item, index) => {
        return (
          <>
            <InputView
              containerStyle={{ width: '40%', marginTop: 0 }}
              label={item.label}
              id={id}
              placeholder={item.placeholder}
              onPress={() => {
                setIsOpenModalCalendar(true);
              }}
              openModalType={modalType.calendar}
            />
            <ModalSelectDate
              id={name}
              isDisplay={isOpenModalCalendar}
              initialModalSelectDate={moment().format('YYYY-MM-DD')}
              onChange={date => {}}
              onSubmitChange={() => {
                setIsOpenModalCalendar(false);
              }}
              onCancelChange={() => {
                setIsOpenModalCalendar(false);
              }}
            />
          </>
        );
      });
      listInput.splice(
        1,
        0,
        <View style={{ marginTop: 24 }}>
          <Icon name="arrowright" fontName="AntDesign" size={25} color="gray" />
        </View>
      );
      return (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
          {listInput}
        </View>
      );
    } else if (type === inputType.timeFromTo) {
      const listInput = data?.map((item, index) => {
        return (
          <>
            <InputView
              containerStyle={{ width: '40%', marginTop: 0 }}
              label={item.label}
              id={id}
              placeholder={item.placeholder}
              onPress={() => {
                setIsOpenModalTime(true);
              }}
              openModalType={modalType.calendar}
            />
            <ModalSelectTime
              isDisplay={isOpenModalTime}
              onCancelChange={() => {
                setIsOpenModalTime(false);
              }}
              onSubmitChange={() => {
                setIsOpenModalTime(false);
              }}
            />
          </>
        );
      });
      listInput.splice(
        1,
        0,
        <View style={{ marginTop: 24 }}>
          <Icon name="arrowright" fontName="AntDesign" size={25} color="gray" />
        </View>
      );
      return (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
          {listInput}
        </View>
      );
    }
    return (
      <TextInput
        ref={ref => (inputRef = ref)}
        style={styles.textInput}
        onChangeText={() => {
          handleChange?.(name);
        }}
        onBlur={e => {
          inputRef?.setNativeProps({
            style: styles.textInput
          });
          handleBlur(name)(e);
        }}
        maxLength={maxLength}
        value={value}
        placeholder={placeholder}
        keyboardType={keyboardType}
        onFocus={e => {
          inputRef?.setNativeProps({
            style: [styles.textInput, styles.borderActive]
          });
          handleFocusCustom?.(name, e);
        }}
      />
    );
  };
  return (
    <View style={styles.inputGroup}>
      {!!label && (
        <View style={{ flexDirection: 'row' }}>
          <AppText style={styles.label} translate>
            {label}
          </AppText>
          {require && (
            <Icon fontName="Entypo" name="star" size={10} color={CUSTOM_COLOR.RedBasic} />
          )}
        </View>
      )}
      {renderInput()}
      {error && isTouched && (
        <AppText translate style={styles.errText}>
          {error}
        </AppText>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputGroup: {
    marginTop: scale(20)
  },
  row: {
    flexDirection: 'row'
  },
  label: {
    marginBottom: SPACING.Fit,
    marginRight: SPACING.Small
  },
  textInput: {
    borderRadius: scale(5),
    height: 48,
    paddingHorizontal: scale(12),
    alignItems: 'center',
    borderWidth: 1,
    borderColor: CUSTOM_COLOR.BasicGray
  },
  textInputSearchJob: {
    height: 48,
    paddingRight: 12,
    paddingLeft: 40,
    alignItems: 'center',
    borderRadius: scale(5),
    borderWidth: 1,
    borderColor: CUSTOM_COLOR.BasicGray,
    flex: 1
  },
  // textInputSearchJobWrapper: {
  //   borderRadius: scale(5),
  //   borderWidth: 1,
  //   borderColor: CUSTOM_COLOR.BasicGray,
  //   flex: 1
  // },
  inputTextArea: {
    borderRadius: scale(5),
    height: 90,
    paddingHorizontal: scale(12),
    alignItems: 'center',
    borderWidth: 1,
    borderColor: CUSTOM_COLOR.BasicGray
  },
  fileName: {
    marginLeft: SPACING.Normal,
    fontSize: FONT_SIZE.SubHead,
    color: TEXT_COLOR.RedBasic,
    fontFamily: FONT_FAMILY.REGULAR
  },
  uploadFileArea: {
    flexDirection: 'row',
    marginTop: 16,
    alignItems: 'center'
  },
  selectOptionInput: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  selectOption: {
    width: '30%',
    borderWidth: 1,
    borderColor: CUSTOM_COLOR.RedBasic,
    paddingVertical: SPACING.XNormal,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  selectOptionLabel: {
    color: '#B8B8B8',
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.SubHead
  },
  borderActive: {
    borderColor: CUSTOM_COLOR.RedBasic,
    borderWidth: scale(1)
  },
  ph_8: {
    paddingHorizontal: scale(8)
  },
  errText: {
    marginTop: 8,
    fontSize: 14,
    color: CUSTOM_COLOR.Red
  },
  flex_1: {
    flex: 1
  },
  inputSearchContainer: {
    flexDirection: 'row'
  },
  positionWrapper: {
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: BACKGROUND_COLOR.White,
    ...Shadow,
    borderRadius: 10,
    marginLeft: SPACING.Normal
  },
  iconSearchWrapper: {
    position: 'absolute',
    top: 17,
    left: 15
  },
  switchToggleContainerStyle: {
    width: scale(40),
    height: scale(24),
    borderRadius: scale(25),
    padding: scale(5)
  },
  switchToggleCircleStyle: {
    width: scale(18),
    height: scale(18),
    borderRadius: 20
  }
});

export default CustomInput;
