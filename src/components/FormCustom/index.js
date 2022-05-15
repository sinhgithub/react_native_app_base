import React, { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  Image
} from 'react-native';
import { ic_logo } from 'assets/images';
import CustomInput from './conponents/CustomInput';
import { defaultData, schema as defaultSchema } from './defaultData';
import { cloneDeep } from 'lodash';
import { Formik } from 'formik';
import styles from './styles';
import { ScrollView } from 'react-native-gesture-handler';
import useKeyboard from 'src/hooks/useKeyboard';
import { scale } from 'utils/responsive';
import { BACKGROUND_COLOR, CUSTOM_COLOR, TEXT_COLOR } from 'constants/colors';
import { FONT_FAMILY, FONT_SIZE } from 'constants/appFonts';
import { SPACING } from 'constants/size';
import { AppText, Icon } from '..';
import StyledTouchable from 'components/StyledTouchable';
import { screenHeight } from 'constants/size';
import { inputType } from 'constants/data_constants';
import InputView from './conponents/InputView';
import { checkFlagFocus } from './helpers/checkFlagFocus';

const FormCustom = props => {
  const {
    data,
    HeaderComponent,
    FooterComponent,
    focusedInput,
    onClickInputView,
    setInfoListInput,
    setRefScroll,
    keyboard,
    refScroll,
    schema,
    disablePadding,
    handleChangeCustom
  } = props;
  const dataProcessed = useMemo(() => {
    if (data) {
      const newData = cloneDeep(data);
      return newData;
    }
    return defaultData;
  }, [data]);

  const handleFocus = useCallback(ref => {
    if (ref) {
      ref.focus();
    }
  }, []);

  useEffect(() => {
    if (focusedInput.length > 0) {
      const latestInputFocused = focusedInput[focusedInput.length - 1];
      refScroll?.scrollTo({
        y: Platform.OS === 'ios' ? latestInputFocused.layout.y : latestInputFocused.layout.y,
        animated: true
      });
    }
  }, [focusedInput]);

  const renderInput = (input, index, params) => {
    const {
      errors,
      touched,
      handleChange,
      handleBlur,
      values,
      setFieldValue,
      setFieldError,
      setSubmitting
    } = params;
    const flag = checkFlagFocus(focusedInput, input.id);
    if (input.type === inputType.text || input.type === inputType.textarea) {
      if (flag) {
        return (
          <CustomInput
            setFieldValue={setFieldValue}
            setFieldError={setFieldError}
            setSubmitting={setSubmitting}
            index={index}
            handleChange={handleChange}
            handleBlur={handleBlur}
            id={input.id}
            handleFocus={handleFocus}
            style={styles.input}
            label={input.label}
            value={values[input.id]}
            maxLength={input.maxLength}
            error={errors[input.id]}
            isTouched={touched[input.id]}
            name={input.id}
            placeholder={input.placeholder}
            keyboardType={input.keyboardType}
            type={input.type}
            focusedInput={focusedInput}
            onClickInputView={onClickInputView}
            data={input.inputsData}
            require={input.require}
            handleChangeCustom={handleChangeCustom}
          />
        );
      } else {
        return (
          <InputView
            inputContainerStyle={input.type === inputType.textarea ? { height: 90 } : {}}
            placeholder={input.placeholder}
            label={input.label}
            id={input.id}
            require={input.require}
            onPress={onClickInputView}
          />
        );
      }
    } else {
      return (
        <CustomInput
          index={index}
          setFieldValue={setFieldValue}
          setFieldError={setFieldError}
          setSubmitting={setSubmitting}
          handleChange={handleChange}
          handleBlur={handleBlur}
          id={input.id}
          handleFocus={handleFocus}
          style={styles.input}
          label={input.label}
          value={values[input.id]}
          maxLength={input.maxLength}
          error={errors[input.id]}
          isTouched={touched[input.id]}
          name={input.id}
          placeholder={input.placeholder}
          keyboardType={input.keyboardType}
          type={input.type}
          focusedInput={focusedInput}
          onClickInputView={onClickInputView}
          data={input.inputsData}
          require={input.require}
          handleChangeCustom={handleChangeCustom}
        />
      );
    }
  };

  const renderListInput = params => {
    const list = dataProcessed?.map((item, index) => {
      return (
        <View
          key={item?.id || index}
          collapsable={false}
          onLayout={e => {
            const layout = e?.nativeEvent?.layout;
            setInfoListInput(prev => {
              const result = [];
              result.push({ id: item.id, layout, index });
              return [...prev, ...result];
            });
          }}>
          {renderInput(item, index, params)}
        </View>
      );
    });
    return list;
  };

  const initialValues = useMemo(() => {
    const result = {};
    dataProcessed.forEach(item => {
      result[item.id] = '';
    });
    return result;
  }, [dataProcessed]);

  return (
    <View style={[styles.container]} onStartShouldSetResponder={() => Keyboard.dismiss()}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        ref={ref => setRefScroll?.(ref)}
        keyboardShouldPersistTaps="always"
        enabled>
        <View
          style={[
            styles.flex1,
            keyboard?.isDisplay &&
              !disablePadding && { paddingBottom: keyboard?.keyboardInfo.height }
          ]}>
          <Formik
            initialValues={initialValues}
            validateOnMount={true}
            validationSchema={schema || defaultSchema}>
            {({
              errors,
              touched,
              isValid,
              isSubmitting,
              handleSubmit,
              handleChange,
              handleBlur,
              values,
              setFieldValue,
              setFieldError,
              setSubmitting
            }) => {
              return (
                <View style={styles.flex1}>
                  {HeaderComponent && <HeaderComponent />}
                  {renderListInput({
                    errors,
                    touched,
                    isValid,
                    isSubmitting,
                    handleSubmit,
                    handleChange,
                    handleBlur,
                    values,
                    setFieldValue,
                    setFieldError,
                    setSubmitting
                  })}
                  {FooterComponent && (
                    <FooterComponent
                      disabled={!isValid || isSubmitting}
                      onSubMit={handleSubmit}
                      errors={errors}
                      values={values}
                      isSubmitting={isSubmitting}
                      touched={touched}
                      isValid={isValid}
                    />
                  )}
                </View>
              );
            }}
          </Formik>
        </View>
      </ScrollView>
    </View>
  );
};

export default memo(FormCustom);
