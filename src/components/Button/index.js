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
    titleConfirmStyle
  } = props;

  const renderButton = useCallback(() => {
    switch (type) {
      case 'basic':
        return (
          <>
            <TouchableOpacity style={[styles.button, containerStyle]} onPress={submitMethod}>
              <Text style={styles.buttonTitle}>{title}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.forgetPassword} onPress={forgetPasswordMethod}>
              <Text style={styles.forgetPasswordTitle}>{'Quên mật khẩu'}</Text>
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
              style={[styles.buttonConfirmReject, styles.buttonReject, buttonRejectStyle]}
              onPress={rejectMethod}>
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
              style={[styles.buttonConfirmReject, styles.buttonConfirm, buttonConfirmStyle]}
              onPress={submitMethod}>
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
            style={[styles.button, { borderRadius: 8 }, containerStyle]}
            onPress={submitMethod}>
            <Text style={[styles.buttonTitle, titleStyle]}>{title}</Text>
          </TouchableOpacity>
        );
      default:
        return (
          <>
            <TouchableOpacity type="submit" style={styles.button} onPress={submitMethod}>
              <Text style={styles.buttonTitle}>{title}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.forgetPassword} onPress={forgetPasswordMethod}>
              <Text style={styles.forgetPasswordTitle}>{'Quên mật khẩu'}</Text>
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
    type
  ]);

  return <View style={[styles.container, containerStyle]}>{renderButton()}</View>;
};

export default memo(Button);
