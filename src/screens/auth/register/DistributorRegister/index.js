import { bosanaLogo } from 'assets/images';
import AppText from 'components/AppText';
import StyledTouchable from 'components/StyledTouchable';
import { FONT_FAMILY, FONT_SIZE } from 'constants/appFonts';
import { CUSTOM_COLOR } from 'constants/colors';
import { Formik } from 'formik';
import { translate } from 'language';
import React, { useState } from 'react';
import {
  Dimensions,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { useDispatch } from 'react-redux';
import { scale } from 'utils/responsive';
import * as Yup from 'yup';
import CustomInput from '../../components/CustomInput';
import { distributorRegisterHandle } from 'actions/auth';
import { ModalNotification } from 'components/Modal';
import { useNavigation, StackActions } from '@react-navigation/native';
import SCREENS_NAME from 'constants/screens';

const { width: WIDTH } = Dimensions.get('window');

const registerSchema = Yup.object().shape({
  password: Yup.string().required('auth.passwordRequired').min(6, 'auth.passwordError'),
  email: Yup.string().required('auth.userNameRequired'),
  phoneNumber: Yup.string().required('auth.phoneNumberRequired'),
  confirmPassword: Yup.string()
    .required('auth.passwordRequired')
    .oneOf([Yup.ref('password'), null], 'auth.confirmPasswordError')
});

const RegisterScreen = props => {
  const [isShowPassword, setShowPassword] = useState(false);
  const [isShowConfirmPassword, setShowConfirmPassword] = useState(false);

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const onRegisterSuccess = () => {
    setTimeout(() => {
      ModalNotification.showSuccess('popup.title', 'auth.registerSuccess', [
        {
          text: 'popup.close',
          onPress: () => {
            navigation.dispatch(StackActions.replace(SCREENS_NAME.LOGIN_SCREEN));
          }
        }
      ]);
    });
  };

  const onRegisterFail = message => {
    setTimeout(() => {
      ModalNotification.showError('popup.title', message || 'auth.registerFailure');
    });
  };

  return (
    <View style={styles.flex_1} onStartShouldSetResponder={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView enabled behavior="padding" style={styles.container}>
        <Image source={bosanaLogo} style={styles.logo} />
        <Formik
          initialValues={{
            phoneNumber: '',
            email: '',
            password: '',
            confirmPassword: ''
          }}
          validateOnMount={true}
          validationSchema={registerSchema}
          onSubmit={(values, actions) => {
            const params = {
              email: values.email.trim(),
              phone: values.phoneNumber.trim(),
              password: values.password.trim(),
              re_password: values.password.trim()
            };
            dispatch(distributorRegisterHandle(params, onRegisterSuccess, onRegisterFail));
            actions.setSubmitting(false);
          }}>
          {({
            errors,
            touched,
            isValid,
            isSubmitting,
            handleSubmit,
            handleChange,
            handleBlur,
            values
          }) => {
            return (
              <View style={styles.formlogin}>
                <AppText translate style={styles.loginText}>
                  auth.createAccount
                </AppText>
                <AppText translate style={styles.registerTypeTxt}>
                  auth.distributor
                </AppText>
                <CustomInput
                  value={values.email}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  maxLength={50}
                  error={errors.email}
                  isTouched={touched.email}
                  name={'email'}
                  placeholder={translate('auth.emailPlaceholder')}
                />
                <CustomInput
                  value={values.phoneNumber}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  maxLength={20}
                  error={errors.phoneNumber}
                  isTouched={touched.phoneNumber}
                  name={'phoneNumber'}
                  placeholder={translate('auth.phoneNumberPlaceholder')}
                  keyboardType="number-pad"
                />
                <CustomInput
                  value={values.password}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  maxLength={20}
                  error={errors.password}
                  isTouched={touched.password}
                  name={'password'}
                  isPassword
                  toggleShowPassword={setShowPassword}
                  isShowPassword={isShowPassword}
                  placeholder={translate('auth.passwordPlaceholder')}
                />

                <CustomInput
                  title={'auth.confirmPassword'}
                  isRequired
                  value={values.confirmPassword}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  maxLength={20}
                  error={errors.confirmPassword}
                  isTouched={touched.confirmPassword}
                  name={'confirmPassword'}
                  isPassword
                  toggleShowPassword={setShowConfirmPassword}
                  isShowPassword={isShowConfirmPassword}
                  placeholder={translate('auth.confirmPasswordPlaceholder')}
                />

                <StyledTouchable
                  onPress={handleSubmit}
                  disabled={!isValid || isSubmitting}
                  customStyle={[styles.loginBtn]}>
                  <AppText style={[styles.loginTxt]} translate>
                    auth.register
                  </AppText>
                </StyledTouchable>
              </View>
            );
          }}
        </Formik>
        <StyledTouchable
          onPress={() => navigation.navigate(SCREENS_NAME.LOGIN_SCREEN)}
          customStyle={[styles.forgotBtn]}>
          <Text style={[styles.forgotTxt]} translate>
            {`${translate('auth.haveAccount')} `}
            <Text translate style={[styles.registerTxt]}>
              {translate('auth.login')}
            </Text>
          </Text>
        </StyledTouchable>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  formlogin: {
    marginHorizontal: scale(24),
    paddingVertical: scale(24),
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: scale(16),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10
  },
  loginText: {
    marginBottom: scale(10),
    color: CUSTOM_COLOR.Black,
    fontFamily: FONT_FAMILY.BOLD,
    fontSize: FONT_SIZE.Title3,
    alignSelf: 'center'
  },
  logo: {
    width: 240,
    height: 100,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 40,
    marginTop: -100
  },
  titleText: {
    fontSize: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(241, 1, 51)',
    width: 200,
    height: 44,
    padding: 5,
    borderWidth: 1,
    borderColor: 'rgb(241, 1, 51)',
    borderRadius: 25,
    marginBottom: 10,
    marginTop: 20
  },
  buttonText: {
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#FFF'
  },
  input: {
    width: WIDTH - 100,
    fontSize: 15,
    height: 44,
    padding: 10,

    backgroundColor: '#F1F1F1',
    marginVertical: 10,
    borderRadius: 10
  },
  flex_1: {
    flex: 1
  },
  errText: {
    marginTop: 8,
    fontSize: 14,
    color: CUSTOM_COLOR.Red
  },
  registerTypeTxt: {
    alignSelf: 'center',
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.SubHead,
    color: CUSTOM_COLOR.Pomegranateapprox
  },
  loginBtn: {
    marginHorizontal: scale(24),
    paddingVertical: scale(16),
    backgroundColor: CUSTOM_COLOR.Pomegranateapprox,
    borderRadius: scale(12),
    marginTop: scale(24)
  },
  loginTxt: {
    color: CUSTOM_COLOR.White,
    fontFamily: FONT_FAMILY.BOLD,
    alignSelf: 'center',
    fontSize: scale(18)
  },
  forgotBtn: {
    paddingTop: scale(16)
  },
  forgotTxt: {
    color: CUSTOM_COLOR.Black,
    fontFamily: FONT_FAMILY.REGULAR,
    alignSelf: 'center',
    fontSize: FONT_SIZE.SubHead,
    paddingTop: scale(12)
  },
  registerTxt: {
    color: CUSTOM_COLOR.Pomegranateapprox,
    fontFamily: FONT_FAMILY.MEDIUM,
    fontSize: FONT_SIZE.SubHead
  },
  gobackTxt: {
    color: CUSTOM_COLOR.Black,
    fontFamily: FONT_FAMILY.REGULAR,
    alignSelf: 'center',
    fontSize: FONT_SIZE.BodyText
  }
});

export default RegisterScreen;
