import React, { memo, useCallback, useRef, useState } from 'react';
import { View, Text, KeyboardAvoidingView, Keyboard, TextInput, ScrollView } from 'react-native';
import { tabDetailProfileScreen } from 'constants/data_constants';
import { TabsHorizontal, Form } from 'components/';
import styles from './styles';
import Avatar from './components/Avatar';
import { screenHeight, navbarHeight, MAIN_HEADER_HEIGHT, statusBarHeight } from 'constants/size';
import AccountBank from './components/AccountBank';
import { BACKGROUND_COLOR } from 'constants/colors';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
const DetailProfile = props => {
  const onChangeTab = useCallback(index => {}, []);
  const refScroll = useRef(null);
  return (
    <>
      <KeyboardAvoidingView style={styles.container} behavior="height">
        <ScrollView ref={refScroll} style={styles.container} showsVerticalScrollIndicator={false}>
          <View onStartShouldSetResponder={() => Keyboard.dismiss()} style={[styles.container]}>
            <View>
              <TabsHorizontal onPress={onChangeTab} data={tabDetailProfileScreen} />
            </View>
            <View style={styles.avatar}>
              <Avatar />
            </View>
            <View style={styles.detailProfile}>
              <Form refScroll={refScroll} />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <View style={styles.accountBankContainer}>
        <AccountBank
          buttonStyle={styles.accountBank}
          buttonGradient={[BACKGROUND_COLOR.BasicGray, BACKGROUND_COLOR.BasicGray]}
          buttonTextStyle={styles.accountBankTextTitle}
        />
      </View>
    </>
  );
};

export default memo(DetailProfile);
