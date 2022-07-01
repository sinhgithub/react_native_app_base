import React, { memo } from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import FastImage from 'react-native-fast-image';
import { Button } from 'src/components';
import { Icon } from 'src/components';
import { CUSTOM_COLOR } from 'constants/colors';
import { translate } from 'src/i18n';
import { default_avatar } from 'assets/images';

const JobInfo = props => {
  const { data } = props;
  const { title, companyName, address, isBonus, isPaidAfterWork, timeRemaining, jobBanner } = data;

  return (
    <View style={styles.jobInfoInfo}>
      <View style={styles.jobInfoInfoImage}>
        {jobBanner ? (
          <FastImage
            style={styles.jobInfoInfoImageImage}
            source={{
              uri: jobBanner
            }}
            resizeMode={FastImage.resizeMode.stretch}
          />
        ) : (
          <Image style={styles.jobInfoInfoImageImage} source={default_avatar} />
        )}
      </View>
      <Text style={styles.jobInfoInfoTitle}>{title}</Text>
      <Text style={styles.jobInfoInfoCompany}>{companyName}</Text>
      <Text style={styles.jobInfoInfoAddress}>{address}</Text>
      <View style={styles.jobInfoInfoButtonArea}>
        {isBonus && (
          <Button
            type="card"
            title={translate('common.have_bonus')}
            buttonStyle={styles.jobInfoInfoButtonAreaButtonBonus}
            titleStyle={styles.jobInfoInfoButtonAreaButtonBonusTitle}
          />
        )}
        {isPaidAfterWork && (
          <Button
            type="card"
            title={translate('common.wage_after_work')}
            buttonStyle={styles.jobInfoInfoButtonAreaButtonWage}
            titleStyle={styles.jobInfoInfoButtonAreaButtonWageTitle}
          />
        )}
      </View>
      <View style={styles.jobInfoInfoRemainTime}>
        <Icon name="clockcircle" size={20} color={CUSTOM_COLOR.RedBasic} fontName="AntDesign" />
        <Text style={styles.jobInfoInfoRemainTimeText}>{timeRemaining}</Text>
      </View>
    </View>
  );
};

export default memo(JobInfo);
