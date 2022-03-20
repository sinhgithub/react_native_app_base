/* eslint-disable comma-dangle */
import React, { useCallback, useEffect, useState } from 'react';
import { View, ImageBackground, TextInput, ScrollView, Alert } from 'react-native';
import styles from './styles';
import { loginFormConfigs } from 'configs/loginFormConfigs';
import useKeyboard from 'src/hooks/useKeyboard';
import Button from 'components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { loginFailure, loginHandle } from 'actions/auth';
import { translate } from 'src/i18n';
import { useNavigation } from '@react-navigation/native';
import SCREENS_NAME from 'constants/screens';

const Login = () => {
  const keyboard = useKeyboard();
  const [value, setValue] = useState({});
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const isLogin = useSelector(state => state.auth.isLogin);

  const onFocus = useCallback(() => {
    // scrollRef.scrollTo(0, -keyboard?.height || 0, true);
  }, []);

  const onChange = useCallback((id, v) => {
    setValue(prev => ({ ...prev, [id]: v }));
  }, []);

  const createThreeButtonAlert = useCallback(
    (data, url) => {
      Alert.alert(data, url, [
        {
          text: 'Ask me later',
          onPress: () => dispatch(loginFailure())
        },
        {
          text: 'Cancel',
          onPress: () => dispatch(loginFailure()),
          style: 'cancel'
        },
        { text: 'OK', onPress: () => dispatch(loginFailure()) }
      ]);
    },
    [dispatch]
  );

  const onSubmit = useCallback(() => {
    const params = {
      // email: value?.user?.trim(),
      // password: value?.password?.trim(),
      email: 'hun1g@gmail.com',
      password: '123456',
      callback: createThreeButtonAlert
    };
    dispatch(loginHandle(params));
    // if (value?.user && value?.password) {
    //   dispatch(loginHandle(params));
    // }
  }, [createThreeButtonAlert, dispatch, value?.password, value?.user]);

  useEffect(() => {
    if (isLogin) {
      navigation.navigate(SCREENS_NAME.MAIN_SCREEN);
    }
  }, [isLogin, navigation]);

  const listInput = loginFormConfigs.map((item, index) => {
    const { placeholder, icon, id } = item;
    return (
      <View style={styles.formGroup} key={id || index}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          onFocus={onFocus}
          onChangeText={v => onChange(id, v)}
        />
        <View style={styles.icon}>{icon}</View>
      </View>
    );
  });

  return (
    <ImageBackground
      source={require('assets/images/bg-login.jpg')}
      resizeMode="stretch"
      style={styles.flex1}>
      <ScrollView style={styles.scrollView}>
        <View
          style={[
            styles.scrollViewContent,
            {
              paddingBottom: keyboard?.keyboardInfo?.height || 0
            }
          ]}>
          <View style={styles.scrollViewContentItem}>
            <View style={styles.formWrapper}>{listInput}</View>
          </View>
          <View style={styles.scrollViewContentItem}>
            <Button title={translate('login')} type="basic" submitMethod={onSubmit} />
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default React.memo(Login);
