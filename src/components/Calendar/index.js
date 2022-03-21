import React, { memo } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import moment from 'moment';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { TEXT_COLOR } from 'constants/colors';
import { FONT_FAMILY } from 'constants/appFonts';
LocaleConfig.locales['fr'] = {
  monthNames: [
    'Tháng 1',
    'Tháng 2',
    'Tháng 3',
    'Tháng 4',
    'Tháng 5',
    'Tháng 6',
    'Tháng 7',
    'Tháng 8',
    'Tháng 9',
    'Tháng 10',
    'Tháng 11',
    'Tháng 12'
  ],
  monthNamesShort: [
    'Tháng 1',
    'Tháng 2',
    'Tháng 3',
    'Tháng 4',
    'Tháng 5',
    'Tháng 6',
    'Tháng 7',
    'Tháng 8',
    'Tháng 9',
    'Tháng 10',
    'Tháng 11',
    'Tháng 12'
  ],
  dayNames: ['Chủ nhật', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7'],
  dayNamesShort: ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7']
};
LocaleConfig.defaultLocale = 'fr';
const minDate = moment(new Date('2010-01-01')).format('YYYY-MM-DD');
const now = moment(new Date()).format('YYYY-MM-DD');
const CustomCalendar = props => {
  const { markedDates, onPressDay, id, data } = props;
  return (
    <View style={styles.container}>
      <Calendar
        initialDate={'2022-03-20'}
        minDate={'2000-01-01'}
        maxDate={'2100-01-31'}
        onDayPress={date => {
          onPressDay(id, date, data);
        }}
        current={'2022-03-28'}
        // onDayLongPress={day => {
        //   console.log('selected day', day);
        // }}
        // monthFormat={'DD MM YYYY'}
        // onMonthChange={month => {
        //   console.log('month changed', month);
        // }}
        hideArrows={true}
        // renderArrow={direction => {
        //   if (direction === 'left') {
        //     return (
        //       <Icon fontName="AntDesign" color={CUSTOM_COLOR.Red} size={30} name="arrowleft" />
        //     );
        //   } else {
        //     return (
        //       <Icon fontName="AntDesign" color={CUSTOM_COLOR.Red} size={30} name="arrowright" />
        //     );
        //   }
        // }}
        firstDay={1}
        onPressArrowLeft={subtractMonth => subtractMonth()}
        onPressArrowRight={addMonth => addMonth()}
        renderHeader={date => {
          const dayDetail = moment(date[0]).format('DD/MM/YYYY');
          return (
            <View style={styles.headerArea}>
              {/* <TouchableOpacity
                onPress={() => {
                  refCalendar.updateMonth(date);
                }}>
                <Icon fontName="AntDesign" color={CUSTOM_COLOR.Red} size={30} name="arrowleft" />
              </TouchableOpacity> */}
              <View style={styles.dateHeader}>
                <Text style={styles.dateHeaderText}>{dayDetail}</Text>
              </View>
              {/* <Icon fontName="AntDesign" color={CUSTOM_COLOR.Red} size={30} name="arrowright" /> */}
            </View>
          );
        }}
        enableSwipeMonths={true}
        markedDates={markedDates}
        markingType={'custom'}
        theme={{
          todayTextColor: 'white',
          todayBackgroundColor: 'green',
          textDayStyle: {
            fontFamily: FONT_FAMILY.REGULAR,
            color: TEXT_COLOR.Black
          }
        }}
      />
    </View>
  );
};

export default memo(CustomCalendar);
