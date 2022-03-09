import React, { memo } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const WarningBox = props => {
  const { warningText, warningActionText, onPressActionText = () => {} } = props;
  return (
    <View style={styles.WarningBox}>
      <Text style={styles.WarningBoxText}>{warningText}</Text>
      {warningActionText && (
        <Text style={styles.WarningBoxActionText} onPress={onPressActionText}>
          {warningActionText}
        </Text>
      )}
    </View>
  );
};

export default memo(WarningBox);
