import React, { useCallback, useState } from 'react';
import { View, ImageBackground, TextInput, ScrollView } from 'react-native';
import styles from './styles';
import { loginFormConfigs } from 'configs/loginFormConfigs';
import useKeyboard from 'src/hooks/useKeyboard';
import Button from 'components/Button';
import { useDispatch } from 'react-redux';
import { loginHandle } from 'actions/auth';
import { translate } from 'src/i18n';

const Login = () => {
  const keyboard = useKeyboard();
  const [value, setValue] = useState({});
  const dispatch = useDispatch();

  const onChange = useCallback((id, v) => {
    setValue(prev => ({ ...prev, [id]: v }));
  }, []);

  const onSubmit = useCallback(() => {
    const params = {
      email: value?.user?.trim(),
      password: value?.password?.trim()
    };
    if (value?.user && value?.password) {
      dispatch(loginHandle(params));
    }
    dispatch(loginHandle({ email: 'ungvien1@gmail.com', password: '123456' }));
  }, [dispatch, value?.password, value?.user]);

  const listInput = loginFormConfigs.map((item, index) => {
    const { placeholder, icon, id } = item;
    return (
      <View style={styles.formGroup} key={id || index}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          onChangeText={v => onChange(id, v)}
          autoCapitalize="none"
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
      <ScrollView style={styles.scrollView} keyboardShouldPersistTaps="alway">
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
