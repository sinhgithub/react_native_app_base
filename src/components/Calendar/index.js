import React, { memo, useCallback } from 'react';
import { View } from 'react-native';
import styles from './styles';
import moment from 'moment';
import DatePicker from 'react-native-styled-datepicker';

const minDate = moment(new Date('2010-01-01')).format('YYYY-MM-DD');
const now = moment(new Date()).format('YYYY-MM-DD');
const CustomCalendar = props => {
  const onChangeDate = useCallback(date => console.log(date), []);
  return (
    <View style={styles.container}>
      <DatePicker
        isCustomDateContainer
        minDate={minDate}
        yearTextStyles={styles.yearTextStyles}
        arrowStyles={styles.arrowStyles}
        initialViewDate={now}
        onChange={onChangeDate}
      />
    </View>
  );
};

export default memo(CustomCalendar);
