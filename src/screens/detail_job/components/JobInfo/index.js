import React, { memo } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import FastImage from 'react-native-fast-image';
import { Button } from 'src/components';
import { Icon } from 'src/components';
import { CUSTOM_COLOR } from 'constants/colors';
import { translate } from 'src/i18n';

const JobInfo = props => {
  const { data } = props;
  const { title, companyName, address, isBonus, isPaidAfterWork, timeRemaining } = data;

  return (
    <View style={styles.jobInfoInfo}>
      <View style={styles.jobInfoInfoImage}>
        <View style={styles.jobInfoInfoImageText}>
          <Text style={styles.jobInfoInfoImageTextDesc}>Banner</Text>
        </View>
        <FastImage
          style={styles.jobInfoInfoImageImage}
          source={{
            uri: 'https://fpthcm.net/wp-content/uploads/2018/06/cropped-logo_fpt.png'
          }}
          resizeMode={FastImage.resizeMode.stretch}
        />
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
