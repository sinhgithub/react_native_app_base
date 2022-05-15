import React, { memo, useCallback, useState } from 'react';
import { View, ScrollView, Text } from 'react-native';

import styles from './styles';
import { useDispatch, useSelector } from 'react-redux';

import { logout } from 'actions/auth';
import { useNavigation } from '@react-navigation/core';
import DropDown from 'components/DropDown';
import { cloneDeep } from 'lodash';
import { Button } from 'components/';

const MenuScreen = () => {
  const dispatch = useDispatch();
  const [dropDownActives, setDropDownActives] = useState(null);
  const { configSite } = useSelector(state => state.configSite);

  const handleOpenMenu = useCallback(async url => {}, []);

  const handlePressShowDropDown = useCallback(title => {
    setDropDownActives(prev => {
      if (prev) {
        const tmp = cloneDeep(prev);
        for (const k in prev) {
          if (k === title) {
            tmp[k] = { isActive: !prev[k].isActive, title };
          } else if (prev?.[title]?.isActive) {
            tmp[title] = { title, isActive: false };
          } else {
            tmp[title] = { title, isActive: true };
          }
        }
        return tmp;
      }
      return {
        [title]: {
          title,
          isActive: true
        }
      };
    });
  }, []);

  const listMenu = configSite?.footer?.map((item, index) => {
    let isActive = dropDownActives?.[item.title]?.isActive;
    return (
      <DropDown
        isActive={isActive}
        key={item?.id || index}
        data={item}
        onPressMenu={handlePressShowDropDown}
        handleOpenMenu={handleOpenMenu}
      />
    );
  }, []);

  const handleLogout = useCallback(() => {
    dispatch(logout({}));
  }, [dispatch]);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.menuArea}>{listMenu}</View>
      <View style={styles.companyInfo}>
        <Text style={styles.companyInfoText}>Hotline: 0987987222</Text>
        <Text style={styles.companyInfoText}>Website: áhdjasd.com.vn</Text>
        <Text style={styles.companyInfoText}>Email: sinh@ágdh.com</Text>
        <Text style={styles.companyInfoText}>{configSite?.footerDesc || ''}</Text>
      </View>
      <View style={styles.buttonArea}>
        <Button submitMethod={handleLogout} type="modal" title="Đăng xuất" />
      </View>
    </ScrollView>
  );
};

export default memo(MenuScreen);
