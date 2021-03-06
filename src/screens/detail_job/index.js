import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { View, ScrollView, Text } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { Button, Icon } from 'src/components';
import { translate } from 'src/i18n';
import JobInfo from './components/JobInfo';
import Income from './components/Income';
import JobDesc from './components/JobDesc';
import Benefit from './components/Benefit';
import JobRequire from './components/JobRequire';
import JobContact from './components/JobContact';
import FileIncome from './components/File';
import { useDispatch, useSelector } from 'react-redux';
import { setAnimatedBottomModalSuccess, showCompleteModal, showConfirmModal } from 'actions/system';
import { saveJobHandle } from 'actions/saveJob';
import { receiveJobHandle } from 'actions/receive_job';
import {
  getListAppliedJobHandle,
  getListApplyJobHandle,
  getListFollowJobHandle
} from 'actions/getListJob';
import { getImageFromHost } from 'configs/appConfigs';
import { FONT_FAMILY, FONT_SIZE } from 'constants/appFonts';
import { CUSTOM_COLOR } from 'constants/colors';

const DetailJob = props => {
  const { cardJob } = props.route.params;
  const dispatch = useDispatch();
  const { animatedBottomModal } = useSelector(state => state.system);
  const [modalBonusInfo, setModalBonusInfo] = useState(null);
  const dataJobDetail = useMemo(() => {
    return {
      infoJob: {
        title: cardJob?.title,
        companyName: cardJob?.employer?.companyName,
        address: cardJob?.addressMapped,
        isBonus: cardJob?.isBonusMapped,
        isPaidAfterWork: cardJob?.isPaidAfterWorkMapped,
        timeRemaining: cardJob?.timeRemainingMapped,
        jobBanner: cardJob?.jobBanner
      },
      income: {
        wage: cardJob?.wageMapped,
        luongthoathuan: cardJob?.luongthoathuan
      },
      jobDesc: {
        recruitedQuantity: cardJob?.numberRecruitments,
        desc: cardJob?.jobDescription
      },
      bonus: cardJob?.bonus,
      benefit: [cardJob.benefit],
      jobRequire: {
        type: cardJob.type,
        gender: cardJob.sex,
        degree: cardJob.rank,
        career: cardJob.category.name,
        education: cardJob.literacy,
        experienceLevel: cardJob.experienceLevel
      },
      jobContact: {
        contactName: cardJob.contactName,
        contactPhone: cardJob.contactPhone,
        contactEmail: cardJob.contactEmail,
        contactLogo: getImageFromHost(cardJob?.employer?.logo)
      }
    };
  }, [cardJob]);

  const renderModalBonusContent = useCallback(() => {
    if (!modalBonusInfo) {
      return null;
    }
    const renderItem = (title, details) => {
      return (
        <View style={styles.modalBonusContentItem}>
          <View style={styles.row}>
            <View style={styles.modalBonusContentItemIcon}>
              <Icon name="pushpin" fontName="AntDesign" size={20} color="black" />
            </View>
            <Text style={styles.modalBonusContentItemTitle}>{title}</Text>
          </View>
          {details?.map((detail, index) => (
            <View key={index} style={styles.modalBonusContentItemDetail}>
              <Text style={styles.modalBonusContentItemDetailText}>{detail}</Text>
            </View>
          ))}
        </View>
      );
    };
    const benefit =
      modalBonusInfo.bonusFrom && modalBonusInfo.bonusTo
        ? [`Th?????ng: ${modalBonusInfo.bonusFrom} - ${modalBonusInfo.bonusTo}`]
        : modalBonusInfo.bonusFrom
        ? [`${modalBonusInfo.bonusFrom}`]
        : modalBonusInfo.bonusTo
        ? [`${modalBonusInfo.bonusTo}`]
        : [];
    return (
      <View style={styles.modalBonusContent}>
        <View style={styles.modalBonusContentTitle}>
          <Text style={styles.modalBonusContentTitleText}>{modalBonusInfo.title}</Text>
        </View>
        <View style={styles.modalBonusContentMain}>
          {renderItem(
            translate('common.detail'),
            benefit.concat(modalBonusInfo.bonusDescription?.split('\n'))
          )}
          {renderItem(translate('common.condition'), modalBonusInfo.proviso?.split('\n'))}
          {renderItem(translate('common.time'), modalBonusInfo.time?.split('\n'))}
        </View>
        <View style={styles.buttonModalArea}>
          <Button type="modal" title={translate('common.looking_more')} />
        </View>
      </View>
    );
  }, [modalBonusInfo]);

  console.log(cardJob, '======');

  useEffect(() => {
    if (modalBonusInfo) {
      dispatch(setAnimatedBottomModalSuccess({ content: renderModalBonusContent() }));
    }
  }, [dispatch, modalBonusInfo, renderModalBonusContent]);

  const onPressBenefitItem = useCallback(
    benefit => {
      if (animatedBottomModal.content) {
        dispatch(setAnimatedBottomModalSuccess({ isDisplay: true }));
      } else {
        setModalBonusInfo({ ...benefit });
      }
    },
    [animatedBottomModal.content, dispatch]
  );

  useEffect(() => {
    if (animatedBottomModal.content) {
      dispatch(setAnimatedBottomModalSuccess({ isDisplay: true }));
    }
  }, [animatedBottomModal.content, dispatch]);

  return (
    <View style={styles.detailScreen}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.detailScreenContent}>
          <View style={styles.jobInfo}>
            <JobInfo data={dataJobDetail.infoJob} />
          </View>
          <View style={styles.income}>
            <Income data={dataJobDetail.income} />
          </View>
          <View style={styles.jobDesc}>
            <JobDesc data={dataJobDetail.jobDesc} />
          </View>
          <View style={styles.benefit}>
            <Benefit title="Quy???n l???i" data={dataJobDetail.benefit} onPress={onPressBenefitItem} />
          </View>
          <View style={styles.benefit}>
            <Benefit
              data={dataJobDetail.bonus}
              title="Th?????ng"
              isBonus
              onPress={onPressBenefitItem}
            />
          </View>
          <View style={styles.jobRequire}>
            <JobRequire data={dataJobDetail.jobRequire} />
          </View>
          <View style={styles.jobContact}>
            <JobContact data={dataJobDetail.jobContact} cardJob={cardJob} />
          </View>
          <View style={styles.jobContact}>
            <FileIncome data={dataJobDetail.jobContact} cardJob={cardJob} />
          </View>
          {cardJob.note && cardJob.ctv_name ? (
            <View style={styles.jobContact}>
              <Text
                style={{
                  fontFamily: FONT_FAMILY.REGULAR,
                  fontSize: FONT_SIZE.BodyText,
                  textDecorationColor: CUSTOM_COLOR.Black,
                  color: 'red',
                  flex: 1,
                  paddingVertical: 20
                }}>
                {`${cardJob.note} : ${cardJob.ctv_name}`}
              </Text>
            </View>
          ) : null}
        </View>
      </ScrollView>
    </View>
  );
};

export default memo(DetailJob);
