import React, { memo } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { ICIncome } from 'assets/icons';
import { AppText } from 'src/components';

const Income = props => {
  const { data } = props;
  const { wage } = data;
  return (
    <View style={styles.income}>
      <View style={styles.incomeTitle}>
        <ICIncome width={25} height={30} color="gray" />
        <AppText style={styles.incomeTitleText} translate>
          common.income_2
        </AppText>
      </View>
      <View style={styles.incomeWage}>
        <Text style={styles.incomeWageText}>{wage}</Text>
      </View>
    </View>
  );
};

export default memo(Income);
