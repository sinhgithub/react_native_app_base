import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { View, ScrollView, Text } from 'react-native';
import styles from './styles';
import MainHeader from 'components/MainHeader';
import { useNavigation } from '@react-navigation/native';
import { WarningBox, Button, Icon } from 'src/components';
import { translate } from 'src/i18n';
import JobInfo from './components/JobInfo';
import Income from './components/Income';
import JobDesc from './components/JobDesc';
import Benefit from './components/Benefit';
import JobRequire from './components/JobRequire';
import JobContact from './components/JobContact';
import { useDispatch, useSelector } from 'react-redux';
import { setAnimatedBottomModalSuccess, setAnimatedBottomModalFailure } from 'actions/system';
import { receiveJobHandle } from 'actions/receive_job';

const DetailJob = props => {
  const navigation = useNavigation();
  const { cardJob } = props.route.params;
  const dispatch = useDispatch();
  const { animatedBottomModal } = useSelector(state => state.system);
  const [modalBonusInfo, setModalBonusInfo] = useState(null);
  const { token } = useSelector(state => state.auth.memberInfo);
  const { onPressWarningBox = () => {} } = props;

  useEffect(() => {
    navigation.setOptions({
      header: () => {
        return (
          <MainHeader
            mainHeaderRightText={`${translate('common.profile_code')}: 11020348ANN12M`}
            containerStyle={styles.headerContainerStyle}
          />
        );
      }
    });
  }, [navigation]);

  const dataJobDetail = useMemo(() => {
    return {
      infoJob: {
        title: cardJob?.title,
        companyName: cardJob?.companyName,
        address: cardJob?.addressMapped,
        isBonus: cardJob?.isBonusMapped,
        isPaidAfterWork: cardJob?.isPaidAfterWorkMapped,
        timeRemaining: cardJob?.timeRemainingMapped
      },
      income: {
        wage: cardJob?.wageMapped
      },
      jobDesc: {
        recruitedQuantity: cardJob?.recruitedQuantity,
        desc: cardJob?.jobDescription
      },
      benefit: cardJob?.bonus,
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
        contactEmail: cardJob.contactEmail
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
        ? [`Thưởng: ${modalBonusInfo.bonusFrom} - ${modalBonusInfo.bonusTo}`]
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

  const onReceiveJob = useCallback(() => {
    dispatch(receiveJobHandle({ jobId: cardJob.id }));
  }, [cardJob?.id, dispatch]);

  const onSaveJob = useCallback(() => {
    console.log('asjdjasd');
  }, []);

  return (
    <View style={styles.detailScreen}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.warningBox}>
          <WarningBox
            warningText={translate('common.not_committed_tax')}
            onPressActionText={onPressWarningBox}
            warningActionText={translate('common.find_out_more')}
          />
        </View>
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
            <Benefit data={dataJobDetail.benefit} onPress={onPressBenefitItem} />
          </View>
          <View style={styles.jobRequire}>
            <JobRequire data={dataJobDetail.jobRequire} />
          </View>
          <View style={styles.jobContact}>
            <JobContact data={dataJobDetail.jobContact} />
          </View>
        </View>
      </ScrollView>
      <View style={styles.buttonArea}>
        <Button
          titleConfirm={translate('common.receive_job')}
          titleReject={translate('common.save')}
          type="confirm_reject"
          submitMethod={onReceiveJob}
          rejectMethod={onSaveJob}
        />
      </View>
    </View>
  );
};

export default memo(DetailJob);
