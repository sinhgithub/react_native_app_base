import React, { memo, useCallback, useEffect, useMemo } from 'react';
import { View, ScrollView } from 'react-native';
import {
  NotificationWarning,
  RowBigIcon,
  TitleSection,
  CardJob,
  CardJobSkeleton
} from 'src/components';
import { ICNotification } from 'assets/icons';
import { translate } from 'src/i18n';
import styles from './styles3';
import { idTreeBigIcons, treeBigIconsConfig } from 'constants/data_constants';
import { getListJobHomePageHandle } from 'actions/getListJob';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import SCREEN_NAME from 'constants/screens';
import { getUserHandle } from 'actions/user';
import { getListNotifyHandle } from 'actions/notification';
import { setTabIndexMessageBox } from 'actions/system';
import SCREENS_NAME from 'constants/screens';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { listJobHomePage, loading } = useSelector(state => state.listJob);
  const { notifyList } = useSelector(state => state.notification);

  useEffect(() => {
    dispatch(getListJobHomePageHandle());
    dispatch(getUserHandle({}));
    dispatch(getListNotifyHandle({ success: () => {}, failure: () => {}, handleErr: () => {} }));
    const focusListener = navigation.addListener('focus', () => {
      dispatch(getUserHandle({}));
      dispatch(getListNotifyHandle({ success: () => {}, failure: () => {}, handleErr: () => {} }));
    });
    return () => {
      focusListener();
    };
  }, [dispatch, navigation]);

  const notifyListUnread = useMemo(() => {
    const result = [];
    if (notifyList) {
      for (const k in notifyList) {
        if (!notifyList[k].isRead) {
          result.push(notifyList[k]);
        }
      }
    }
    return result;
  }, [notifyList]);

  const onClickCardJob = useCallback(
    data => {
      navigation.navigate(SCREEN_NAME.DETAIL_JOB_SCREEN, { cardJob: data });
    },
    [navigation]
  );

  const onClickRowBigIcon = useCallback(id => {
    switch (id) {
      case idTreeBigIcons.find_job:
        navigation.navigate(SCREEN_NAME.FIND_JOB_SCREEN);
        break;
      case idTreeBigIcons.income:
        navigation.navigate(SCREEN_NAME.INCOME_SCREEN);
        break;
      case idTreeBigIcons.support:
        break;
      default:
        return;
    }
  }, []);

  const listJob = listJobHomePage.map((job, index) => {
    const isLastItem = index === listJobHomePage.length - 1;
    return <CardJob onPress={onClickCardJob} data={job} key={job.id} isLastItem={isLastItem} />;
  });

  const listSkeleton = Array(3)
    .fill('')
    .map((v, i) => {
      return <CardJobSkeleton key={i} />;
    }, []);

  const onViewNoti = useCallback(() => {
    dispatch(setTabIndexMessageBox(1));
    navigation.navigate(SCREENS_NAME.MESSAGE_BOX_SCREEN, {});
  }, []);

  return (
    <View style={styles.homeScreen}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {notifyListUnread?.length >= 0 && (
          <View style={styles.notificationWarning}>
            <NotificationWarning
              icon={<ICNotification />}
              contentText={`${translate('common.you_have')} ${
                notifyListUnread?.length || 0
              } ${translate('common.new_message')}`}
              titleAction="common.see_now"
              onPress={onViewNoti}
            />
          </View>
        )}
        <View style={styles.rowBigIcon}>
          <RowBigIcon data={treeBigIconsConfig} onPress={onClickRowBigIcon} />
        </View>
        <View style={styles.listJob}>
          <TitleSection title={translate('common.urgently_need_someone')} />
          {loading ? listSkeleton : <View style={styles.listCardJob}>{listJob}</View>}
        </View>
      </ScrollView>
    </View>
  );
};

export default memo(HomeScreen);
