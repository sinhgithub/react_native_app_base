import { ic_logo } from 'assets/images';
import AppText from 'components/AppText';
import StyledTouchable from 'components/StyledTouchable';
import { FONT_FAMILY, FONT_SIZE } from 'constants/appFonts';
import { BACKGROUND_COLOR, CUSTOM_COLOR } from 'constants/colors';
import { Formik } from 'formik';
import { translate } from 'src/i18n';
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
import CustomInput from '../components/CustomInput';
// import RegisterTypeModal from '../components/RegisterTypeModal';
import { useNavigation, StackActions } from '@react-navigation/native';
import SCREENS_NAME from 'constants/screens';
import { loginHandle } from 'actions/auth';
import { ModalNotification } from 'components/Modal/NotificationWarning';

const { width: WIDTH } = Dimensions.get('window');
// const phoneRegExp = /((0|1)+([0-9]{8,10})\b)/g;

const LoginSchema = Yup.object().shape({
  password: Yup.string().required('auth.passwordRequired').min(6, 'auth.passwordErrorMin'),
  account: Yup.string().required('auth.userNameRequired').max(255, 'auth.accountErrorMax')
});

const registerTypeData = [
  { id: '1', title: 'auth.vip', type: 'vip' },
  { id: '2', title: 'auth.distributor', type: 'distributor' },
  { id: '3', title: 'auth.saleEmployer', type: 'sale' }
];
const Register = () => {
  const [isShowPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const onRegisterSuccess = () => {
    navigation.dispatch(StackActions.replace(SCREENS_NAME.MAIN_SCREEN));
  };

  const onRegisterFail = () => {
    setTimeout(() => {
      ModalNotification.showError('popup.title', 'auth.loginError');
    });
  };

  const onPressRegister = () => {
    navigation.navigate(SCREENS_NAME.REGISTER_SCREEN, {});
  };

  return (
    <View style={styles.flex_1} onStartShouldSetResponder={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView enabled behavior="padding" style={styles.container}>
        <Image source={ic_logo} style={styles.logo} />
        <Formik
          initialValues={{
            account: '',
            password: ''
          }}
          validateOnMount={true}
          validationSchema={LoginSchema}
          onSubmit={(values, actions) => {
            const params = {
              account: values.account.trim(),
              password: values.password.trim()
            };
            dispatch(loginHandle(params, onRegisterSuccess, onRegisterFail));
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
            const disabled = !isValid || isSubmitting;
            return (
              <View style={styles.formlogin}>
                <AppText translate style={styles.loginText}>
                  Đăng ký
                </AppText>
                <CustomInput
                  label="auth.account"
                  value={values.account}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  maxLength={50}
                  error={errors.account}
                  isTouched={touched.account}
                  name={'account'}
                  placeholder={translate('auth.userNamePlaceholder')}
                  keyboardType="number-pad"
                />
                <CustomInput
                  label="auth.password"
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
                  label="Nhập lại mật khẩu"
                  value={values.passwordConfirm}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  maxLength={20}
                  error={errors.passwordConfirm}
                  isTouched={touched.passwordConfirm}
                  name={'passwordConfirm'}
                  isPassword
                  toggleShowPassword={setShowPassword}
                  isShowPassword={isShowPassword}
                  placeholder={'Nhập lại mật khẩu'}
                />

                <StyledTouchable
                  onPress={handleSubmit}
                  disabled={disabled}
                  customStyle={[
                    styles.loginBtn,
                    disabled && { backgroundColor: BACKGROUND_COLOR.BasicGray }
                  ]}>
                  <AppText style={[styles.loginTxt]} translate>
                    Đăng ký
                  </AppText>
                </StyledTouchable>

                <StyledTouchable onPress={onPressRegister} customStyle={[styles.forgotBtn]}>
                  <Text style={[styles.forgotTxt]} translate>
                    Bạn đã có tài khoản ?{' '}
                    <Text translate style={[styles.registerTxt]}>
                      Đăng nhập
                    </Text>
                  </Text>
                </StyledTouchable>
              </View>
            );
          }}
        </Formik>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: BACKGROUND_COLOR.White
  },
  formlogin: {
    marginHorizontal: scale(24)
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
  loginDescTxt: {
    alignSelf: 'center',
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.SubHead,
    color: CUSTOM_COLOR.Gray
  },
  loginBtn: {
    paddingVertical: scale(16),
    backgroundColor: CUSTOM_COLOR.RedBasic,
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
    fontSize: FONT_SIZE.SubHead
  },
  registerTxt: {
    color: CUSTOM_COLOR.RedBasic,
    fontFamily: FONT_FAMILY.MEDIUM,
    fontSize: FONT_SIZE.SubHead
  }
});

export default Register;
