import { BACKGROUND_COLOR, CUSTOM_COLOR } from 'constants/colors';
import React, { memo, useCallback } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import styles from './styles';

const Button = props => {
  const {
    type,
    title,
    submitMethod,
    forgetPasswordMethod = () => {},
    containerStyle,
    titleStyle,
    buttonStyle,
    rejectMethod,
    titleReject,
    titleConfirm,
    buttonRejectStyle,
    buttonConfirmStyle,
    titleRejectStyle,
    titleConfirmStyle,
    disable,
    disableConfirm,
    disableReject
  } = props;

  const renderButton = useCallback(() => {
    switch (type) {
      case 'basic':
        return (
          <>
            <TouchableOpacity style={[styles.button, containerStyle]} onPress={submitMethod}>
              <Text style={styles.buttonTitle} numberOfLines={1}>
                {title}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.forgetPassword} onPress={forgetPasswordMethod}>
              <Text style={styles.forgetPasswordTitle} numberOfLines={1}>
                {'Quên mật khẩu'}
              </Text>
            </TouchableOpacity>
          </>
        );
      case 'card':
        return (
          <TouchableOpacity style={[styles.buttonCard, buttonStyle]} onPress={submitMethod}>
            <Text numberOfLines={1} style={[styles.buttonCardTitle, titleStyle]}>
              {title}
            </Text>
          </TouchableOpacity>
        );
      case 'confirm_reject':
        return (
          <View style={styles.rowSpaceBetween}>
            <TouchableOpacity
              activeOpacity={disableReject ? 1 : 0.6}
              style={[
                styles.buttonConfirmReject,
                styles.buttonReject,
                buttonRejectStyle,
                disableReject && { backgroundColor: CUSTOM_COLOR.BasicGray }
              ]}
              onPress={() => {
                if (!disableReject) {
                  rejectMethod?.();
                }
              }}>
              <Text
                numberOfLines={1}
                style={[
                  styles.buttonConfirmRejectTitle,
                  styles.buttonRejectTitle,
                  titleRejectStyle
                ]}>
                {titleReject}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={disableConfirm ? 1 : 0.6}
              style={[
                styles.buttonConfirmReject,
                styles.buttonConfirm,
                buttonConfirmStyle,
                disableConfirm && { backgroundColor: CUSTOM_COLOR.BasicGray }
              ]}
              onPress={() => {
                if (!disableConfirm) {
                  submitMethod?.();
                }
              }}>
              <Text
                numberOfLines={1}
                style={[
                  styles.buttonConfirmRejectTitle,
                  styles.buttonConfirmTitle,
                  titleConfirmStyle
                ]}>
                {titleConfirm}
              </Text>
            </TouchableOpacity>
          </View>
        );
      case 'modal':
        return (
          <TouchableOpacity
            style={[
              styles.button,
              { borderRadius: 8 },
              disable && { backgroundColor: BACKGROUND_COLOR.BasicGray },
              containerStyle
            ]}
            onPress={() => {
              if (!disable) {
                submitMethod?.();
              }
            }}
            activeOpacity={disable ? 1 : 0.6}>
            <Text style={[styles.buttonTitle, titleStyle]} numberOfLines={1}>
              {title}
            </Text>
          </TouchableOpacity>
        );
      default:
        return (
          <>
            <TouchableOpacity
              type="submit"
              style={styles.button}
              onPress={submitMethod}
              activeOpacity={disable ? 1 : 0.6}>
              <Text style={styles.buttonTitle}>{title}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.forgetPassword} onPress={forgetPasswordMethod}>
              <Text style={styles.forgetPasswordTitle} numberOfLines={1}>
                {'Quên mật khẩu'}
              </Text>
            </TouchableOpacity>
          </>
        );
    }
  }, [
    buttonConfirmStyle,
    buttonRejectStyle,
    buttonStyle,
    containerStyle,
    forgetPasswordMethod,
    rejectMethod,
    submitMethod,
    title,
    titleConfirm,
    titleConfirmStyle,
    titleReject,
    titleRejectStyle,
    titleStyle,
    type,
    disableConfirm,
    disableReject,
    disable
  ]);

  return <View style={[styles.container, containerStyle]}>{renderButton()}</View>;
};

export default memo(Button);
