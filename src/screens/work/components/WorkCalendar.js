import React, { memo } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CalendarCustom } from 'components/';

const WorkCalendar = props => {
  return (
    <View style={styles.container}>
      <View style={styles.calendar}>
        <CalendarCustom />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  calendar: {
    flex: 1
  }
});

export default memo(WorkCalendar);
