import React, { memo, useCallback, useMemo, useRef, useState } from 'react';
import { View, Text, KeyboardAvoidingView, Keyboard, TextInput, ScrollView } from 'react-native';
import { tabDetailProfileScreen, detailProfileForm } from 'constants/data_constants';
import { TabsHorizontal, Form } from 'components/';
import styles from './styles';
import Avatar from './components/Avatar';
import { screenHeight, navbarHeight, MAIN_HEADER_HEIGHT, statusBarHeight } from 'constants/size';
import AccountBank from './components/AccountBank';
import { BACKGROUND_COLOR } from 'constants/colors';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useSelector } from 'react-redux';
import { cloneDeep } from 'lodash';
const DetailProfile = props => {
  const onChangeTab = useCallback(index => {}, []);
  const refScroll = useRef(null);
  const { user, loading } = useSelector(state => state.user);
  const formData = useMemo(() => {
    const cloneData = cloneDeep(detailProfileForm);
    cloneData.forEach((item, index) => {
      for (const k in user) {
        if (k === item.id) {
          cloneData[index].value = user[k];
        }
      }
      if (item.id === 'address') {
        cloneData[index].value = user?.jobSeeker.address;
      }
    });
    return cloneData;
  }, [user]);

  return (
    <View onStartShouldSetResponder={() => Keyboard.dismiss()} style={[styles.container]}>
      <KeyboardAvoidingView enabled behavior="height" style={styles.container}>
        {/* <ScrollView ref={refScroll} showsVerticalScrollIndicator={false}> */}
        {/* <View>
              <TabsHorizontal onPress={onChangeTab} data={tabDetailProfileScreen} />
            </View> */}
        <View style={styles.avatar}>
          <Avatar avatar={user?.avatar} />
        </View>
        <View style={styles.detailProfile}>
          <Form refScroll={refScroll} data={formData} />
        </View>
        {/* </ScrollView> */}
      </KeyboardAvoidingView>
    </View>
  );
};

export default memo(DetailProfile);
