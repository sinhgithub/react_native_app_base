import AppText from 'components/AppText';
import StyledTouchable from 'components/StyledTouchable';
import { CUSTOM_COLOR } from 'constants/colors';
import { SPACING } from 'constants/size';
import React, { useRef } from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { scale } from 'utils/responsive';

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
    label
  } = props;
  let inputRef = useRef(null);
  return (
    <View style={styles.inputGroup}>
      {!!label && (
        <AppText style={styles.label} translate>
          {label}
        </AppText>
      )}
      {isPassword ? (
        <View ref={ref => (inputRef = ref)} style={[styles.row, styles.textInput]}>
          <TextInput
            blurOnSubmit={false}
            autoCapitalize="none"
            textContentType="password"
            style={[styles.flex_1, { paddingVertical: 0 }]}
            maxLength={maxLength}
            onChangeText={handleChange(name)}
            onBlur={e => {
              inputRef?.setNativeProps({
                style: styles.textInput
              });
              handleBlur(name)(e);
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
      ) : (
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
      )}

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
    marginBottom: SPACING.Fit
  },
  textInput: {
    borderRadius: scale(5),
    paddingVertical: scale(12),
    paddingHorizontal: scale(12),
    alignItems: 'center',
    borderWidth: 1,
    borderColor: CUSTOM_COLOR.BasicGray
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
  }
});

export default CustomInput;
