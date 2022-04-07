import { ic_logo } from 'assets/images';
import AppText from 'components/AppText';
import StyledTouchable from 'components/StyledTouchable';
import { FONT_FAMILY, FONT_SIZE } from 'constants/appFonts';
import { BACKGROUND_COLOR, CUSTOM_COLOR } from 'constants/colors';
import { Formik } from 'formik';
import { translate } from 'src/i18n';
import React, { useEffect, useState } from 'react';
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
import { useNavigation } from '@react-navigation/native';
import SCREENS_NAME from 'constants/screens';
import { loginFailure, loginHandle } from 'actions/auth';
import { showCompleteModal } from 'actions/system';
import { Icon } from 'components/';
import {
  auth,
  firebaseDatabase,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  firebaseDatabaseRef,
  firebaseSet
} from 'src/configs/firebase';

const { width: WIDTH } = Dimensions.get('window');

const LoginSchema = Yup.object().shape({
  password: Yup.string().required('auth.passwordRequired').min(6, 'auth.passwordErrorMin'),
  account: Yup.string().required('auth.userNameRequired').max(255, 'auth.accountErrorMax')
});

const LoginScreen = () => {
  const [isShowPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [values, setValues] = useState(null);

  useEffect(() => {
    if (values) {
      dispatch(
        loginHandle({
          params: {
            email: values.account.trim(),
            password: values.password.trim()
          },
          onRegisterSuccess,
          onRegisterFail,
          handleErr
        })
      );
    }
  }, [values]);

  const onRegisterSuccess = () => {
    dispatch(
      showCompleteModal({
        title: 'Đăng nhập thành công',
        icon: <Icon fontName="AntDesign" size={25} color="red" name="closecircle" />,
        content: 'Chúc bạn tìm được công việc thích hợp trong thời gian sớm nhất!',
        buttonTitle: 'Xác nhận',
        onConfirm: () => {},
        onClose: () => {}
      })
    );
  };

  const onRegisterFail = () => {
    dispatch(
      showCompleteModal({
        title: 'Đăng nhập không thành công',
        icon: <Icon fontName="AntDesign" size={25} color="red" name="closecircle" />,
        content: 'Sai tên đăng nhập hoặc mật khẩu',
        buttonTitle: 'Đăng nhập lại',
        onConfirm: () => {},
        onClose: () => {}
      })
    );
  };

  const onPressRegister = () => {
    navigation.navigate(SCREENS_NAME.REGISTER_SCREEN, {});
  };

  const handleErr = error => {
    dispatch(loginFailure(error));
    dispatch(
      showCompleteModal({
        title: 'Lỗi kết nối',
        icon: <Icon fontName="AntDesign" size={25} color="red" name="closecircle" />,
        content: 'Vui lòng kiểm tra lại',
        buttonTitle: 'Xác nhận',
        onConfirm: () => {},
        onClose: () => {}
      })
    );
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
            setValues(values);
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
                  auth.login
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

                <StyledTouchable
                  onPress={handleSubmit}
                  disabled={disabled}
                  customStyle={[
                    styles.loginBtn,
                    disabled && { backgroundColor: BACKGROUND_COLOR.BasicGray }
                  ]}>
                  <AppText style={[styles.loginTxt]} translate>
                    auth.login
                  </AppText>
                </StyledTouchable>

                <StyledTouchable onPress={onPressRegister} customStyle={[styles.forgotBtn]}>
                  <Text style={[styles.forgotTxt]} translate>
                    {`${translate('auth.notHaveAccount')} `}
                    <Text translate style={[styles.registerTxt]}>
                      {translate('auth.register')}
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

export default LoginScreen;
