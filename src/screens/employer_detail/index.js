import React, { memo, useCallback, useEffect } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import styles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/core';
import SCREENS_NAME from 'constants/screens';
import FastImage from 'react-native-fast-image';
import { getImageFromHost } from 'configs/appConfigs';
import { getEmployerInfoHandle, getEmployerRecruitmentHandle } from 'actions/employer';
import CardJob from 'components/CardJob';
import Icon from 'components/Icon';
import { mapDistrictsAndProvince } from 'helpers/mapAddress';
import QRCode from 'react-native-qrcode-svg';
import { banner_default, default_avatar } from 'assets/images';

const EmployerDetail = props => {
  const { route } = props;
  const { id } = route.params;
  const navigation = useNavigation();
  const { employerInfo, employerJobs } = useSelector(state => state.employers);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getEmployerInfoHandle({
        params: id,
        success: () => {},
        failure: () => {},
        handleErr: () => {}
      })
    );
    dispatch(
      getEmployerRecruitmentHandle({
        params: id,
        success: () => {},
        failure: () => {},
        handleErr: () => {}
      })
    );
  }, [dispatch, id]);

  const onPressCardJob = useCallback(
    data => {
      navigation.navigate(SCREENS_NAME.DETAIL_JOB_SCREEN, { cardJob: data });
    },
    [navigation]
  );

  const listJob = employerJobs?.data?.map((item, index) => {
    return <CardJob key={item?.id || index} data={item} onPress={onPressCardJob} />;
  });

  return (
    <View style={styles.container}>
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.bannerWrapper}>
          {employerInfo?.banner ? (
            <FastImage
              source={{
                uri: getImageFromHost(employerInfo?.banner)
              }}
              resizeMode="cover"
              style={styles.banner}
            />
          ) : (
            <Image source={banner_default} style={styles.banner} resizeMode="stretch" />
          )}
          {employerInfo?.logo ? (
            <FastImage
              source={{
                uri: getImageFromHost(employerInfo?.logo)
              }}
              resizeMode="cover"
              style={styles.logo}
            />
          ) : (
            <Image source={default_avatar} style={styles.logo} resizeMode="cover" />
          )}
          {employerInfo?.website ? (
            <View style={styles.qrCode}>
              <QRCode value={employerInfo.website} size={60} />
            </View>
          ) : null}
        </View>
        <View style={styles.employerInfo}>
          <View style={styles.employerInfoItem}>
            <View style={styles.employerInfoItemIcon}>
              <Icon fontName="Entypo" name="location-pin" size={30} color={'gray'} />
            </View>
            {employerInfo?.district && employerInfo?.province ? (
              <Text style={styles.employerInfoItemText}>
                {`${employerInfo?.address}${employerInfo?.address && ', '}${mapDistrictsAndProvince(
                  employerInfo?.district,
                  employerInfo?.province
                )}`}
              </Text>
            ) : null}
          </View>
          <View style={styles.employerInfoItem}>
            <View style={styles.employerInfoItemIcon}>
              <Icon fontName="Feather" name="users" size={25} color={'gray'} />
            </View>
            {employerInfo?.teamSize ? (
              <Text
                style={
                  styles.employerInfoItemText
                }>{`Quy m?? c??ng ty: ${employerInfo?.teamSize?.name}`}</Text>
            ) : null}
          </View>
          <View style={styles.employerInfoItem}>
            <View style={styles.employerInfoItemIcon}>
              <Icon fontName="Feather" name="users" size={25} color={'gray'} />
            </View>
            {employerInfo?.teamSize ? (
              <Text
                style={
                  styles.employerInfoItemText
                }>{`S??? l?????ng trung b??nh c???n tuy???n: ${employerInfo?.demandSize?.name}`}</Text>
            ) : null}
          </View>
          {employerInfo?.website ? (
            <View style={styles.employerInfoItem}>
              <View style={styles.employerInfoItemIcon}>
                <Icon fontName="Foundation" name="web" size={30} color={'gray'} />
              </View>
              <Text
                style={styles.employerInfoItemText}>{` Website: ${employerInfo?.website}`}</Text>
            </View>
          ) : null}
        </View>
        <View style={styles.employerDesc}>
          {!!employerInfo?.shortDescription && (
            <Text style={styles.employerDescText}>{employerInfo.shortDescription}</Text>
          )}
        </View>
        {employerJobs?.data?.length > 0 && (
          <View style={styles.employerJobs}>
            <Text style={styles.employerJobsTitle}>C??ng vi???c ??ang tuy???n d???ng</Text>
            {listJob}
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default memo(EmployerDetail);
