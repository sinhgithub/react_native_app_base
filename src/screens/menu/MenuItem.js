import React, { memo, useCallback, useEffect, useMemo } from 'react';
import { View, ScrollView, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {
  NotificationWarning,
  RowBigIcon,
  TitleSection,
  CardJob,
  CardJobSkeleton
} from 'src/components';
import { ICNotification } from 'assets/icons';
import { translate } from 'src/i18n';
import { idTreeBigIcons, inputType, treeBigIconsConfig } from 'constants/data_constants';
import { getListJobHomePageHandle } from 'actions/getListJob';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import SCREEN_NAME from 'constants/screens';
import { getUserHandle } from 'actions/user';
import { getListNotifyHandle } from 'actions/notification';
import { setTabIndexMessageBox } from 'actions/system';
import SCREENS_NAME from 'constants/screens';
import FastImage from 'react-native-fast-image';
import { getConfigSiteHandle } from 'actions/configSite';
import FormCustom from 'components/FormCustom';
import CustomInput from 'components/FormCustom/conponents/CustomInput';
import CardCategoryBg from 'components/CardCategoryBg';
import { getBusinessCategoryHandle } from 'actions/master_data';
import { SPACING } from 'constants/size';
import { FlatList } from 'react-native-gesture-handler';
import { getEmployerHandle } from 'actions/employer';
import CardEmployer from 'components/CardEmployer';
import { Icon } from 'components/';
import { FONT_FAMILY, FONT_SIZE } from 'constants/appFonts';
import { Shadow } from 'constants/stylesCSS';

const MenuItem = props => {
  const { onPress, title, id } = props;
  return (
    <TouchableOpacity style={styles.menuItem} onPress={() => onPress(id)}>
      <Icon name="exit-to-app" fontName="MaterialIcons" size={25} color="red" />
      <Text style={styles.menuName}>{title || ''}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    margin: SPACING.XNormal,
    padding: SPACING.XNormal,
    ...Shadow
  },
  menuName: {
    fontSize: FONT_SIZE.BodyText,
    color: 'black',
    fontFamily: FONT_FAMILY.REGULAR,
    fontWeight: '500',
    marginLeft: SPACING.XNormal
  }
});

export default memo(MenuItem);
